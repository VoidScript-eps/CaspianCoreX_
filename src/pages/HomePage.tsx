import { useOutletContext } from "react-router";
import { HeroSection } from "../components/HeroSection";
import { PrinciplesSection } from "../components/PrinciplesSection";
import { CardsSection } from "../components/CardsSection";
import { AIAssistantsSection } from "../components/AIAssistantsSection";
import { CurrencyRates } from "../components/CurrencyRates";
import { AppStoresBanner } from "../components/AppStoresBanner";
import { useTheme } from "../contexts/ThemeContext";

interface ContextType {
  language: string;
}

export const HomePage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();

  return (
    <div>
      <HeroSection language={language} />
      
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#0a1128]" : "bg-gray-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Currency Rates Widget */}
            <div className="md:col-span-1">
              <CurrencyRates language={language} />
            </div>

            {/* Quick Stats */}
            <div className="md:col-span-2 grid grid-cols-2 gap-6">
              {[
                { 
                  value: "100K+", 
                  label: language === "en" ? "Clients" : language === "ru" ? "Клиентов" : "Müştərilər"
                },
                { 
                  value: "$5B+", 
                  label: language === "en" ? "Assets Under Management" : language === "ru" ? "Активов" : "Aktivlər"
                },
                { 
                  value: "50+", 
                  label: language === "en" ? "Branches" : language === "ru" ? "Филиалов" : "Filial"
                },
                { 
                  value: "24/7", 
                  label: language === "en" ? "Customer Support" : language === "ru" ? "Поддержка" : "Dəstək"
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl text-center ${
                    theme === "dark"
                      ? "bg-[#1e2749]/50 border border-white/10"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className={`text-3xl mb-2 ${
                    theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PrinciplesSection language={language} />
      <CardsSection language={language} />
      
      <section id="ai" className={`py-16 ${
        theme === "dark" ? "bg-[#0a1128]" : "bg-white"
      }`}>
        <AIAssistantsSection language={language} onPurchase={() => {}} />
      </section>

      <section className={`py-16 ${
        theme === "dark" ? "bg-[#1e2749]" : "bg-gray-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <AppStoresBanner language={language} />
        </div>
      </section>
    </div>
  );
};
