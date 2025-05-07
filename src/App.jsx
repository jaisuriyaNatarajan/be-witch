import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import AppRoutes from "./routes/AppRoutes ";
import { OnboardingProvider } from "./context/OnboardingContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <OnboardingProvider>
        <GlobalStyles />
        <BrowserRouter basename="/be-witch">
          <AppRoutes />
        </BrowserRouter>
      </OnboardingProvider>
    </ThemeProvider>
  );
}

export default App;
