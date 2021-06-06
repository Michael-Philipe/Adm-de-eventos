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

  .close {
    position: absolute;
    right: 15px;
    top: 10px;
    color: red;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
    font-size: 20px;
    background-color: transparent;
    border: none;
  }

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
  text-align: center;
  padding: 20px;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    h1 {
      font-size: 3rem;
      margin: 20px;
    }
    .button-container {
      display: flex;
      width: 100%;
      border: none;
      flex-direction: column;
      align-items: center;
      height: 110px;

      h3 {
        margin: 5px 0 10px 0;
        font-size: 2rem;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 50px;
        border: none;
      }
    }
  }
`;
