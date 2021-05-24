import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "./styles";
import Table from "rc-table";
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
const Table2: React.FC = () => {
  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     width: 100,
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //     width: 100,
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //     width: 200,
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //     width: 200,
  //   },
  //   {
  //     title: "Operations",
  //     dataIndex: "",
  //     key: "operations",
  //     render: () => <a href="#">Delete</a>,
  //   },
  // ];
  // const data = [
  //   { name: "Jack", age: 28, address: "some where", key: "1" },
  //   { name: "Rose", age: 36, address: "some where", key: "2" },
  // ];

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
      {/* <Table columns={columns} data={data} /> */}
      {/* <div className="tablediv">
        <table className="content-table">
          <thead>
            <tr>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
              <th>
                <p>Emissão</p>
              </th>
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
      </div> */}
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
export default Table2;
