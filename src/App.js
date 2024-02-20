import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Action from "./components/pages/Action/Action";
import Menu from "./components/pages/Menu/Menu";
import Company from "./components/pages/Company/Company";
import Fillials from "./components/pages/Fillials/Fillials";
import Contacts from "./components/pages/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/action" element={<Action />} />

        <Route path="/fillials" element={<Fillials />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
