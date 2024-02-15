import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [showOptions, setShowOptions] = useState(false);
  const curRef = useRef();

  const handleChangeCurrency = (value) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };

  const currencies = [
    { name: "dollar", value: "$", display: "$ Dollar" },
    { name: "pound", value: "£", display: "£ Pound" },
    { name: "euro", value: "€", display: "€ Euro" },
    { name: "ruppee", value: "₹", display: "₹ Ruppee" },
  ];
  return (
    <>
      <div className="input-group-prepend">
        <div className="dropdown">
          <button
            className="btn btn-info dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-theme="dark"
            onClick={() => setShowOptions(!showOptions)}>
            {`Currency (${currencies.find((curr) => curr.value === currency).display})`}
          </button>
          <ul className={`dropdown-menu text-bg-light ${showOptions ? "show" : ""}`} ref={curRef}>
            {currencies.map((currency) => (
              <li>
                <button className="dropdown-item" data-bs-theme="dark" onClick={()=>{
                    handleChangeCurrency(currency.value)
                    setShowOptions(false)}}>
                  {currency.display}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Currency;
