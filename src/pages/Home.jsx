import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to XAVY Network</h1>
        <p className="text-gray-300 mb-6">Gaming, Projects, and Services — pick where you want to go.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/gaming" className="cool-button">Gaming Site</Link>
          <Link to="/services" className="cool-button">Services</Link>
          <Link to="/portfolio" className="cool-button">Portfolio</Link>
        </div>
      </div>
    </div>
  );
}
