'use client';
export default function ProjectCard() {
    return (    
        <form className="bg-white/5 border border-neutral-700 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 transition-all duration-300 hover:shadow-2xl">
        <div>
          <label className="block mb-1 text-sm text-white/80 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-white/80 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-white/80 font-medium">Message</label>
          <textarea
            rows={5}
            placeholder="What's on your mind?"
            className="w-full px-4 py-2 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-black font-semibold py-3 rounded-lg hover:opacity-90 transition active:scale-[0.98]"
        >
          Send Message
        </button>
      </form>
    );
}