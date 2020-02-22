import React from "react";
import axios from "axios";
import Total from "./Total";
import data from "./data.json";

import "./styles.css";

const dataList = data.results;
class App extends React.Component {
  state = {
    results: []
  };

  render() {
    return (
      <>
        <h1> COVID-19 (Corona virus)</h1>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Country and City</th>
              <th>Current confirm count</th>
              <th>Confirmed count</th>
              <th>Cured </th>
              <th>Dead</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map(c => (
              <tr>
                <td>
                  {c.provinceEnglishName}, {c.countryEnglishName}
                </td>
                <td>{c.currentConfirmedCount}</td>
                <td>{c.confirmedCount}</td>
                <td className="positive">{c.curedCount}</td>
                <td className="negative">{c.deadCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default App;
