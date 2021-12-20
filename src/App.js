import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [img, setImg] = useState("");
  const [condition, setCondition] = useState("");

  const [humidity, setHumidity] = useState("");
  const [feels, setFeels] = useState("");
  const [cloud, setCloud] = useState("");

  useEffect(() => {
    getData();
  }, [city.name]);

  async function getData() {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=03a4e7b0a2c141efa08113033210812&q=${name}`
    );
    console.log(res.data);
    setCity(res.data.location);
    setTemp(res.data.current.temp_c);
    setImg(res.data.current.condition.icon);
    setCondition(res.data.current.condition.text);
    setHumidity(res.data.current.humidity);
    setFeels(res.data.current.feelslike_c);
    setCloud(res.data.current.cloud);
  }

  return (


    <>
    <div className="App">
      <h1 id="heading">Get Instant Weather Update of your Location:-</h1>

      <div className="inp">
        <input
          id="inp"
          type="text"
          placeholder="Find Weather of your City:-"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input type="submit" value="Submit" onClick={getData} />
      </div>

      {city && (
        <div>
          <div className="data">
            <div className="location">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
                {city.name},{city.region}
              </h3>
            </div>

            <div className="condition">
              <div>
                <img src={img} />
              </div>
              <h3>{temp} °C</h3>
              <div>
                <h3>{condition}</h3>
              </div>
            </div>
          </div>
          <div className="more">
            <h3>Humidity :- {humidity}% </h3>
            <br></br>
            <h3>Feels like :-{feels} °C </h3>
            <br></br> <br></br>
            <h3>Cloud:- {cloud} %</h3>
          </div>
        </div>
      )}

     
    </div>
    <div className="footer">
        Made with <span>❤</span> by { }
        <a href="https://www.linkedin.com/in/sanketnchaware/" target="_blank">
          Sanket
        </a>
      </div>

    </>
  );
}

export default App;
