import React from "react";
import { Route, Switch } from "react-router-dom";

// Component Imports
import Main from "./pages/Main";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import WorkPage from "./pages/WorkPage";
import MySkillsPage from "./pages/MySkillsPage";

// Styling Imports
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./pages/Themes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
