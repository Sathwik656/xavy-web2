export default function PortfolioPage(){
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 text-center md:text-left">
          <img src="/src/assets/profile.jpg" alt="profile" className="w-40 h-40 rounded-full mx-auto md:mx-0 object-cover mb-4"/>
          <h2 className="text-2xl font-bold mb-1">Sathwik (XAVY)</h2>
          <p className="text-gray-400 mb-4">Content Creator • Web Developer • Video Editor</p>
          <div className="flex justify-center md:flex-col gap-3 md:gap-2">
            <a className="text-sm hover:text-sky-400" href="https://github.com/Sathwik656" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-sm hover:text-pink-400" href="https://www.instagram.com/_xavy.___/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="text-sm hover:text-red-500" href="https://www.youtube.com/@XAVYgaming" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>

        <div className="md:col-span-2">
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p className="text-gray-300">I create gaming content focused on Real Racing 3, build websites, and edit short-form videos. I love building tools and automation for creators.</p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="text-gray-300 list-disc pl-5">
              <li>Bachelor of Computer Science — [Your college] (YYYY — YYYY)</li>
              <li>Online courses: React, Tailwind, Video Editing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <strong>Content Creator — XAVY Gaming</strong>
                <div className="text-sm">Produced gameplay, tutorials, and mod showcases. 10M+ views across videos.</div>
              </div>
              <div>
                <strong>Freelance Web Dev</strong>
                <div className="text-sm">Built responsive websites and landing pages for small businesses.</div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold">Helmet-Violation Detection Dashboard</h4>
                <p className="text-sm text-gray-300">Computer vision app that detects helmet violations and shows images & timestamps in a dashboard.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold">Real Racing 3 Mods Repo</h4>
                <p className="text-sm text-gray-300">A repository and download page for modded APKs and tutorials.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-300 mb-4">Email: <a href="mailto:example@xavy.in" className="text-sky-400">example@xavy.in</a></p>
            <a href="/services" className="cool-button">Hire Me</a>
          </section>
        </div>
      </div>
    </div>
  );
}
