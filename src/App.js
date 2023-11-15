import "./App.css";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import ServicePage from "./pages/Service/ServicePage";
import ReferencesPage from "./pages/References/ReferencesPage";
import CorporatePage from "./pages/Corporate/CorporatePage";
import ContactPage from "./pages/Contact/ConatctPage";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/service">
          <ServicePage />
        </Route>
        <Route path="/references">
          <ReferencesPage />
        </Route>
        <Route path="/corporate">
          <CorporatePage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
