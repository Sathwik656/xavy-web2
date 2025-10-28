export default function Services(){
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-sky-400">Modern Business Services</h1>
        <p className="text-gray-300 mb-8">We provide high-quality services for digital businesses — website design, video editing, social media management, and more.</p>

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">Website Design</h3>
            <p className="text-gray-300 mb-4">Responsive, SEO-friendly websites built with modern tools. We handle UI/UX, hosting advice, and deployment.</p>
            <ul className="text-sm text-gray-400 list-disc pl-5">
              <li>Landing pages & portfolios</li>
              <li>E-commerce & custom features</li>
              <li>Performance & SEO basics</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">Video Editing & Motion</h3>
            <p className="text-gray-300 mb-4">Short-form content, reels, and tutorial videos optimized for engagement.</p>
            <ul className="text-sm text-gray-400 list-disc pl-5">
              <li>Reel & short edits</li>
              <li>Intro/outro & branding</li>
              <li>Color grading & sound mix</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">Social Media Management</h3>
            <p className="text-gray-300 mb-4">Content strategy, posting schedules, and growth tactics for Instagram, YouTube and more.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">Software & Tools</h3>
            <p className="text-gray-300 mb-4">Small tools and automation to help your content workflows and community engagement.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <img src="/logo.png" alt="avatar" className="mx-auto mb-3 w-20 h-20 rounded-full object-cover"/>
              <h4 className="font-semibold">Sathwik (XAVY)</h4>
              <p className="text-sm text-gray-400">Founder • Video & Game content</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <img src="/logo.png" alt="avatar" className="mx-auto mb-3 w-20 h-20 rounded-full object-cover"/>
              <h4 className="font-semibold">Designer</h4>
              <p className="text-sm text-gray-400">UI/Graphic Design</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <img src="/logo.png" alt="avatar" className="mx-auto mb-3 w-20 h-20 rounded-full object-cover"/>
              <h4 className="font-semibold">Dev</h4>
              <p className="text-sm text-gray-400">Web & automation</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">“Great work — increased our traffic and engagement.” — Client A</div>
            <div className="bg-gray-800 p-6 rounded-xl">“Fast delivery and amazing editing.” — Client B</div>
          </div>
        </section>

        <div className="text-center mt-8">
          <a href="/contact" className="cool-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
