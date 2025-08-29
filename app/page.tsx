// Copyright (c) 2025 Applied AI Systems LLC
// Licensed under the MIT License - see LICENSE file for details
// Government contractor - professional standards enforced

import NeuralBackground from '../components/NeuralBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-400">
                  Applied AI Systems
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#capabilities"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Capabilities
                  </a>
                  <a
                    href="#markets"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Markets
                  </a>
                  <a
                    href="#insights"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Insights
                  </a>
                  <a
                    href="#careers"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Careers
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Link */}
            <div className="flex items-center">
              <a
                href="https://github.com/applied-ai-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 p-2 rounded-md transition-colors"
                title="View our GitHub repositories"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Neural Network Background Animation */}
        <NeuralBackground />

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/50"></div>

        {/* Technical data grid (subtle) */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              animation: 'grid-move 30s linear infinite',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32 relative z-10">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            <span className="relative whitespace-nowrap text-blue-400">
              <span className="relative">Advanced</span>
              {/* Animated underline */}
              <span
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"
                style={{
                  width: '100%',
                  animation: 'underline-expand 2s ease-out forwards',
                }}
              ></span>
            </span>{' '}
            Technical Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-300">
            Specialized technical solutions for defense, aerospace, and
            government applications. From intelligence systems to commercial
            space platforms - accelerating project success through advanced
            technology.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-800 focus-visible:outline-blue-600"
              href="#contact"
            >
              Get Started
            </a>
            <a
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-200 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
              href="#markets"
            >
              View Markets
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Mission-Focused Excellence
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Applied AI Systems LLC specializes in technical solutions across
                defense/government systems and commercial aerospace/industry
                applications. Our AI-powered approach accelerates project
                delivery while reducing costs.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-slate-300">
                    Government & Defense Mission Focus
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-slate-300">
                    Security Clearance & Compliance Ready
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-slate-300">
                    AI-Powered Requirements & Rapid Delivery
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-slate-300">
                    Platform Expertise: Snowflake, Databricks, OpenAI
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-slate-300">
                    Multi-Cloud Expertise (AWS, GCP, Azure)
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-slate-300">
                    Domain Expertise: Space Physics, RF, Intelligence
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Competitive Advantages
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  • <strong>3-5x faster delivery</strong> than traditional
                  consulting
                </li>
                <li>
                  • <strong>40-60% lower cost</strong> through platform leverage
                </li>
                <li>
                  • <strong>AI-automated requirements</strong> gathering &
                  scoping
                </li>
                <li>
                  • <strong>Transparent pricing</strong> with immediate
                  estimates
                </li>
                <li>
                  • <strong>Zero-to-production</strong> deployment capability
                </li>
                <li>
                  • <strong>Government & commercial</strong> dual-use expertise
                </li>
                <li>
                  • <strong>24/7 availability</strong> for mission-critical
                  support
                </li>
                <li>
                  • <strong>End-to-end ownership</strong> from concept to
                  deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Core Technical Capabilities
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Deep domain expertise across mission-critical technology areas
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 tech-icon-hover relative overflow-hidden">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {/* Data flow particles */}
                <div
                  className="absolute top-2 right-2 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    animation: 'data-flow 2s ease-in-out infinite',
                  }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                AI & Machine Learning
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                Advanced modeling & MLOps
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 tech-icon-hover relative overflow-hidden">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {/* Data flow particles */}
                <div
                  className="absolute top-2 right-2 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    animation: 'data-flow 2s ease-in-out infinite 0.3s',
                  }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Space Physics
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                Ionospheric & plasma research
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 tech-icon-hover relative overflow-hidden">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
                {/* Radio wave particles */}
                <div
                  className="absolute top-2 right-2 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    animation: 'radar-sweep 3s linear infinite 0.6s',
                  }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Software Defined Radio
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                RF signal processing & analysis
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 tech-icon-hover relative overflow-hidden">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                {/* Cloud data particles */}
                <div
                  className="absolute top-2 left-2 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    animation: 'float 2.5s ease-in-out infinite 0.9s',
                  }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Cloud Architecture
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                AWS • GCP • Azure
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 tech-icon-hover relative overflow-hidden">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {/* Container orchestration particles */}
                <div
                  className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    animation: 'pulse-ring 2s ease-out infinite 1.2s',
                  }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Kubernetes & DevOps
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                Container orchestration
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 tech-icon-hover relative overflow-hidden">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                {/* Security alert particles */}
                <div
                  className="absolute top-2 right-2 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    animation: 'pulse-ring 1.5s ease-out infinite 1.5s',
                  }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                Cybersecurity
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                Security & threat analysis
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 tech-icon-hover relative overflow-hidden">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                {/* Data stream particles */}
                <div
                  className="absolute bottom-2 right-2 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    animation: 'matrix-fall 3s linear infinite 1.8s',
                  }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                Data Engineering
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                Real-time pipelines & analytics
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 tech-icon-hover relative overflow-hidden">
                {/* Animated background pulse */}
                <div className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                {/* Integration flow particles */}
                <div
                  className="absolute top-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    animation: 'data-flow 2.5s ease-in-out infinite 2.1s',
                  }}
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Systems Integration
              </h3>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                SE&I & platform engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section
        id="markets"
        className="py-20 bg-slate-900 relative overflow-hidden"
      >
        {/* Background Circuit Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <defs>
              <pattern
                id="circuit"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
              >
                <path
                  d="M0 20 L20 20 L20 0"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-blue-400"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="2"
                  fill="currentColor"
                  className="text-green-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Markets We Serve
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Advanced technical solutions across defense, aerospace, and
              commercial industries
            </p>
            {/* Animated divider */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Defense & Government Markets */}
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Defense & Government
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Intelligence & Analytics
                    </h4>
                    <p className="text-slate-300">
                      Threat intelligence processing, malware reverse
                      engineering, and real-time decision support systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Space & RF Systems
                    </h4>
                    <p className="text-slate-300">
                      Ionospheric research, Software Defined Radio, satellite
                      communications, and RF signal analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Secure Infrastructure
                    </h4>
                    <p className="text-slate-300">
                      Zero-trust security, DevSecOps pipelines, and air-gapped
                      system deployments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial & Industry Markets */}
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Commercial & Industry
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Enterprise AI & ML
                    </h4>
                    <p className="text-slate-300">
                      Custom AI solutions, predictive maintenance, and
                      intelligent automation for aerospace manufacturing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Cloud Architecture
                    </h4>
                    <p className="text-slate-300">
                      Multi-cloud deployments, Kubernetes orchestration, and
                      scalable platform engineering
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Data Engineering
                    </h4>
                    <p className="text-slate-300">
                      Real-time data pipelines, analytics platforms, and data
                      lake architecture for commercial space companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-900 rounded-lg">
              <svg
                className="w-5 h-5 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-blue-300 font-medium">
                Platform Capabilities: Snowflake • Databricks • AWS • GCP •
                Azure • OpenAI
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Technical Insights
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Research, case studies, and technical perspectives on aerospace
              and defense technology
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-sm text-slate-400">
                  Technical Analysis
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI in Space Physics Modeling
              </h3>
              <p className="text-slate-300 mb-4">
                Exploring machine learning applications for ionospheric research
                and space weather prediction using modern cloud platforms.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Read Analysis →
              </a>
            </div>

            <div className="bg-slate-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-sm text-slate-400">Case Study</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Platform Engineering for Defense
              </h3>
              <p className="text-slate-300 mb-4">
                How modern DevSecOps practices accelerate secure deployments in
                air-gapped environments.
              </p>
              <a
                href="#"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                View Study →
              </a>
            </div>

            <div className="bg-slate-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-sm text-slate-400">
                  Research Perspective
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                SDR Applications in Commercial Space
              </h3>
              <p className="text-slate-300 mb-4">
                Software Defined Radio capabilities for satellite communications
                and commercial space operations.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Explore Research →
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
            >
              Subscribe to Technical Updates
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Join Our Mission
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Advance the state of the art in aerospace, defense, and space
              technology
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Building the Future Team
              </h3>
              <p className="text-lg text-slate-300 mb-8">
                We&apos;re seeking exceptional engineers, researchers, and
                domain experts who are passionate about solving complex
                technical challenges in aerospace and defense.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Innovation Focus
                  </h4>
                  <p className="text-slate-300">
                    Work on cutting-edge aerospace and defense technologies
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Expert Team
                  </h4>
                  <p className="text-slate-300">
                    Collaborate with industry leaders and domain experts
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H6a2 2 0 00-2-2V4m16 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Mission Impact
                  </h4>
                  <p className="text-slate-300">
                    Contribute to national security and commercial space
                    advancement
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
              >
                Express Interest
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Accelerate Your Mission?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Get started with a consultation and discover how advanced
              technology can transform your aerospace and defense challenges.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto bg-slate-700 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-300"
                >
                  Organization
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="mt-1 block w-full rounded-md bg-slate-600 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your organization or agency"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-slate-600 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.name@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-slate-300"
                >
                  Technical Requirements
                </label>
                <textarea
                  name="project"
                  id="project"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-slate-600 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Describe your technical challenges and mission requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Request Consultation
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-600">
              <div className="text-center text-slate-400">
                <p>Direct Contact:</p>
                <p className="mt-2 text-white">contact@appliedaisystems.com</p>
                <p className="text-white">Utah, United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2025 Applied AI Systems LLC. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Professional Services • Technical Consulting • Platform
              Development
            </p>

            {/* GitHub Organization Link */}
            <div className="mt-6">
              <a
                href="https://github.com/applied-ai-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View our open source repositories
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
