import React from "react";
import { FiArrowDown } from "react-icons/fi";

import { Container } from "./styles";

const TableDates: React.FC = () => {
  return (
    <Container>
      <ul className="titles">
        <li>Month</li>
        <li className="day">Day</li>
        <li>Status</li>
        <li>Price</li>
      </ul>
      <ul className="values">
        <li className="month">September</li>
        <li className="day">19</li>
        <li className="status">
          <FiArrowDown />
        </li>
        <li className="price">5,3754</li>
      </ul>

      <ul className="values">
        <li className="month">September</li>
        <li className="day">19</li>
        <li className="status">
          <FiArrowDown />
        </li>
        <li className="price">5,3754</li>
      </ul>

      <ul className="values">
        <li className="month">September</li>
        <li className="day">19</li>
        <li className="status">
          <FiArrowDown />
        </li>
        <li className="price">5,3754</li>
      </ul>
    </Container>
  );
};

export default TableDates;
