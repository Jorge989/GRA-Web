import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./styles";
import Link from "next/link";
// interface User {
//   name: string;
//   email: number;
//   id: number;
//   address: {
//     street: string;
//     city: string;
//     zipcode: string;
//   };
// }
const Table: React.FC = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;
    setUsers(data);
  };
  console.log(users);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Container>
      <table className="content-table">
        <thead>
          <tr>
            <th>Emissão</th>
            <th>Chave de Acesso</th>
            <th>Número</th>
            <th>Série</th>
            <th>CNPJ do Emitente</th>
            <th>Fornecedor</th>
            <th>Emissão</th>
            <th>Chave de Acesso</th>
            <th>Número</th>
            <th>Série</th>
            <th>CNPJ do Emitente</th>
            <th>Fornecedor</th>
            <th>Número</th>
            <th>Série</th>
            <th>CNPJ do Emitente</th>
            <th>Fornecedor</th>
          </tr>
        </thead>
        {users.map((users) => (
          // <Link href="/profile/[id]" as={`/profile/${users.id}`}>
          <tbody>
            <tr>
              <td>{users.address.street}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.address.street}</td>
              <td>{users.address.street}</td>
              <td>{users.address.street}</td>
              <td>{users.address.street}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.address.street}</td>
              <td>{users.address.street}</td>
              <td>{users.address.street}</td>
              <td>{users.address.street}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.address.street}</td>
            </tr>
          </tbody>
          // </Link>
        ))}
      </table>
    </Container>
  );
};
export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;
  return {
    props: { users: data },
  };
}
export default Table;
