import { useOutletContext } from "react-router";
import { GlobalReachSection } from "../components/GlobalReachSection";

interface ContextType {
  language: string;
}

export const PresencePage = () => {
  const { language } = useOutletContext<ContextType>();

  return (
    <div className="pt-24">
      <GlobalReachSection language={language} />
    </div>
  );
};
