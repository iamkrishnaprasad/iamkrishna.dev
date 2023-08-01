import { ProvidersProps } from "@/types";
import ThemeProvider from "./theme";

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
