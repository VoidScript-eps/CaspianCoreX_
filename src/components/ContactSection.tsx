import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import contactImage from "figma:asset/739b0efb978d976792835ea881c800e75821cb1f.png";

interface ContactSectionProps {
  language: string;
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Let's Start Your Financial Journey",
      form: {
        name: "Your Name",
        email: "Email Address",
        message: "Message",
        submit: "Send Message",
      },
      info: {
        title: "Our Head Office",
        email: "caspian.global.finance@gmail.com",
        phone: "+994 50 211 11 14",
        address: "Neftchilar Avenue, Baku",
      },
      success: "Message sent successfully!",
    },
    ru: {
      title: "Связаться с Нами",
      subtitle: "Начнём Ваш Финансовый Путь",
      form: {
        name: "Ваше Имя",
        email: "Email Адрес",
        message: "Сообщение",
        submit: "Отправить Сообщение",
      },
      info: {
        title: "Наш Головной Офис",
        email: "caspian.global.finance@gmail.com",
        phone: "+994 50 211 11 14",
        address: "Проспект Нефтяников, Баку",
      },
      success: "Сообщение отправлено успешно!",
    },
    az: {
      title: "Bizimlə Əlaqə",
      subtitle: "Maliyyə Səyahətinizə Başlayaq",
      form: {
        name: "Adınız",
        email: "Email Ünvanı",
        message: "Mesaj",
        submit: "Mesaj Göndər",
      },
      info: {
        title: "Baş Ofisimiz",
        email: "caspian.global.finance@gmail.com",
        phone: "+994 50 211 11 14",
        address: "Neftçilər Prospekti, Bakı",
      },
      success: "Mesaj uğurla göndərildi!",
    },
  };

  const t = content[language as keyof typeof content];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to backend
    alert(t.success);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a1128] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contact-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a90e2" />
              <stop offset="100%" stopColor="#5dd9d9" />
            </linearGradient>
          </defs>
          <circle cx="10%" cy="20%" r="300" fill="url(#contact-gradient)" />
          <circle cx="90%" cy="80%" r="300" fill="url(#contact-gradient)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">{t.title}</h2>
          <p className="text-lg text-[#8b9dc3]">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-[#8b9dc3] mb-2">{t.form.name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#1e2749] border border-white/10 rounded-lg text-white focus:border-[#4a90e2] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#8b9dc3] mb-2">{t.form.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#1e2749] border border-white/10 rounded-lg text-white focus:border-[#4a90e2] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#8b9dc3] mb-2">{t.form.message}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1e2749] border border-white/10 rounded-lg text-white focus:border-[#4a90e2] focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#4a90e2]/50 transition-all"
              >
                {t.form.submit}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-[#1e2749]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="mb-6 text-white">{t.info.title}</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4a90e2]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#5dd9d9]" />
                  </div>
                  <div>
                    <div className="text-[#8b9dc3] text-sm mb-1">Email</div>
                    <a
                      href={`mailto:${t.info.email}`}
                      className="text-white hover:text-[#5dd9d9] transition-colors"
                    >
                      {t.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4a90e2]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#5dd9d9]" />
                  </div>
                  <div>
                    <div className="text-[#8b9dc3] text-sm mb-1">Phone</div>
                    <a
                      href={`tel:${t.info.phone}`}
                      className="text-white hover:text-[#5dd9d9] transition-colors"
                    >
                      {t.info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#4a90e2]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#5dd9d9]" />
                  </div>
                  <div>
                    <div className="text-[#8b9dc3] text-sm mb-1">Address</div>
                    <div className="text-white">{t.info.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Building Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={contactImage}
                alt="CGF Headquarters"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/40 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
