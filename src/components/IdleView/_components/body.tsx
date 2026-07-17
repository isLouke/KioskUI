"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";
import Weather from "./weather";

export default function Body({
  dt, // current time in UTC
  sunrise, // sunrise time in UTC
  sunset, // sunset time in UTC
  temp, // temperature in Kelvin
  feels_like, // feels like temperature in Kelvin
  pressure, // atmospheric pressure in hPa
  humidity, // humidity percentage
  dew_point, // dew point in Kelvin
  uvi, // UV index
  clouds, // cloudiness percentage
  visibility, // visibility in meters
  wind_speed, // wind speed in m/s
  wind_deg, // wind direction in degrees
  id, // weather condition id
  main, // group of weather parameters (Rain, Snow, Extreme etc.)
  description, // weather condition within the group
  icon, // weather icon id
}: {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  id: number;
  main: string;
  description: string;
  icon: string;
}) {
  const timer = 10; // seconds
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prev) => !prev);
    }, timer * 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div
      className="flex grow justify-center items-center"
      style={{ perspective: 1000 }}
    >
      <AnimatePresence mode="wait">
        {showLogo ? (
          <motion.div
            key="logo"
            initial={{ opacity: 0, rotateY: -90 }} // Starts rotated sideways
            animate={{ opacity: 1, rotateY: 0 }} // Rotates to flat
            exit={{ opacity: 0, rotateY: 90 }} // Rotates away sideways
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>
        ) : (
          <motion.div
            key="weather"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
          >
            <Weather
              dt={dt}
              sunrise={sunrise}
              sunset={sunset}
              temp={temp}
              feels_like={feels_like}
              pressure={pressure}
              humidity={humidity}
              dew_point={dew_point}
              uvi={uvi}
              clouds={clouds}
              visibility={visibility}
              wind_speed={wind_speed}
              wind_deg={wind_deg}
              id={id}
              main={main}
              description={description}
              icon={icon}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
