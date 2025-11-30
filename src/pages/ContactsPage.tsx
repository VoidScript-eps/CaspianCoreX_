import { useOutletContext } from "react-router";
import { ContactSection } from "../components/ContactSection";

interface ContextType {
  language: string;
}

export const ContactsPage = () => {
  const { language } = useOutletContext<ContextType>();

  return (
    <div className="pt-24">
      <ContactSection language={language} />
    </div>
  );
};
