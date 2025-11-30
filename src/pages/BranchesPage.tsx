import { useOutletContext } from "react-router";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { AzerbaijanMap } from "../components/AzerbaijanMap";
import { useTheme } from "../contexts/ThemeContext";

interface ContextType {
  language: string;
}

export const BranchesPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Branches & ATMs",
      subtitle: "Find our locations across Azerbaijan",
      locations: [
        { 
          city: "Baku", 
          country: "Head Office", 
          address: "Neftchiler Avenue, Baku",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Neftchiler+Avenue,+Baku,+Azerbaijan",
          x: 50, 
          y: 45 
        },
        { 
          city: "Ganja", 
          country: "Regional Office", 
          address: "Javadkhan Street, Ganja",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Javadkhan+Street,+Ganja,+Azerbaijan",
          x: 35, 
          y: 42 
        },
        { 
          city: "Sumgait", 
          country: "Branch", 
          address: "Baku Street, Sumgait",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Baku+Street,+Sumgait,+Azerbaijan",
          x: 52, 
          y: 40 
        },
        { 
          city: "Mingachevir", 
          country: "Branch", 
          address: "Heydar Aliyev Avenue, Mingachevir",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Heydar+Aliyev+Avenue,+Mingachevir,+Azerbaijan",
          x: 48, 
          y: 38 
        },
      ],
      hours: "Mon-Fri: 9:00 AM - 6:00 PM",
      phone: "+994 12 123 45 67",
      viewOnMap: "View on Google Maps",
    },
    ru: {
      title: "Филиалы и Банкоматы",
      subtitle: "Найдите наши отделения по всему Азербайджану",
      locations: [
        { 
          city: "Баку", 
          country: "Главный Офис", 
          address: "Neftchiler Avenue, Баку",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Neftchiler+Avenue,+Baku,+Azerbaijan",
          x: 50, 
          y: 45 
        },
        { 
          city: "Гянджа", 
          country: "Региональный Офис", 
          address: "ул. Джавадхана, Гянджа",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Javadkhan+Street,+Ganja,+Azerbaijan",
          x: 35, 
          y: 42 
        },
        { 
          city: "Сумгаит", 
          country: "Филиал", 
          address: "ул. Баку, Сумгаит",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Baku+Street,+Sumgait,+Azerbaijan",
          x: 52, 
          y: 40 
        },
        { 
          city: "Мингечевир", 
          country: "Филиал", 
          address: "пр. Гейдара Алиева, Мингечевир",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Heydar+Aliyev+Avenue,+Mingachevir,+Azerbaijan",
          x: 48, 
          y: 38 
        },
      ],
      hours: "Пн-Пт: 9:00 - 18:00",
      phone: "+994 12 123 45 67",
      viewOnMap: "Открыть в Google Maps",
    },
    az: {
      title: "Filiallar və Bankomatlar",
      subtitle: "Azərbaycan üzrə məkanlarımızı tapın",
      locations: [
        { 
          city: "Bakı", 
          country: "Baş Ofis", 
          address: "Neftchiler Avenue, Bakı",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Neftchiler+Avenue,+Baku,+Azerbaijan",
          x: 50, 
          y: 45 
        },
        { 
          city: "Gəncə", 
          country: "Regional Ofis", 
          address: "Cavadxan küçəsi, Gəncə",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Javadkhan+Street,+Ganja,+Azerbaijan",
          x: 35, 
          y: 42 
        },
        { 
          city: "Sumqayıt", 
          country: "Filial", 
          address: "Bakı küçəsi, Sumqayıt",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Baku+Street,+Sumgait,+Azerbaijan",
          x: 52, 
          y: 40 
        },
        { 
          city: "Mingəçevir", 
          country: "Filial", 
          address: "Heydər Əliyev prospekti, Mingəçevir",
          mapsUrl: "https://www.google.com/maps/search/?api=1&query=Heydar+Aliyev+Avenue,+Mingachevir,+Azerbaijan",
          x: 48, 
          y: 38 
        },
      ],
      hours: "Bz-Cü: 9:00 - 18:00",
      phone: "+994 12 123 45 67",
      viewOnMap: "Google Maps-də bax",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="pt-24">
      <section className={`py-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0a1128] via-[#1e2749] to-[#0a1128]"
          : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl md:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.title}
            </h1>
            <p className={`text-xl ${
              theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
            }`}>
              {t.subtitle}
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative w-full h-[600px] rounded-2xl border overflow-hidden p-8 mb-12 ${
              theme === "dark"
                ? "bg-[#0a1128]/50 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <AzerbaijanMap locations={t.locations} />
          </motion.div>

          {/* Branch Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-[#1e2749]/50 border border-white/10"
                    : "bg-white border border-gray-200"
                }`}
              >
                <MapPin className={`w-8 h-8 mb-4 ${
                  theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                }`} />
                <h3 className={`text-lg mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {location.city}
                </h3>
                <p className={`text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {location.country}
                </p>
                <p className={`text-sm mb-4 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {location.address}
                </p>
                <div className={`flex items-center gap-2 text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  <Clock className="w-4 h-4" />
                  {t.hours}
                </div>
                <div className={`flex items-center gap-2 text-sm mb-3 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  <Phone className="w-4 h-4" />
                  {t.phone}
                </div>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all group ${
                    theme === "dark"
                      ? "text-[#5dd9d9] hover:bg-[#4a90e2]/20"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {t.viewOnMap}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};