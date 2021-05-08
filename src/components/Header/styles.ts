import styled from "styled-components";
import Link from "next/link";
export const Container = styled.div<{ isMenuVisible: boolean }>`
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #1c496a;

  box-shadow: 0px 0px 10px #ccc;
  height: 65px;
  width: 100%;
  padding: 20px;

  .divpai {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
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
      overflow-x: hidden;
      transition: 0.5s;
      left: ${({ isMenuVisible }) => (isMenuVisible ? 0 : '-300px')};

      @keyframes drop {
        100% {
          transform: translateX(0px);
          transition: 0.5s;
        }
        0% {
          transform: translateX(0);
          transition: 0.5s;
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
    .menu {
      display: flex;

      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 15px;

      margin-right: 25%;
      cursor: pointer;
      outline: 0;
      border: none;
      width: 22px;
      height: 30px;
      background: transparent;

      svg {
        width: 30px;
        height: 22px;
        color: #fff;
      }
    }

    h1 {
      align-items: center;
      margin-right: 3%;
      width: 170px;
      color: #fff;
      font-size: 26px;
      position: relative;
      align-self: center;
    }
  }
  .div2 {
    display: flex;
    align-items: center;
    flex-direction: row;

    width: 18%;
    height: 60px;

    .bell {
      display: flex;
      outline: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      svg {
        width: 23px;
        height: 25px;
        color: #fff;
      }
    }
    .ball {
      margin-bottom: 23px;
      margin-left: -10px;

      width: 13px;
      height: 13px;

      z-index: 999;
    }
    > .perfil {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      background: transparent;

      margin-left: 2%;
      width: 70px;
      height: 50px;
      .falcon {
        width: 45px;
        height: 45px;
        box-shadow: 0px 1px 3px #333;
        border-radius: 50px;
      }

      > svg {
        width: 50px;
        height: 50px;
      }
    }
    p {
      color: #fff;
      margin-left: 10px;
    }
  }
  @media (max-width: 576px) {
    display: flex;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background: #1c496a;

    box-shadow: 0px 0px 10px #ccc;
    height: 65px;
    width: 100%;
    padding: 20px;

    .divpai {
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
    }
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
        max-width: 200px;
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
      .menu {
        display: flex;

        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 15px;

        margin-right: 25%;
        cursor: pointer;
        outline: 0;
        border: none;
        width: 22px;
        height: 30px;
        background: transparent;

        svg {
          width: 30px;
          height: 22px;
          color: #fff;
        }
      }

      h1 {
        display: flex;
        align-items: center;
        margin-left: 15%;

        color: #fff;
        font-size: 20px;
      }
    }
    .div2 {
      display: none;
      align-items: center;
      flex-direction: row;

      width: 18%;
      height: 60px;

      .bell {
        display: flex;
        outline: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        svg {
          width: 23px;
          height: 25px;
          color: #fff;
        }
      }
      .ball {
        margin-bottom: 23px;
        margin-left: -10px;

        width: 13px;
        height: 13px;

        z-index: 999;
      }
      > .perfil {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        background: transparent;

        margin-left: 2%;
        width: 70px;
        height: 50px;
        .falcon {
          width: 45px;
          height: 45px;
          box-shadow: 0px 1px 3px #333;
          border-radius: 50px;
        }

        > svg {
          width: 50px;
          height: 50px;
        }
      }
      p {
        color: #fff;
        margin-left: 10px;
      }
    }
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
