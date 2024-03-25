import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import StoreContext from "../../store";
import { FaEquals } from "react-icons/fa";

const CurrencyList = () => {

  const {currencies} = useContext(StoreContext);

  const arrCurrencies = Object.entries(currencies);// [key, value] convert object to array
console.log(arrCurrencies);


  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Exchange Rates
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ height: "80vh", overflowY: "auto" }}>
        {arrCurrencies.map((item) => (
          <Dropdown.Item key={item[0]}>
            {item[0]} <FaEquals /> {(1 / item[1]).toFixed(2)}₺
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CurrencyList;
