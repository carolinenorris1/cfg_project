import { createContext, useState } from "react";

const CountryContext = createContext();

    export function CountryProvider({ children }) {
        const [country, setCountry] = useState("UK");
        return (
            <CountryContext.Provider value={ { country, setCountry } }>{children}</CountryContext.Provider>
        );
    }   

export default CountryContext;