import React from "react";

const HomePage = () => {
  return (
    <div className="center-align" style={{marginTop:'200px'}}>
      <h3>Welcome</h3>
      <button onClick={() => console.log("clicked")}>click</button>
    </div>
  );
};

export default {component: HomePage};
