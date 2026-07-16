import Header from "./_components/header";
import Body from "./_components/body";
import Footer from "./_components/footer";

export default function IdleView({
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
  return (
    <div className="flex flex-col h-screen">
      <Header dt={dt} />
      <Body
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
      <Footer />
    </div>
  );
}
