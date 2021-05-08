import styled from "styled-components";
import Link from "next/link";
export const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin-bottom: 0px;
  .principal-botoes {
    display: flex;
    flex-direction: row;

    width: 80px;
    justify-content: space-between;
    padding-right: 0px;
    margin-left: 10%;

    p {
      color: #fff;
      margin-left: 3px;
    }
    .icones-menu {
      display: flex;
      margin-top: 2px;
      justify-content: center;
    }
  }
  .div1 {
    width: 59%;
    padding: 10px;
    justify-content: space-between;
    display: flex;

    .drop1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;

      left: 0;
      top: 65px;
      width: 100%;
      max-width: 240px;
      height: 100%;
      max-height: 100%;

      background: #373737;
      border: 0;
      outline: 0;
      font: 400 16px Muli;
      color: #f1f1f1;
      padding: 0px;
      display: flex;
      animation: drop 0.2s ease;

      @keyframes drop {
        100% {
          transform: translateX(0px);
        }
        0% {
          transform: translateX(0);
        }
      }
    }
    .sub-notas {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: auto;

      padding-right: 40px;

      margin-top: 2px;
      .sub-notas1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 6px;
      }
      .a-menu {
        width: 100%;

        cursor: pointer;
        text-decoration: none;
        color: #ffffff;
      }

      input {
        cursor: pointer;

        margin-left: 0%;
      }
      :hover input {
        background-color: #ccc;
      }
    }
    .drop2 {
      display: flex;

      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;

      .btn-menu {
        display: flex;

        font: 500 16px Roboto;
        color: #f1f1f1;
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
    .envolAll {
      display: flex;
      flex-direction: column;
    }
  }

  svg {
    margin-left: 80%;
    margin-top: 4%;
    color: #ccc;
    opacity: 0.5;
    position: absolute;
  }
  > input {
    background: #292c39;
    padding-left: 7%;
    height: 80%;
    width: 100%;
    color: #fff;
    font-family: "Muli";
    font-size: 16px;
    outline: 0;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  background: red;
  margin-left: 20px;
  &:focus ~ div,
  :valid ~ div {
    background-color: transparent;
  }
`;
export const NavLinkStyle = styled(Link)`
  display: flex;
  color: red;
  text-decoration: none;

  justify-content: space-between;
  background-color: #ffcf00;
  .a-menu {
    text-decoration: none;
    color: white;
    padding: 10px;
    background-color: #ffcf00;
  }
`;
