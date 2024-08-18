import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="w-full py-4 bg-black-900 shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Noor's Portfolio</h1>
          <div className="space-x-6">
            <a href="#projects" className="hover:text-gray-400 transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-gray-400 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative flex items-center justify-end h-screen px-8 md:px-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-left md:bg-left"
          style={{ backgroundImage: "url('/bgNoor.jpg')" }} // Path to your image in the public folder
        ></div>

        {/* Overlay for darkening the image */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content on the Right */}
        <div className="relative z-10 max-w-lg text-right">
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome to My Creative Space
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Hi, I'm Noor. I design and develop web experiences that are visually
            appealing and highly functional.
          </p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-400 mb-4">
              A brief description of your project goes here. Highlight its key features or technologies used.
            </p>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              View Project &rarr;
            </a>
          </div>
          {/* Add more project cards here */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/profile-pic.jpg"  // Add your profile image here
              alt="Profile Picture"
              className="rounded-lg"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg text-gray-400 mb-6">
              I'm a passionate web developer and designer with a love for creating beautiful, functional websites. My goal is to build web experiences that are not only visually appealing but also user-friendly and accessible.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              I specialize in front-end development, with experience in React, Next.js, and modern CSS frameworks like Tailwind CSS. When I'm not coding, you can find me exploring new design trends or working on personal projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg text-gray-400 mb-8">
            I'm currently available for freelance projects and open to collaboration. Feel free to reach out to discuss your next big idea.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </footer>
    </main>
  );
}
