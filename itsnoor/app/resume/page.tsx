import React from 'react';
import Navbar from '../components/Navbar'; // Adjust according to your project structure
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <main className="relative min-h-screen text-white font-sans bg-black">
      <Navbar />

      <section className="max-w-4xl mx-auto py-16 px-8 mt-0 bg-opacity-50 bg-black rounded-lg backdrop-blur-lg shadow-lg">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Navnoor Singh</h1>
          <p className="text-lg mt-2">
            <a href="mailto:contactnavnoorsingh@gmail.com" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">contactnavnoorsingh@gmail.com</a> | 
            <a href="tel:+14379825696" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">(437) 982-5696</a> | 
            <a href="https://en.wikipedia.org/wiki/Kitchener,_Ontario" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Kitchener, ON</a>
          </p>
        </div>

        {/* Summary Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Summary</h2>
          <p>
            A highly motivated technical support professional with extensive experience in troubleshooting, hardware installation, and
            software support across Windows and macOS environments. Proven expertise in building web solutions, maintaining
            documentation, and providing exceptional customer service. Seeking a role in Technical Support where I can contribute my
            skills in problem-solving and technical development, with a focus on continuous learning and growth.
          </p>
          <p className="mt-4">AVAILABLE PART-TIME | VALID FULL G DRIVER'S LICENSE HOLDER</p>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>

           {/* Web Developer & Tech Support - New Section */}
           <div className="mb-6">
            <h3 className="text-2xl font-semibold">Web Developer & Tech Support</h3>
            <p className="text-sm">
              <a href="https://maximind.ca/" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">MaxiMind Learning</a> • 
              <a href="https://en.wikipedia.org/wiki/Vaughan" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Vaughan, ON</a> | 09/2024 - Present
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Manage and maintain the company website, ensuring smooth functionality and user experience for clients and coaches.</li>
              <li>Provide technical support for various software and hardware issues faced by internal staff and external clients, resolving issues promptly.</li>
              <li>Implement and monitor SEO strategies to improve the company’s ranking on Google for ADHD-related services, leading to increased online visibility.</li>
              <li>Troubleshoot and optimize system processes, improving the overall performance of tech infrastructure across the organization.</li>
              <li>Support coaches by ensuring their technical needs are met, providing guidance on digital tools and system usage.</li>
            </ul>
          </div>

          {/* Freelance Web Developer & Technical Consultant */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Freelance Web Developer & Technical Consultant</h3>
            <p className="text-sm">Self-Employed • Remote | 08/2021 - Present</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Developed custom websites using HTML, CSS, and JavaScript for small businesses and personal clients.</li>
              <li>Installed and configured hardware, including surveillance cameras and PC components, across multiple locations.</li>
              <li>Provided technical consultancy to clients, ensuring optimal system setup and maintenance.</li>
              <li>Built online platforms, including e-commerce solutions, while offering ongoing support and troubleshooting.</li>
              <li>Specialized in creating web pages and integrating third-party APIs, such as YouTube API, to enhance functionality.</li>
            </ul>
          </div>

          {/* Technical Operations Supervisor */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Technical Operations Supervisor</h3>
            <p className="text-sm">Condor Security • Toronto, ON | 08/2023 - 02/2024</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Installed and maintained surveillance camera systems and other hardware for various sites.</li>
              <li>Developed and implemented web-based solutions for improving internal operations and communication.</li>
              <li>Conducted technical audits and optimized system processes, resulting in improved efficiency and coverage.</li>
              <li>Provided technical support for team members, handling hardware troubleshooting and maintenance.</li>
              <li>Enhanced system protocols using tech tools, improving the performance of security operations.</li>
            </ul>
          </div>

          {/* Coordinator & Technical Specialist */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Coordinator & Technical Specialist</h3>
            <p className="text-sm">RigelSky Institute of Education • Patti, PB | 08/2021 - 08/2022</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Installed and maintained technical infrastructure for educational workshops and program activities.</li>
              <li>Managed the institute’s website and provided technical support for staff and students.</li>
              <li>Assisted in troubleshooting hardware and software issues, improving operational efficiency.</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc ml-6">
            <li>Troubleshooting (Windows & macOS)</li>
            <li>PC Hardware Troubleshooting</li>
            <li>Web Development (MERN Stack)</li>
            <li>SQL & Log Analysis</li>
            <li>Documentation & Case Management (QuickBase)</li>
            <li>Effective Communication (Email, Phone, In-Person)</li>
            <li>Windows & Linux Shell CLI</li>
            <li>Camera Installation & Maintenance</li>
            <li>Website Development & Administration</li>
          </ul>
        </div>

        {/* Languages Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Languages</h2>
          <ul className="list-none flex flex-wrap gap-4">
            <li><a href="https://en.wikipedia.org/wiki/English_language" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">English</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Punjabi_language" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Punjabi</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hindi" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Hindi</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Urdu" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Urdu</a></li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <p><a href="https://www.senecacollege.ca/" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Computer Programming • Seneca College • Toronto</a></p>
        </div>

        {/* Certifications Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
          <ul className="list-none flex flex-wrap gap-4">
            <li><a href="https://en.wikipedia.org/wiki/First_aid" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">First Aid and CPR Certification</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Verbal_Judo" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Verbal Judo Training for Conflict Resolution</a></li>
            <li><a href="https://www.asp-usa.com/pages/training-programs" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">ASP Baton and Handcuffing Techniques Certification</a></li>
            <li><a href="https://www.condorsecurity.ca/" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Advanced Security Training at Condor Security (Level 3)</a></li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Resume;
