import IdleView from "@/components/IdleView/idle-view";

export default async function Home() {
  const lat = 12.121212; // Example
  const lon = 21.212121; // Example
  const apiKey = "apikey";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 120 } });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Weather API Error: ${res.status} - ${errorText}`);
    return (
      <div>
        Failed to load weather data. Check your server console for details.
      </div>
    );
  }

  const data = await res.json();
  const weather = data.weather[0];

  return (
    <IdleView
      dt={data.dt}
      sunrise={data.sys.sunrise}
      sunset={data.sys.sunset}
      temp={data.main.temp}
      feels_like={data.main.feels_like}
      pressure={data.main.pressure}
      humidity={data.main.humidity}
      dew_point={0} // Not available in the free 2.5 API
      uvi={0} // Not available in the free 2.5 API
      clouds={data.clouds.all}
      visibility={data.visibility}
      wind_speed={data.wind.speed}
      wind_deg={data.wind.deg}
      id={weather.id}
      main={weather.main}
      description={weather.description}
      icon={weather.icon}
    />
  );
}
