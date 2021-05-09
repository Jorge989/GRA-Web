import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: margin-left 0.5s;
  width: 100%;
  .tster {
    background: red;
  }
  .cabecalho {
    display: flex;
    justify-content: space-between;
    background: yellow;
    overflow-x: auto;

    .botoes {
      .Filtrar {
        background: #00b5db;
        box-shadow: 0px 0px 3px #353535;
        border: none;
        width: 100px;
        height: 35px;
        border-radius: 2px;
        color: #fff;
        font-size: 15px;
      }
      .Adicionar {
        background: #00e38c;
        box-shadow: 0px 0px 3px #353535;
        border: none;
        width: 100px;
        height: 35px;
        border-radius: 2px;
        color: #fff;
        font-size: 15px;
      }
    }
  }
`;

export const Container2 = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .tster {
    background: red;
    max-width: 50%;
  }
`;
