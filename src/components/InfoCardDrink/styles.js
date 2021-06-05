import styled from "styled-components";

export const InfoDrinkContainer = styled.div`
  background-color: #d6ded9;
  border: 1px solid black;
  height: 800px;
  width: 1200px;
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    width: 50%;
    height: 100%;
    border-right: 1px solid black;
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 700px;
    }
  }
`;

export const InfoDrink = styled.div`
  width: 50%;
  height: 100%;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1 {
      font-size: 3rem;
      margin: 20px;
    }
  }
`;
