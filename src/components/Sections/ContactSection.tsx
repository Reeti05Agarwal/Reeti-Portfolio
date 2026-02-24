
export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="relative">
        {/* Glow Background */}
        <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-transparent to-green-500/10 rounded-2xl blur-2xl -z-10"></div>

        <div className="border border-cyan-500/20 backdrop-blur-md rounded-2xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.1)]">

          {/* Contact Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-cyan-500/30 rounded-full bg-black/50 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono">reeti@cybersec:~$</span>
              <span className="text-white font-mono">./connect</span>
              <div className="w-3 h-6 bg-cyan-400 animate-pulse ml-2 rounded-sm"></div>
            </div>

            <h2 className="text-2xl font-bold text-white font-mono tracking-wider">
              CONNECT WITH ME
            </h2>

            {/* <p className="text-cyan-400/70 font-mono text-sm mt-2">
              Let&apos;s discuss cybersecurity, AI research, or potential collaborations
            </p> */}
          </div>

          {/* Contact Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Email */}
            <a
              href="mailto:reeti05agarwal@gmail.com"
              className="group border border-cyan-500/20 rounded-xl p-6 bg-black/40 backdrop-blur-sm 
                         hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                         transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-cyan-400 font-mono font-semibold mb-2">
                EMAIL
              </h3>
              <p className="text-white/70 font-mono text-sm group-hover:text-white">
                reeti05agarwal@gmail.com
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/reeti-agarwal-cyber/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-blue-500/20 rounded-xl p-6 bg-black/40 backdrop-blur-sm 
                         hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                         transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-blue-400 font-mono font-semibold mb-2">
                LINKEDIN
              </h3>
              <p className="text-white/70 font-mono text-sm group-hover:text-white">
                linkedin.com/in/reeti-agarwal-cyber/
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Reeti05Agarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-green-500/20 rounded-xl p-6 bg-black/40 backdrop-blur-sm 
                         hover:border-green-500/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]
                         transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-green-400 font-mono font-semibold mb-2">
                GITHUB
              </h3>
              <p className="text-white/70 font-mono text-sm group-hover:text-white">
                github.com/Reeti05Agarwal
              </p>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-purple-500/20 rounded-xl p-6 bg-black/40 backdrop-blur-sm 
                         hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]
                         transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-purple-400 font-mono font-semibold mb-2">
                RESUME
              </h3>
              <p className="text-white/70 font-mono text-sm group-hover:text-white">
                Download CV (PDF)
              </p>
            </a>

          </div>

          {/* Contact Footer */}
          <div className="mt-10 pt-8 border-t border-cyan-500/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono">
              <div className="text-white/60">
                [SYSTEM: CONNECTIONS_OPEN]
              </div>

              <div className="flex items-center gap-4">
                <span className="text-green-400 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  RESPONSE_TIME: 24H
                </span>

                <span className="text-cyan-400">|</span>

                <span className="text-cyan-400/70">
                  Last online: Today
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}