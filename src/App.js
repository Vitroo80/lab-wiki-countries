import CountriesList from "./components/CountriesList";
import Navbar from "./components/Navbar"
import CountryDetails from "./components/CountryDetails";
import countries from "./countries.json"
import style from "./Apps.module.css"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar/>
        <div className={style.container}>
        <CountriesList countries={countries}/>
        <Routes>
          
            <Route path=":id" element={ <CountryDetails countries={countries} /> } />
          
        </Routes>
        </div>
    </div>
  );
}

export default App;