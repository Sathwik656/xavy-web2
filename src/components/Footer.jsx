export default function Footer(){
  return (
    <footer className="bg-black text-white py-8 px-6 border-t border-gray-700/50">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://discord.com/invite/jysYYUGm" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-sky-400"><i className="fab fa-discord fa-2x"></i></a>
          <a href="https://www.instagram.com/_xavy.___/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-400"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="https://github.com/Sathwik656" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><i className="fab fa-github fa-2x"></i></a>
          <a href="https://www.youtube.com/@XAVYgaming" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500"><i className="fab fa-youtube fa-2x"></i></a>
        </div>
        <div className="text-sm text-gray-400">
          <p className="text-sky-400 mb-2">Let's Race Together!</p>
          <p>© {new Date().getFullYear()} XAVY Gaming. All Rights Reserved.</p>
          <p className="mt-2 text-xs">All trademarks belong to their respective owners. This site is not affiliated with Real Racing 3 / Electronic Arts.</p>
        </div>
      </div>
    </footer>
  );
}
