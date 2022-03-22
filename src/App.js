import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

// Component Imports
import Main from "./pages/Main";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import WorkPage from "./pages/WorkPage";
import MySkillsPage from "./pages/MySkillsPage";

// Styling Imports
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./pages/Themes";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
