import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '831bafb7-ba49-4d72-b888-1559c4d7a16d',
          form_name: 'contact-form',
          ...formData,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(result.message || 'Failed to send message. Please try again later.');
      }
    } catch {
      setError('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-16 drop-shadow-2xl animate-fadeIn">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="relative bg-white/10 border border-white/20 backdrop-blur-2xl p-10 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-700 transform hover:scale-105 hover:rotate-[0.5deg] hover:shadow-[0_0_60px_rgba(0,255,255,0.2)]"
        >
          <div className="grid gap-6">
            <div>
              <label className="block mb-2 text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-cyan-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-cyan-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-cyan-400"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 py-3 px-10 rounded-full font-semibold text-lg shadow-lg hover:from-purple-500 hover:to-cyan-500 transform hover:scale-105 transition"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
            {success && <p className="text-green-400 mt-4 animate-bounce">{success}</p>}
            {error && <p className="text-red-400 mt-4 animate-bounce">{error}</p>}
          </div>
        </form>

        <div className="text-center mt-20">
          <div className="flex justify-center space-x-10 text-4xl mb-6">
            <a
              href="https://www.linkedin.com/in/vigneshwaranms/"
              className="transition-transform transform hover:scale-125 neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vigneshwaranmanikandan"
              className="transition-transform transform hover:scale-125 neon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="tel:+918807118015"
              className="transition-transform transform hover:scale-125 neon"
            >
              <FaPhone />
            </a>
          </div>
          <p className="text-lg">Phone: +91 8807118015</p>
        </div>
      </div>

      <style jsx>{`
        .bg-stars {
          background-image: radial-gradient(#ffffff22 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out both;
        }

        .neon {
          color: white;
          transition: text-shadow 0.3s;
        }

        .neon:hover {
          text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </section>
  );
}

export default Contact;
