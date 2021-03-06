import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Sidebar from "./components/base/sidebar";
// import Background from "./components/base/background";

// import Timeline from "./components/base/time-line";
import Navbar from "./components/commons/navbar";
import Footer from "./components/commons/footer";
import Home from "./components/routes/home";
import Token from "./components/routes/token";
// import Bridge from "./components/routes/bridge";
// import Vault from "./components/routes/vault";
// import Dex from "./components/routes/dex";
import Downloads from "./components/routes/downloads";
import ScrollToTop from "./components/base/scroll-to-top";
import BridgeApp from "./components/routes/app";
import UnderWorkDex from "./components/routes/under-work-dex";
import UnderWorkBridge from "./components/routes/under-work-bridge";

//import '@splidejs/splide/dist/css/splide.min.css';
import "./scss/styles.scss";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route exact path="/token">
          <Token />
        </Route>

        <Route exact path="/bridge">
          <UnderWorkBridge />
        </Route>

        <Route exact path="/dex">
          <UnderWorkDex />
        </Route>

        <Route exact path="/app">
          <BridgeApp />
        </Route>

        <Route exact path="/downloads">
          <Downloads />
        </Route>*/}
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
