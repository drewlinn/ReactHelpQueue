import React from "react";

class MyStyledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {exampleBooleanStateValue: false};
  }

  render(){
    var myStyledComponentsStyles = {
      backgroundColor: "#ecf0f1",
      fontFamily: "sans-serif",
      paddingTop: "50px"
    }
    return (
      <div style={myStyledComponentsStyles}>
        <h1>Hey, I'm a component</h1>
        <h2>But there's something different about me...</h2>
        <h3>Unlike other components you've worked with thus far....</h3>
        <h4>I also include custom CSS styles!</h4>
        <p>Pretty cool, right</p>
      </div>
    );
  }
}

export default MyStyledComponent;
