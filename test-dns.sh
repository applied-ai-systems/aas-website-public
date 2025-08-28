#!/bin/bash

# Applied AI Systems - DNS Propagation Test Script
# Tests domain configuration and SSL certificate status

echo "🌐 Applied AI Systems - DNS & SSL Test"
echo "======================================"
echo ""

# Test DNS resolution
echo "🔍 Testing DNS resolution..."
echo "applied-ai-systems.com:"
dig +short applied-ai-systems.com A
echo ""
echo "www.applied-ai-systems.com:"
dig +short www.applied-ai-systems.com A
echo ""

# Test HTTP response
echo "🚀 Testing HTTP response..."
echo "Main domain:"
curl -s -I https://applied-ai-systems.com | head -3
echo ""
echo "WWW subdomain:"
curl -s -I https://www.applied-ai-systems.com | head -3
echo ""

# Check Vercel domain status
echo "✅ Vercel domain status:"
vercel domains inspect applied-ai-systems.com
echo ""

echo "🎯 Professional website deployment test complete!"
