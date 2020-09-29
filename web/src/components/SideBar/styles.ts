import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  flex-direction: column;
  max-width: 65px;
  height: 100vh;
  width: 100%;

  padding: 30px 0;
  background: #fff;
  align-items: center;
  overflow: hidden;

  box-shadow: 3px 0px 7px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    max-width: 48px;
  }
`;

export const Circle = styled.div`
  margin-bottom: 260px;

  img {
    transition: transform 1s;

    &:hover {
      transform: perspective(700px) translateZ(160px) rotate(720deg);
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 140px;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .link {
    background: #3993d8;
    border: none;

    a {
      width: 100%;
      height: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      background: #fff;
      border: none;
      transition: transform 0.2s;

      svg {
        margin-left: 11px;
        color: #999b9e;
        transition: color 0.3s;

        &:hover {
          color: #3993d8;
        }
      }

      &:hover {
        transform: translateX(8px);
      }
    }

    .selected {
      width: 100%;
      height: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      background: #fff;
      border: none;
      transform: translateX(6px);

      svg {
        margin-left: 11px;
        color: #3993d8;
      }
    }

    & + div {
      margin-top: 63px;
    }
  }

  @media (max-width: 1024px) {
    .link {
      a {
        svg {
          width: 25px;
          height: 25px;
        }
      }
      & + div {
        margin-top: 43px;
      }
    }
  }
`;
