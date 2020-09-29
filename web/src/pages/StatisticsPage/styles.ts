import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  /*display: grid;
  grid-template-rows: 100vw;
  grid-template-columns: 1fr 1.5fr;
  grid-template-areas: "d i";*/
  width: 100vw;
  padding: 0px 0px 0px 160px;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

export const Datas = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
`;

export const CurrencyInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 230px;

  > h1 {
    font-size: 4rem;
    font-weight: bold;
    color: #1f1f4b;
  }

  > h2 {
    margin-top: 16px;
    font-size: 3rem;
    font-weight: bold;
    color: #1f1f4b;
  }

  > span {
    margin-top: 11px;
    font-size: 2rem;
    font-weight: 600;
    color: #1f1f4b;
  }

  > strong {
    margin-top: 23px;
    font-size: 2.8rem;
    font-weight: bold;
    color: #1f1f4b;
  }
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  max-height: 420px;
  width: 100%;
  align-items: center;
  margin-top: 15px;

  .infoText {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 23px;

    > strong {
      font-size: 1.5rem;
      line-height: 3.3rem;
      color: #1f1f4b;
    }

    > span {
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 2.1rem;
      color: #1f1f4b;
    }
  }
`;

export const ImageGlobe = styled.div``;

export const Cards = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  margin-left: 50px;
  margin-bottom: 47px;
  flex-direction: column;

  div {
    width: 272px;
    height: 163px;
    background: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 44px 25px;
    text-align: left;
    font-size: 2.5rem;
    cursor: pointer;

    transition: transform 0.5s, background 0.3s;

    img {
      width: 90px;
      height: 67px;
    }

    & + div {
      margin-top: 33px;
    }

    &:hover {
      transform: perspective(700) translateZ(30px);
      background: #d6d7e0;
    }
  }
`;
