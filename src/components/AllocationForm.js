import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining, expenses, currency } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    switch (action) {
      case "Add": {
        if (cost > remaining) {
          alert("The value cannot exceed remaining funds  £" + remaining);
          setCost("");
          return;
        }
        dispatch({
          type: "ADD_EXPENSE",
          payload: expense,
        });
        break;
      }
      case "Reduce": {
        if (cost > expenses.find((department) => department.name === name).cost) {
            alert("The value cannot exceed remaining allocated budget  £" + expenses.find((department) => department.name === name).cost);
            setCost("");
            return;
          }
        dispatch({
          type: "RED_EXPENSE",
          payload: expense,
        });
        break;
      }
      default:
        return;
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Department
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}>
            <option defaultValue>Choose...</option>
            <option value="Marketing" name="marketing">
              {" "}
              Marketing
            </option>
            <option value="Sales" name="sales">
              Sales
            </option>
            <option value="Finance" name="finance">
              Finance
            </option>
            <option value="Human Resource" name="hr">
              HR
            </option>
            <option value="IT" name="it">
              IT
            </option>
            <option value="Admin" name="admin">
              Admin
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}>
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          <div style={{ marginLeft: "2rem", size: 10 }}>
            <p style={{ display: "inline-block", margin:"0 0.5rem 0 0"}}>{currency}</p>
            <input
              required="required"
              type="number"
              id="cost"
              value={cost}
              style={{padding: "4px 6px"}}
              onChange={(event) => setCost(event.target.value)}></input>
          </div>

          <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: "2rem" }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
