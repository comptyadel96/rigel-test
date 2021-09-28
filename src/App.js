import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import BurgerNav from "./component/BurgerNav"
import Home from "./pages/Home"
import Policy from "./pages/Policy"
import Faq from "./pages/Faq"
import DataPrivacy from './pages/DataPrivacy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <BurgerNav />
      {/* logo+slogant */}
      <div className="md:flex-row flex flex-col items-center bg-green-900 w-screen   p-3  ">
        <img
          alt="rigelni logo"
          src="/images/rigelniMap.png"
          className="max-h-56 md:ml-3  "
        />
        <h1 className="md:text-5xl text-3xl text-white ml-3">
          Où que vous soyez en Algérie...
        </h1>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FAQ" component={Faq} />
        <Route path="/personal-data" component={DataPrivacy} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/privacy-policy" component={Policy} />
      </Switch>
    </Router>
  )
}

export default App
