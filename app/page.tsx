// Copyright (c) 2025 Applied AI Systems LLC
// Licensed under the MIT License - see LICENSE file for details
// Government contractor - professional standards enforced

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
                    href="#defense"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Defense & Government
                  </a>
                  <a
                    href="#industry"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Industry & Commercial
                  </a>
                  <a
                    href="#capabilities"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Capabilities
                  </a>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            <span className="relative whitespace-nowrap text-blue-400">
              <span className="relative">Advanced</span>
            </span>{' '}
            Technical Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-300">
            SAM.gov registered contractor delivering specialized AI, data
            engineering, and systems architecture solutions. From defense
            intelligence systems to commercial space applications - accelerating
            mission success through advanced technology.
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
              href="#defense"
            >
              View Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Defense & Government Section */}
      <section id="defense" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Defense & Government Solutions
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              SAM.gov registered contractor specializing in classified and
              sensitive mission systems
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Intelligence Systems */}
            <div className="bg-slate-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Intelligence & Analytics
              </h3>
              <p className="text-slate-300">
                Classified data analysis, threat intelligence processing,
                malware reverse engineering, and real-time decision support
                systems for defense missions.
              </p>
            </div>

            {/* Space & RF Systems */}
            <div className="bg-slate-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Space & RF Systems
              </h3>
              <p className="text-slate-300">
                Ionospheric research, Software Defined Radio, satellite
                communications, space physics modeling, and RF signal analysis
                for defense applications.
              </p>
            </div>

            {/* Secure Infrastructure */}
            <div className="bg-slate-700 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Infrastructure
              </h3>
              <p className="text-slate-300">
                ITAR-compliant cloud architecture, zero-trust security,
                DevSecOps pipelines, and air-gapped system deployments for
                sensitive operations.
              </p>
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-blue-300 font-medium">
                SAM.gov UEI: SKLB9XKRZGR5 | CAGE Code Pending
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industry & Commercial Section */}
      <section id="industry" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Industry & Commercial Solutions
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Advanced AI and data engineering for aerospace, energy, and
              technology companies
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprise AI */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Enterprise AI & ML
              </h3>
              <p className="text-slate-300">
                Custom AI solutions, predictive maintenance, supply chain
                optimization, and intelligent automation for aerospace
                manufacturing and operations.
              </p>
            </div>

            {/* Cloud & Platform */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Cloud Architecture
              </h3>
              <p className="text-slate-300">
                Multi-cloud deployments, Kubernetes orchestration, cost
                optimization, and scalable platform engineering for growing
                technology companies.
              </p>
            </div>

            {/* Data Engineering */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Data Engineering
              </h3>
              <p className="text-slate-300">
                Real-time data pipelines, analytics platforms, business
                intelligence, and data lake architecture for commercial space
                and aerospace companies.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-900 rounded-lg">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
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
              <span className="text-green-300 font-medium">
                Platform Partners: Snowflake • Databricks • AWS • GCP • Azure
              </span>
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                AI & Machine Learning
              </h3>
              <p className="text-sm text-slate-400">
                Advanced modeling & MLOps
              </p>
            </div>

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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Space Physics
              </h3>
              <p className="text-sm text-slate-400">
                Ionospheric & plasma research
              </p>
            </div>

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
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Software Defined Radio
              </h3>
              <p className="text-sm text-slate-400">
                RF signal processing & analysis
              </p>
            </div>

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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Cloud Architecture
              </h3>
              <p className="text-sm text-slate-400">AWS • GCP • Azure</p>
            </div>

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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Kubernetes & DevOps
              </h3>
              <p className="text-sm text-slate-400">Container orchestration</p>
            </div>

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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Cybersecurity
              </h3>
              <p className="text-sm text-slate-400">
                ITAR compliance & analysis
              </p>
            </div>

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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Data Engineering
              </h3>
              <p className="text-sm text-slate-400">
                Real-time pipelines & analytics
              </p>
            </div>

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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Systems Integration
              </h3>
              <p className="text-sm text-slate-400">
                SE&I & platform engineering
              </p>
            </div>
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
                Applied AI Systems LLC delivers specialized technical solutions
                across two primary markets: classified defense/government
                systems and commercial aerospace/industry applications. Our
                AI-powered approach accelerates project delivery while reducing
                costs.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-slate-300">
                    SAM.gov Registered Government Contractor
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-slate-300">
                    ITAR Compliance & Security Clearance Ready
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
                    Platform Partnerships: Snowflake, Databricks, OpenAI
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Accelerate Your Mission?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Get started with a free consultation and discover how AI-powered
              solutions can transform your defense, government, or commercial
              aerospace challenges.
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
                  className="mt-1 block w-full rounded-md bg-slate-600 border-slate-500 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                  className="mt-1 block w-full rounded-md bg-slate-600 border-slate-500 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.name@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-slate-300"
                >
                  Project Description
                </label>
                <textarea
                  name="project"
                  id="project"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-slate-600 border-slate-500 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                <p className="mt-2 text-white">
                  contact@applied-ai-systems.com
                </p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2025 Applied AI Systems LLC. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Registered Government Contractor | SAM.gov | ITAR Compliant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
