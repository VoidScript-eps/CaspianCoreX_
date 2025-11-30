import { motion } from "motion/react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "figma:asset/c4ee438551533808bc25bcbffbd29995ca84828f.png";
import { useTheme } from "../contexts/ThemeContext";

interface FooterProps {
  language: string;
}

export const Footer = ({ language }: FooterProps) => {
  const { theme } = useTheme();
  const content = {
    en: {
      tagline: "Helm of Global Investments",
      about: "Caspian Global Finance is a leading international banking institution committed to excellence, innovation, and long-term partnerships.",
      links: {
        company: {
          title: "Company",
          items: ["About Us", "Careers", "Press", "Legal"],
        },
        services: {
          title: "Services",
          items: ["Private Banking", "Corporate Solutions", "Investment Funds", "AI Advisory"],
        },
        support: {
          title: "Support",
          items: ["Help Center", "Security", "Privacy", "Terms"],
        },
      },
      copyright: "© 2025 Caspian Global Finance. All rights reserved.",
    },
    ru: {
      tagline: "Штурвал глобальных инвестиций",
      about: "Caspian Global Finance — ведущий международный банк, приверженный совершенству, инновациям и долгосрочным партнерствам.",
      links: {
        company: {
          title: "Компания",
          items: ["О Нас", "Карьера", "Пресса", "Правовая информация"],
        },
        services: {
          title: "Услуги",
          items: ["Частный Банкинг", "Корпоративные Решения", "Инвестиционные Фонды", "AI Консультации"],
        },
        support: {
          title: "Поддержка",
          items: ["Центр Помощи", "Безопасность", "Конфиденциальность", "Условия"],
        },
      },
      copyright: "© 2025 Caspian Global Finance. Все права защищены.",
    },
    az: {
      tagline: "Qlobal İnvestisiyaların Sükanı",
      about: "Caspian Global Finance mükəmməlliyə, innovasiyaya və uzunmüddətli tərəfdaşlığa sadiq aparıcı beynəlxalq bank təşkilatıdır.",
      links: {
        company: {
          title: "Şirkət",
          items: ["Haqqımızda", "Karyera", "Mətbuat", "Hüquqi"],
        },
        services: {
          title: "Xidmətlər",
          items: ["Şəxsi Bankçılıq", "Korporativ Həllər", "İnvestisiya Fondları", "AI Məsləhət"],
        },
        support: {
          title: "Dəstək",
          items: ["Yardım Mərkəzi", "Təhlükəsizlik", "Məxfilik", "Şərtlər"],
        },
      },
      copyright: "© 2025 Caspian Global Finance. Bütün hüquqlar qorunur.",
    },
  };

  const t = content[language as keyof typeof content];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className={`border-t py-16 transition-colors ${
      theme === "dark"
        ? "bg-[#5a7a9a] border-white/30"
        : "bg-gray-100 border-gray-300"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logoImage} alt="CGF Logo" className="h-18 w-auto mb-3" />
              <div className="text-xs text-[#0a1128]">{t.tagline}</div>
            </div>
            <p className="text-[#1e2749] text-sm mb-6 max-w-sm">{t.about}</p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-[#1e2749] rounded-lg flex items-center justify-center text-[#8b9dc3] hover:text-[#5dd9d9] hover:bg-[#4a90e2]/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(t.links).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-[#0a1128] mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#1e2749] text-sm hover:text-[#0a1128] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#1e2749]">
          <div>{t.copyright}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0a1128] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#0a1128] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#0a1128] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
