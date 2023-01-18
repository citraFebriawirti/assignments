import moment from "moment-timezone";
import { useState } from "react";


const App = () => {
  const currentTime = "01:00:00";
  // buat state 
  const [timezone, setTimezone] = useState("");
  const formatedTime = moment(currentTime, "HH:mm:ss");
  const time = moment.tz(formatedTime, timezone).format("HH:mm:ss");

  return (
    <div>
      <h1>Time converter</h1>
      <h2>Current time: {currentTime}</h2>
      {/* buat set timezone dengan 00:00:00 */}
      <h2>Converted time: {timezone === "" ? "00:00:00" : time}</h2>
      <form>
        <label>convert to:</label>
        {/* gunakan handling dengan onChange */}
        <select name="" id="" onChange={(e) => setTimezone(e.target.value)}>
          {/* buat select dengan options lalu masukkan valuenya  */}
          <option value={""}>Select timezone</option>
          <option value={"Asia/Tokyo"}>Tokyo</option>
          <option value={"America/New_York"}>New York</option>
          <option value={"Europe/Madrid"}>Madrid</option>
          <option value={"Africa/Cairo"}>Cairo</option>
          <option value={"Australia/Sydney"}>Sydney</option>
        </select>
      </form>
    </div>
  );
};

export default App;
