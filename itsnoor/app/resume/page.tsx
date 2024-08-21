import React from 'react';
import Navbar from '../components/Navbar'; // Adjust according to your project structure
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <main className="relative min-h-screen text-white font-sans bg-black">
      <Navbar />

      <section className="max-w-4xl mx-auto py-16 px-8 mt-12 bg-opacity-50 bg-black rounded-lg backdrop-blur-lg shadow-lg">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Navnoor Singh</h1>
          <p className="text-lg mt-2">
            <a href="mailto:contactnavnoorsingh@gmail.com" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">contactnavnoorsingh@gmail.com</a> | 
            <a href="tel:+14379825696" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">(437) 982-5696</a> | 
            <a href="https://en.wikipedia.org/wiki/Kitchener,_Ontario" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Kitchener, ON</a>
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>

          {/* Dispatcher Role - New Section */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Dispatcher</h3>
            <p className="text-sm">
              <a href="https://barbercollins.ca/" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">Barber Collins</a> • 
              <a href="https://en.wikipedia.org/wiki/Kitchener,_Ontario" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Kitchener, ON</a> | Aug 2024 - Present
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Managed and triaged emergency and non-emergency communications, ensuring swift response coordination across multiple channels.</li>
              <li>Proficiently operated the P25 Radio system, utilizing the “900 Code,” “10 Code,” and Phonetic Alphabet for efficient communication.</li>
              <li>Monitored CCTV systems and managed access control, enhancing site security and safety.</li>
              <li>Conducted operational briefings and issued alerts and BOLOs to front-line guards, maintaining situational awareness and readiness.</li>
              <li>Handled incident management software and dispatch operations, ensuring accurate record-keeping and incident reporting.</li>
              <li>Utilized meticulous typing and dictation skills for administrative tasks, consistently maintaining a high level of accuracy and detail.</li>
              <li>Provided guidance and SOP information to front-line guards, facilitating informed decision-making and operational effectiveness.</li>
            </ul>
          </div>

          {/* Existing Experience Sections */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Front Desk Concierge</h3>
            <p className="text-sm">
              <a href="https://elitecondoconcierge.com/" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">Elite Residential Security</a> • 
              <a href="https://en.wikipedia.org/wiki/Toronto" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Toronto, ON</a> | 02/2024 - 04/2024
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Managed security operations for a 400-unit residential complex, ensuring a safe and welcoming environment.</li>
              <li>Spearheaded emergency response strategies, reducing incident resolution time by 30%.</li>
              <li>Conducted daily security checks, resulting in a 20% decrease in security breaches.</li>
              <li>Trained and supervised a team of 5 new security personnel, improving overall efficiency by 15%.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Mobile Patrol Supervisor</h3>
            <p className="text-sm">
              <a href="https://www.instagram.com/condor_security/?hl=en" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">Condor Security</a> • 
              <a href="https://en.wikipedia.org/wiki/Toronto" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Toronto, ON</a> | 08/2023 - 02/2024
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Orchestrated comprehensive security operations, including scheduling emergency responses for the entire company of over 1,000 employees, dispatch coordination, and rapid response execution.</li>
              <li>Enhanced team performance by 25% through careful planning and effective resource allocation.</li>
              <li>Conducted over 20 spot checks and audits daily, ensuring 100% adherence to security protocols.</li>
              <li>Enforced a new patrol system, increasing coverage efficiency by 30%.</li>
              <li>Developed and delivered training programs for 50 team members, resulting in a 40% improvement in response times.</li>
              <li>Applied knowledge of the Trespass to Property Act, Criminal Code of Canada, Ontario Use of Force model, and Powers of Arrest in daily operations.</li>
              <li>Managed rotating shifts, including days, evenings, overnights, weekends, and statutory holidays.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Concierge/Front Desk</h3>
            <p className="text-sm">
              <a href="https://www.instagram.com/condor_security/?hl=en" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1 mr-1">Condor Security</a> • 
              <a href="https://en.wikipedia.org/wiki/Toronto" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Toronto, ON</a> | 05/2023 - 08/2023
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Delivered top-tier customer service to over 900 residents while ensuring stringent security measures.</li>
              <li>Recognized for exceptional performance, leading to a promotion to a supervisory role within 3 months.</li>
              <li>Managed visitor logs and access control, maintaining 100% accuracy in records.</li>
              <li>Resolved resident issues and concerns swiftly, achieving a 95% satisfaction rate.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Coordinator</h3>
            <p className="text-sm">RigelSky Institute of Education • <a href="https://en.wikipedia.org/wiki/Patti,_Punjab" className="inline-block bg-white text-black px-2 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Patti, PB</a> | 08/2021 - 08/2022</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Coordinated program activities and events for over 100 international students.</li>
              <li>Developed and implemented lesson plans, resulting in a 20% improvement in student performance.</li>
              <li>Organized and led 10+ educational workshops, enhancing student engagement by 25%.</li>
              <li>Provided one-on-one support to students, contributing to a 15% increase in overall retention rates.</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc ml-6">
            <li>Expert in surveillance and observation techniques</li>
            <li>Advanced communication skills</li>
            <li>Proficient in emergency response and first aid</li>
            <li>Skilled in incident reporting and documentation</li>
            <li>Expertise in crisis management and rapid response</li>
            <li>Proven leadership and team coordination abilities</li>
            <li>Strong conflict resolution and de-escalation skills</li>
            <li>In-depth knowledge of security systems and technology</li>
            <li>Knowledge of Trespass to Property Act, Criminal Code of Canada, Region of Waterloo Code of Use By-Law 13-050, Ontario Use of Force model, and Powers of Arrest</li>
          </ul>
        </div>

        {/* Languages as Islands */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Languages</h2>
          <ul className="list-none flex flex-wrap gap-4">
            <li><a href="https://en.wikipedia.org/wiki/English_language" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">English</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Punjabi_language" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Punjabi</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hindi" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Hindi</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Urdu" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Urdu</a></li>
          </ul>
        </div>

        {/* Education as Island */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <p><a href="https://www.senecacollege.ca/" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Computer Programming • Seneca College • Toronto</a></p>
        </div>

        {/* Certifications as Islands */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
          <ul className="list-none flex flex-wrap gap-4">
            <li><a href="https://en.wikipedia.org/wiki/Baton_(law_enforcement)" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">ASP Baton and Handcuffing Techniques Certification</a></li>
            <li><a href="https://www.condorsecurity.ca/" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Advanced Security Training at Condor Security (Level 3)</a></li>
            <li><a href="https://en.wikipedia.org/wiki/First_aid" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">First Aid and CPR Certification</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Verbal_Judo" className="inline-block bg-white text-black px-4 py-1 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1 mb-1">Verbal Judo Training for Conflict Resolution</a></li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Resume;
