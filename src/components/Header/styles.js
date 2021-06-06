import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100px;
  width: 100vw;
  background-color: #309cea;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;

  .title {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2rem;
      color: black;
      cursor: pointer;
    }
  }

  .links-container {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    align-self: flex-end;

    img {
      margin: 0 auto;
    }

    ul {
      flex: 1;
      list-style: none;
      display: flex;
      justify-content: space-around;

      li {
        font-size: 24px;
        cursor: pointer;
        position: relative;
        span {
          background-color: white;
          text-align: center;
          color: green;
          display: block;
          position: absolute;
          right: -10px;
          top: -7px;
          border-radius: 50%;
          height: 20px;
          width: 20px;
          font-size: 20px;
        }
        a {
          text-decoration: none;
          color: black;
        }
        a:hover {
          color: #fff;
        }
      }
    }
  }
`;
