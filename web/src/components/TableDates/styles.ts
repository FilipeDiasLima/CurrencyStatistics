import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    justify-content: space-between;

    li {
      padding: 15px 0;
    }
    & + ul {
      border-bottom: 2px solid #999b9e;
    }
  }

  .titles {
    li {
      font-size: 2rem;
      color: #1f1f4b;
      font-weight: 700;
    }
    .day {
      margin-left: 7px;
    }
  }

  .values {
    transition: background 0.3s;
    li {
      max-width: 95px;
      width: 100%;
      font-size: 1.8rem;
      color: #1f1f4b;
      font-weight: 400;
    }
    .day {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    .status {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .price {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &:hover {
      background: #d6d7e0;
    }
  }
`;
