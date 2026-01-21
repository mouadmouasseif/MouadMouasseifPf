// components/ContactMe.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Facebook } from "lucide-react";

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ici tu peux ajouter l'envoi vers une API, EmailJS, Formspree, etc.
    console.log("Form data:", form);
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 text-white">
        {/* Titre */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <p className="mt-3 text-slate-300 text-sm md:text-base">
            Feel free to reach out for a project, a collaboration, or just to say hi!
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Infos + Réseaux sociaux */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Get in touch</h3>

            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mouadmouassief@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  mouadmouassief@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+212 6 89 64 28 94</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Rabat, Morocco</span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3">Social Media</h4>
              <div className="mt-6 flex justify-center md:justify-start gap-6">
              <a href="https://github.com/mouadmouasseif" target="_blank" className="text-white hover:text-blue-700 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mouad-mouasseif-a5619a21a/" target="_blank" className="text-white hover:text-blue-700 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/mouadmouasseif" target="_blank" className="text-white hover:text-blue-700 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/mouadmouasseif" target="_blank" className="text-white hover:text-blue-700 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="tel:+212689642894" className="text-white hover:text-blue-700 transition">
                <Phone className="w-6 h-6" />
              </a>
            </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">Send me a message</h3>

            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="message" className="text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 h-32 resize-none focus:outline-none focus:border-blue-500"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold text-sm md:text-base transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
