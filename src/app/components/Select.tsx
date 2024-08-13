import React from "react";
import Icon from "@mdi/react";
import { mdiAlarmPlus } from "@mdi/js";
import { Button } from "react-bootstrap";

export default function B2() {
  return (
    <div className="container">
      <h3>Input Label</h3>
      <div className="inputLabel">
        <Icon path={mdiAlarmPlus} size={1} />
        <input type="text" />
        <i className="fa-solid fa-caret-up"></i>
      </div>
      <div className="list">
        <div className="list-item">
          <span>Label</span>
          <input type="checkbox" />
        </div>
        <div className="list-item">
          <span>Label</span>
          <input type="checkbox" />
        </div>
        <div className="list-item">
          <span>Label</span>
          <input type="checkbox" />
        </div>
        <div className="list-item">
          <span>Label</span>
          <input type="checkbox" />
        </div>
      </div>
      <div className="button">
        <button className=" bg-white font-bold w-56">Clear</button>
        <button className="bg-blue-500 font-bold w-56">Apply</button>
      </div>
    </div>
  );
}
