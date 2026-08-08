"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaTelegramPlane as TelegramIcon } from "react-icons/fa";

export function Contact() {
  const [formState, setFormState] = useState({ 
    name: "", 
    email: "", 
    service: "Full Stack Web App", 
    budget: "$500 - $1,000", 
    message: "" 
  });

  const [hasEditedMessage, setHasEditedMessage] = useState(false);
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [copied, setCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Dynamic Auto-Generated Message Template Effect
  useEffect(() => {
    if (!hasEditedMessage) {
      const autoMessage = `Hello Endale,\n\nI am interested in building a ${formState.service} ${
        formState.budget ? `with a budget of ${formState.budget}` : 'and would like to request a quote'
      }.\n\nLet's discuss further!`;

      setFormState((prev) => ({ ...prev, message: autoMessage }));
    }
  }, [formState.service, formState.budget, hasEditedMessage]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("endalegebeyehu824@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formState.name.trim()) {
      newErrors.name = "Please enter your name";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = "Please enter your email address";
      isValid = false;
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = "Please enter project details or a message";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Telegram መላኪያ (በስልክ እና ፒሲ በአስተማማኝ ሁኔታ እንዲከፈት window.location.href ይጠቀማል)
  const handleSendTelegram = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formattedText = `Hi Endale,\n\n*New Project Request*\n- Name: ${formState.name}\n- Email: ${formState.email}\n- Service: ${formState.service}\n- Budget: ${formState.budget}\n\nDetails:\n${formState.message}`;
    
    const telegramUrl = `https://t.me/abianas19?text=${encodeURIComponent(formattedText)}`;
    
    setIsSent(true);
    setTimeout(() => {
      window.location.href = telegramUrl;
    }, 500);
  };

  // Gmail መላኪያ
  const handleSendGmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = `New Inquiry from ${formState.name} (${formState.service})`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\nService: ${formState.service}\nBudget: ${formState.budget}\n\nProject Details:\n${formState.message}`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=endalegebeyehu824@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSent(true);
    setTimeout(() => {
      window.location.href = gmailUrl;
    }, 500);
  };

  const handleResetForm = () => {
    setIsSent(false);
    setHasEditedMessage(false);
    setFormState({
      name: "",
      email: "",
      service: "Full Stack Web App",
      budget: "$500 - $1,000",
      message: "",
    });
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden select-none">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Get Free <span className="text-gradient">Consultation</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold mb-4">
                Let&apos;s Build Something <br />
                <span className="text-primary">Amazing Together</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between group">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=endalegebeyehu824@gmail.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                    <Mail size={20} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors select-text">
                      endalegebeyehu824@gmail.com
                    </span>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 glass rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-white transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              </div>

              <a 
                href="tel:+251963004297" 
                className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <Phone size={20} className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors select-text">
                    +251 963 004 297
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>Addis Ababa, Ethiopia (Remote Available)</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <a 
                href="https://github.com/Endalks" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                title="GitHub"
              >
                <Github size={20} />
              </a>

              <a 
                href="https://www.linkedin.com/in/endale-gebeyehu" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <motion.a 
                href="https://t.me/abianas19" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-[#229ED9] hover:text-white transition-all cursor-pointer shadow-lg"
                title="Telegram"
              >
                <TelegramIcon size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass p-8 rounded-2xl space-y-6 border border-white/10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.2)] group relative overflow-hidden">
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 size={56} className="text-green-500 mx-auto animate-bounce" />
                  <h4 className="text-2xl font-bold text-white">Redirecting...</h4>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Opening your app with the message details!
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="mt-4 px-6 py-2.5 bg-primary/20 text-primary border border-primary/30 rounded-xl hover:bg-primary/30 hover:scale-105 transition-all cursor-pointer font-medium"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="relative group/input">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary group-hover/input:border-white/50 transition-colors peer placeholder-transparent select-text"
                        placeholder="Name"
                        value={formState.name}
                        onChange={(e) => {
                          setFormState({ ...formState, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs"
                      >
                        Your Name
                      </label>
                      {errors.name && (
                        <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                          <AlertCircle size={12} /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="relative group/input">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary group-hover/input:border-white/50 transition-colors peer placeholder-transparent select-text"
                        placeholder="Email"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs"
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative group/input">
                      <span className="text-xs text-muted-foreground absolute -top-4 left-0">Select Service</span>
                      <select 
                        name="service"
                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary group-hover/input:border-white/50 transition-colors appearance-none cursor-pointer"
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      >
                        <option className="bg-[#1e1e2f]" value="Full Stack Web App">Full Stack Web App</option>
                        <option className="bg-[#1e1e2f]" value="Frontend Development">Frontend UI/UX</option>
                        <option className="bg-[#1e1e2f]" value="Backend & API Design">Backend & API Design</option>
                        <option className="bg-[#1e1e2f]" value="Static Website">Static Website</option>
                        <option className="bg-[#1e1e2f]" value="Other / Custom">Other / Custom</option>
                      </select>
                    </div>

                    <div className="relative group/input">
                      <span className="text-xs text-muted-foreground absolute -top-4 left-0">Estimated Budget</span>
                      <select 
                        name="budget"
                        className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary group-hover/input:border-white/50 transition-colors appearance-none cursor-pointer"
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      >
                        <option className="bg-[#1e1e2f]" value="$300 - $500">$300 - $500</option>
                        <option className="bg-[#1e1e2f]" value="$500 - $1,000">$500 - $1,000</option>
                        <option className="bg-[#1e1e2f]" value="$1,000+">$1,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative group/input pt-4">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-primary group-hover/input:border-white/50 transition-colors peer placeholder-transparent resize-none select-text"
                      placeholder="Project Details"
                      value={formState.message}
                      onChange={(e) => {
                        setHasEditedMessage(true);
                        setFormState({ ...formState, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 top-7 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
                    >
                      Project Details / Message
                    </label>
                    {errors.message && (
                      <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="button"
                      onClick={handleSendTelegram}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-[#229ED9] text-white rounded-xl font-bold hover:bg-[#1f8ebd] transition-all group/btn shadow-lg cursor-pointer"
                    >
                      Via Telegram
                      <TelegramIcon size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={handleSendGmail}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all group/btn shadow-lg cursor-pointer"
                    >
                      Via Gmail
                      <Mail size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}