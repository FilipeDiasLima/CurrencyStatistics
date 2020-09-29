import React from "react";
import CanvasJSReact from "../../canvasjs.react";

import TableDates from "../../components/TableDates";

import {
  Container,
  Datas,
  CurrencyInfos,
  Chart,
  ImageGlobe,
  Cards,
} from "./styles";

import imageGlobe from "../../assets/globe3.png";
import googleImage from "../../assets/google.png";
import newImage from "../../assets/news.png";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StatisticsPage: React.FC = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    backgroundColor: "transparent",

    axisY: {
      prefix: "R$",
      interval: 1.5,
    },
    axisX: {
      title: "Days",
      valueFormatString: "DD",
    },
    data: [
      {
        type: "spline",
        lineColor: "#BE753A",
        yValueFormatString: "R$##.####",
        xValueFormatString: "DDDD",
        indexLabelFontSize: 12,
        dataPoints: [
          { x: new Date(2020, 9, 24), y: 6.3754 },
          { x: new Date(2020, 9, 25), y: 5.2654 },
          { x: new Date(2020, 9, 26), y: 5.6854 },
          { x: new Date(2020, 9, 27), y: 4.3854 },
          { x: new Date(2020, 9, 28), y: 5.5654 },
        ],
      },
    ],
  };

  function handleSearchAboutCurrency() {
    window.open(
      "https://www.google.com/search?q=real+currency+rate&oq=real+currency+rate&aqs=chrome.0.69i59j0.5711j0j7&sourceid=chrome&ie=UTF-8",
      "_blank"
    );
  }
  function handleNewsAboutCurrency() {
    window.open(
      "https://www.google.com/search?q=real+currency+rate&sxsrf=ALeKk004eZ2GUAO_Yb9ebMpZTLp_z-nWgA:1601332115671&source=lnms&tbm=nws&sa=X&ved=2ahUKEwjb16__8ozsAhVWHrkGHScgDMgQ_AUoAXoECBIQAw&cshid=1601332128595782&biw=1536&bih=763",
      "_blank"
    );
  }

  return (
    <Container>
      <Datas>
        <CurrencyInfos>
          <h1>Real</h1>
          <h2>Currency Statistics</h2>
          <span>Base Currency: Dolar</span>
          <strong>BRL 5,3754</strong>
        </CurrencyInfos>
        <TableDates />
        <Chart>
          <div className="infoText">
            <strong>6 days ago</strong>
            <span>Today, September 19th, 2020</span>
          </div>
          <CanvasJSChart options={options} />
        </Chart>
      </Datas>
      <ImageGlobe>
        <Cards>
          <div onClick={handleSearchAboutCurrency}>
            <span>Search on Google</span>
            <img src={googleImage} alt="Google" />
          </div>
          <div onClick={handleNewsAboutCurrency}>
            <span>News about Real</span>
            <img src={newImage} alt="News" />
          </div>
        </Cards>
        <img src={imageGlobe} alt="" />
      </ImageGlobe>
    </Container>
  );
};

export default StatisticsPage;
