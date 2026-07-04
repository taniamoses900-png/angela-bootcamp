import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
 
  const mockWeatherData = {
    temperature: 59,
    windSpeed: 12.0
  };

  const temp = mockWeatherData.temperature;
  const wind = mockWeatherData.windSpeed;

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Live Weather Dashboard</title>
        <style>
            body { font-family: 'Segoe UI', sans-serif; background: #e0f2fe; text-align: center; padding: 50px; }
            .card { background: white; display: inline-block; padding: 40px; border-radius: 20px; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
            h1 { color: #0369a1; }
            .temp { font-size: 3.5rem; font-weight: bold; color: #f97316; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🌤️ Live Weather Dashboard 🌧️</h1>
            <p>Location: Cape Town, South Africa (Local Mode)</p>
            <div class="temp">${temp}°F</div>
            <p>💨 Wind Speed: ${wind} mph</p>
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Weather app running on http://localhost:${port}`);
});
