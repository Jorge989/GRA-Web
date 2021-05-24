import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 1350px;
  max-height: 1105px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;

  cursor: pointer;
  .content-table {
    border-collapse: collapse;
    margin: 50px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 3px 3px 0px 0px;
    overflow: hidden;
    margin-left: 10px;
    width: 100%;
    flex-shrink: 1;
  }
  .content-table thead tr {
    height: 40px;

    cursor: pointer;
    background-color: #1c496a;
    color: #fff;
    padding-left: 100px;

    border-radius: 3px 3px 0px 0px;
  }
  tr {
  }
  th {
    p {
      background: green;
      width: 150px;
    }
  }
  .contente-table th,
  .contente-table td {
    border-radius: 5%;
    width: 100px;
    background: red;
    overflow-x: auto;
  }
  .content-table tbody tr {
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
    box-shadow: 0px 4px 8px;
    width: 100px;
    border-radius: 20px;
    border-radius: 5%;

    overflow-x: auto;
  }
`;
