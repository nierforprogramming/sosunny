import { createContext, useState } from "react";
import { DEFAULT_PLACE } from "../utils/utils";

const WeatherContext = createContext()


function WeatherProvider({children}) {
    const [place, setPlace] = useState(DEFAULT_PLACE)
    const [loader, setLoader] = useState(false)
    const [currentWeather, setCurrentWeather] = useState()
    return(

        <WeatherContext.Provider value={{place,loader}}>
        {children}
    </WeatherContext.Provider>
    )
}

export {WeatherProvider}

export default WeatherContext