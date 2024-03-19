import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Action from "./components/pages/Action/Action";
import Menu from "./components/pages/Menu/Menu";
import Company from "./components/pages/Company/Company";
import Fillials from "./components/pages/Fillials/Fillials";
import Contacts from "./components/pages/Contacts/Contacts";

import MenuDetails from "./components/pages/MenuDetails/MenuDetails";
import Korzina from "./components/Korzina/Korzina";

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

        <Route path="/Menu/:id" element={<MenuDetails />} />
        <Route path="/korzina" element={<Korzina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
