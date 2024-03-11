import React from "react";

function Score() {
  return (
    <div className="scores">
      <h5>Your Results</h5>
      <div id="circle-div">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h3>Great</h3>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Score;
