import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import ellipse from "../../assets/ellipse.svg";
import { Link } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import { MdSettings } from "react-icons/md";

import { Container, Circle, Icons } from "./styles";

interface idProps {
  id: string;
}

const SideBar: React.FC = () => {
  // $(window).load(function () {
  //   $("a.btn").click(function () {
  //     $(this).toggleClass("active");
  //   });
  // });

  const location = useLocation().pathname;

  const [selected, setSelected] = useState("unselected");
  // const [itemSelected, setItemSelected] = useState([]);

  function selectedButton() {
    if (selected === "selected") {
      // já selecionado
      const newClassname = "unselected";
      setSelected(newClassname);
    }
    if (selected === "unselected") {
      const newClassname = "selected";
      setSelected(newClassname);
    }
  }

  return (
    <Container>
      <Circle>
        <img src={ellipse} alt="Ellipse" />
      </Circle>
      <Icons>
        <div className="link">
          <Link
            to="/"
            onClick={selectedButton}
            className={location === "/" ? "selected" : ""}
          >
            <FiGrid size={35} />
          </Link>
        </div>
        <div className="link">
          <Link
            to="/statistics"
            onClick={selectedButton}
            className={location === "/statistics" ? "selected" : ""}
          >
            <VscGlobe size={37} />
          </Link>
        </div>
        <div className="link">
          <Link
            to="/profile"
            onClick={selectedButton}
            className={location === "/profile" ? "selected" : ""}
          >
            <FaUserCircle size={35} />
          </Link>
        </div>
        <div className="link">
          <Link
            to="/settings"
            onClick={selectedButton}
            className={location === "/settings" ? "selected" : ""}
          >
            <MdSettings size={35} />
          </Link>
        </div>
      </Icons>
    </Container>
  );
};

export default SideBar;
