import React from "react";
import reaction from "../assets/images/icon-reaction.svg";
import memory from "../assets/images/icon-memory.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";
function Stats() {
  return (
    <div className="stats">
      <h3>Summary</h3>
      <ul>
        <li id="reaction">
          <span>
            <img alt="reaction" src={reaction} />
            <span>Reaction</span>
          </span>
          <p>
            80<span className="total">/100</span>
          </p>
        </li>
        <li id="memory">
          <span>
            <img alt="memory" src={memory} />
            <span> Memory</span>
          </span>
          <p>
            92<span className="total">/100</span>
          </p>
        </li>
        <li id="verbal">
          <span>
            <img alt="verbal" src={verbal} />
            <span>Verbal</span>
          </span>
          <p>
            61<span className="total">/100</span>
          </p>
        </li>
        <li id="visual">
          <span>
            <img alt="visual" src={visual} />
            <span>Visual</span>
          </span>
          <p>
            72<span className="total">/100</span>
          </p>
        </li>
      </ul>
      <button className="btn">Continue</button>
    </div>
  );
}

export default Stats;
