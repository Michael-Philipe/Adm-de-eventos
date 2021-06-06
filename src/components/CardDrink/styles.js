import styled from "styled-components";

export const DrinkContainer = styled.div`
  height: 500px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 5px;
  background-color: #dedede;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 320px;

    img {
      height: 300px;
    }
  }

  a {
    font-size: 1rem;
    color: black;
    text-decoration: none;
  }

  button {
    height: 30px;
    width: 80%;
    font-size: 18px;
    cursor: pointer;
    background-color: transparent;
    text-transform: capitalize;
    border: 1px solid black;
    border-radius: 3px;
    margin-bottom: 8px;
  }

  button:hover {
    background-color: purple;
    color: #fff;
  }
`;

export const InfoDrink = styled.div`
  height: 300px;
  width: 300px;
  background-color: black;
`;
