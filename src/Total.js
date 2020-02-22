import React from "react";
import axios from "axios";

import data from "./data.json";

import "./styles.css";

const dataList = data.results;

class Total extends React.Component {
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
      <>
        <div>
          Total dead:{" "}
          {dataList.map(c => (
            <div>{c.deadCount}</div>
          ))}
        </div>
      </>
    );
  }
}
export default Total;
