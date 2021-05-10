import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  .content-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 3px 3px 0px 0px;
    overflow: hidden;
    margin-left: 10px;
    width: 97%;
    flex-shrink: 1;

    overflow: scroll;
    cursor: pointer;
  }
  .content-table thead tr {
    background-color: #1c496a;
    color: #fff;
    padding-left: 20px;
    text-align: left;
    border-radius: 3px 3px 0px 0px;
    overflow-x: auto;
  }
  .contente-table th,
  .contente-table td {
    border-radius: 5%;

    overflow-x: auto;
  }
  .content-table tbody tr {
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
    box-shadow: 0px 4px 8px;
    border-radius: 20px;
    border-radius: 5%;

    overflow-x: auto;
  }
`;
