import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <button style={{background: "none", border:"none"}} onClick={(event) => increaseAllocation(props.name)}>
          <img height={32} src="https://www.iconpacks.net/icons/4/free-icon-green-add-button-12023.png" alt="" />
        </button>
      </td>
      <td>
        <button style={{background: "none", border:"none"}} onClick={(event) => decreaseAllocation(props.name)}>
          <img height={32} src="https://www.iconpacks.net/icons/free-icons-6/free-minus-circle-red-symbol-icon-22248.png" alt="" />
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
