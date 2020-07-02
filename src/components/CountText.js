import React, { Component } from "react";
import Text from "./Text";
import Count from "./Count";

export default class CountText extends Component {
  render() {
    return (
      <div className="area">
        <Text countChar={this.props.countChar} />
        <Count numChar={this.props.numChar} />
      </div>
    );
  }
}
