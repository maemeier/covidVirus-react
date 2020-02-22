import React from "react";
import axios from "axios";
import data from "./data.json";

import "./styles.css";

const dataList = data.results;
const totalDead = data.results.deadCount;

class App extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get(`https://lab.isaaclin.cn/nCoV/api/area`).then(res => {
      console.log(res);
      this.setState({ results: res.data });
    });
  }
  render() {
    return (
      <div className>
        {dataList.map(c => (
          <div>
            <h4 className="description">
              Location: {c.provinceEnglishName}, {c.countryEnglishName}
            </h4>
            <p className="meta">
              Current confirm count: {c.currentConfirmedCount}
            </p>
            <p className="description">
              {" "}
              Confrim count:
              {c.confirmedCount}
            </p>
            <p>
              Cured count:
              {c.curedCount}
            </p>
            <p>
              Dead count:
              {c.deadCount}
            </p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
export default App;
