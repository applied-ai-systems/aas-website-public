// Copyright (c) 2025 Applied AI Systems LLC
// Licensed under the MIT License - see LICENSE file for details
// Government contractor - professional standards enforced

'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  activation: number;
}

interface Connection {
  from: number;
  to: number;
  weight: number;
  pulse: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network parameters
    const nodeCount = 25;
    const maxConnections = 3;
    const connectionDistance = 150;
    const pulseSpeed = 0.02;
    const nodeSpeed = 0.3;

    // Initialize nodes
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * nodeSpeed,
        vy: (Math.random() - 0.5) * nodeSpeed,
        connections: [],
        activation: Math.random(),
      });
    }

    // Initialize connections
    const connections: Connection[] = [];
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          (node.x - nodes[j].x) ** 2 + (node.y - nodes[j].y) ** 2
        );
        if (
          distance < connectionDistance &&
          node.connections.length < maxConnections &&
          nodes[j].connections.length < maxConnections
        ) {
          node.connections.push(j);
          nodes[j].connections.push(i);
          connections.push({
            from: i,
            to: j,
            weight: Math.random(),
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach(node => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -1;
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -1;
        }

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Update activation (simulate neural activity)
        node.activation =
          0.3 + (0.7 * (Math.sin(Date.now() * 0.001 + node.x * 0.01) + 1)) / 2;
      });

      // Draw connections with data pulses
      connections.forEach(connection => {
        const from = nodes[connection.from];
        const to = nodes[connection.to];

        // Update connection distance
        const distance = Math.sqrt((from.x - to.x) ** 2 + (from.y - to.y) ** 2);

        if (distance < connectionDistance * 1.5) {
          // Connection line
          const opacity =
            Math.max(0, (connectionDistance - distance) / connectionDistance) *
            0.3;
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();

          // Data pulse along connection
          connection.pulse += pulseSpeed;
          if (connection.pulse > Math.PI * 2) {
            connection.pulse = 0;
          }

          const pulseProgress = (Math.sin(connection.pulse) + 1) / 2;
          const pulseX = from.x + (to.x - from.x) * pulseProgress;
          const pulseY = from.y + (to.y - from.y) * pulseProgress;

          const pulseOpacity = Math.sin(connection.pulse) * 0.8;
          if (pulseOpacity > 0) {
            ctx.fillStyle = `rgba(34, 197, 94, ${pulseOpacity})`;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        // Outer glow based on activation
        const glowRadius = 8 + node.activation * 4;
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          glowRadius
        );
        gradient.addColorStop(
          0,
          `rgba(59, 130, 246, ${node.activation * 0.6})`
        );
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = `rgba(59, 130, 246, ${0.6 + node.activation * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Activation ring
        if (node.activation > 0.7) {
          ctx.strokeStyle = `rgba(34, 197, 94, ${(node.activation - 0.7) * 3})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
      style={{
        background: 'transparent',
        pointerEvents: 'none',
      }}
    />
  );
}
