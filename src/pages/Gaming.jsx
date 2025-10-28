import { useEffect } from "react";

export default function Gaming() {
  useEffect(() => {
    // add fade-in observers similar to original
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.observe').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="hero-bg bg-section min-h-screen flex items-center justify-center text-white text-center px-4 relative"
        style={{ backgroundImage: "url('/src/assets/xavyf1.jpg')", backgroundPosition: 'center' }}
      >
        <div className="content-z max-w-4xl mx-auto observe">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-wider">XAVY</h1>
          <p className="text-base md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Specializing in Real Racing 3 content: creative memes, F1-themed segments, and weekly time trials.
          </p>
          <a href="#mod-section" className="text-4xl animate-bounce hover:text-sky-400 transition"><i className="fas fa-chevron-down"></i></a>
        </div>
      </section>

      {/* Mod Section */}
      <section id="mod-section" className="mod-bg bg-section py-24 md:py-40 text-white text-center px-4" style={{ backgroundImage: "url('/src/assets/xavyf2.avif')" }}>
        <div className="content-z max-w-4xl mx-auto observe">
          <h2 className="text-4xl font-bold mb-8">Latest Update - RR3</h2>
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-xl border border-gray-700 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-sky-400">Real Racing 3 v13.7.1</h3>
            <p className="text-gray-300 mb-6">Watch the full installation tutorial on YouTube. Wait for up to 10 seconds after clicking the link to start the download.</p>
            <a href="https://github.com/Sathwik656/RR3-MOD/raw/refs/heads/main/Real-Racing-3-v13.7.1-mod.apk" className="cool-button">Download</a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 md:py-40 text-white text-center px-4" style={{ backgroundImage: "url('/src/assets/racing.avif')", backgroundColor: '#334155' }}>
        <div className="max-w-4xl mx-auto observe">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Mod Update / Installation Tutorial</h2>
          <a href="https://youtu.be/6kP-4KbnvaQ" target="_blank" rel="noreferrer" className="relative block w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-700 group">
            <img src="https://img.youtube.com/vi/6kP-4KbnvaQ/maxresdefault.jpg" alt="video" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-80 rounded-full p-4 group-hover:scale-110 transition">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="red"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Leaderboard */}
      <section id="leaderboard" className="py-24 px-4 bg-gradient-to-b from-black via-slate-900 to-black text-white border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto text-center observe">
          <h2 className="text-4xl font-extrabold mb-6 text-sky-400">Leaderboard</h2>
          <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-600/30 backdrop-blur-sm">
            <table className="min-w-full divide-y divide-gray-600 text-sm md:text-base font-mono">
              <thead className="bg-slate-800/80 text-sky-300 uppercase text-xs tracking-widest">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Driver</th>
                  <th className="px-4 py-3 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 bg-slate-900/50">
                <tr className="hover:bg-slate-800/60">
                  <td className="px-4 py-3 font-bold text-yellow-400">1</td>
                  <td className="px-4 py-3">---</td>
                  <td className="px-4 py-3 text-right text-green-400 font-bold">00:00.000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">---</td>
                  <td className="px-4 py-3 text-right">00:00.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-6 italic">Submit your lap via Instagram to get featured.</p>
        </div>
      </section>
    </>
  );
}
