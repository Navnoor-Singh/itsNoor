"use client";

import Navbar from "../components/Navbar"; // Adjust the path based on your project structure
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import React from "react";
import { TbBulb } from "react-icons/tb";

export default function Contact() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
    
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
    
        // Combine email and message into a single field
        const combinedMessage = `From: ${email}\n\nMessage: ${message}`;
    
        // Update the form field directly
        formData.set('message', combinedMessage);
    
        // Optionally: Update the textarea value in the DOM to ensure it matches what’s being sent
        const messageInput = form.querySelector('#message') as HTMLTextAreaElement;
        if (messageInput) {
            messageInput.value = combinedMessage;
        }
    
        // Send the form data
        emailjs.sendForm(
            'service_irm7bss',       // Your EmailJS Service ID
            'template_42ctssn',      // Your EmailJS Template ID
            form,                    // Use the form with the modified message field
            'JS1jSZiXXb0iZL4Y6'      // Your EmailJS User ID
        ).then(
            (result) => {
                console.log(result.text);
                alert('Transmission complete! Your message is now traversing the digital cosmos. 🚀');
            },
            (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            }
        );
    
        form.reset(); // Reset the form fields after submission
    }

  return (
    <main className="relative min-h-screen text-white font-sans">
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/bgContact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Frosted Glass Overlay */}
      <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg z-10 pointer-events-none"></div>

      {/* Content */}
      <Navbar />

      {/* Contact Section */}
      <section id="contact" className="relative z-20 max-w-7xl mx-auto py-16 px-6 mt-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-[70vw] mx-auto">
            I'm currently available for freelance projects and open to collaboration,
          </p>
          <p className="text-lg mb-8 max-w-[70vw] mx-auto">
            Feel free to reach out to discuss your next big idea.
          </p>

          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left text-lg font-semibold mb-2" htmlFor="from_name">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"  // Matches the EmailJS template placeholder
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-left text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"  // Email input field
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
              />
            </div>

            <div className="mb-4">
                <label className="flex items-center text-left text-lg font-semibold mb-2" htmlFor="message">
                    Idea <TbBulb className="ml-2" />
                </label>
                <textarea
                    id="message"
                    name="message"  // Matches the EmailJS template placeholder
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
                ></textarea>
                </div>


            <button
                type="submit"
                className="px-8 py-3 font-semibold rounded-lg text-white border-2 border-white bg-black inset-animation"
                >
                Send Message
                </button>

          </form>
        </div>
      </section>
    </main>
  );
}
