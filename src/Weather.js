import React from "react";

const Weather = () => {
  return (
    <div className="App container border bg-amber-200 shadow w-[800px] h-[350px] mx-auto mt-10 m-5 rounded p-5 ">
      <a href="https://www.shecodes.io/">
        <img
          src="https://www.weather.shecodes.io/images/logo.png"
          className="logo w-36 mt-5 mx-5"
          alt="SheCodes Logo"
        />
      </a>

      <div>
        <form className="mt-5 flex justify-between gap-8">
          <div className="w-[500px] ">
            <input
              type="text"
              className=" py-[20px] h-[50px] text-[16px]  leading-[20px] w-[500px] ml-5 px-[15px] form-control rounded bg-amber-100"
              placeholder="Enter a City"
            />
          </div>
          <div className="w-[300px]">
            <button className="btn bg-yellow-600 rounded px-[15px] h-[50px] text-[16px] max-w-[100px] leading-[20px] ">
              Search
            </button>
          </div>
        </form>

        <div class="WeatherInfo my-5">
          <div class="flex justify-between">
            <div class="max-w-[400px] mx-6 ">
              <h1 className="text-[38px] font-[700] leading-[48px] ">Paris</h1>
              <ul>
                <li>
                  <span>Friday 15:26</span>, broken clouds
                </li>
                <li>
                  Humidity: <strong>92%</strong>, Wind:{" "}
                  <strong>8.75km/h</strong>
                </li>
              </ul>
            </div>
            <div className="max-w-[400px ] flex">
              <canvas width="52" height="52"></canvas>
              <div>
                <span className="temperature font-[700] text-[80px]">11</span>
                <span className="relative top-[-34px] text-[28px] font-[400] mr-5">°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default Weather;
