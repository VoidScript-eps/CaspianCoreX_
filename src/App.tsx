import { RouterProvider } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BankProvider } from "./contexts/BankContext";
import { router } from "./utils/routes";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider>
      <BankProvider>
        <RouterProvider router={router} />
        <Toaster />
      </BankProvider>
    </ThemeProvider>
  );
}
