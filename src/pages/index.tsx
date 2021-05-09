import { useEffect, useState } from "react";
// import axios from "axios";
import Link from "next/link";
import { FiFile, FiFilter, FiPlus } from "react-icons/fi";
import { Container, Container2 } from "./styles";
import Header from "../components/Header";
import Table from "../components/Table";
function Home({ users }) {
  //   const [users, setUsers] = useState([]);

  //   const fetchUsers = async () => {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await response.data;
  //     setUsers(data);
  //   };
  //   console.log(users);
  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);
  return (
    <Container2>
      <Header />
      <Container id="main-container">
        <div className="cabecalho">
          <p>NF-e</p>
          <div className="botoes">
            <button className="Filtrar">
              <FiFilter />
              Filtrar
            </button>
            <button className="Adicionar">
              <FiPlus />
              Adicionar
            </button>
          </div>
        </div>
        <Table />
        <div className="tster">
          <p>oioiioioio</p>
        </div>
        {/* <div>OI</div>
        <div>
          {users.map((users) => (
            <Link href="/profile/[id]" as={`/profile/${users.id}`}>
              <a>{users.name}</a>
            </Link>
          ))}
        </div> */}
      </Container>
    </Container2>
  );
}

// export async function getServerSideProps(context) {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const data = await response.data;
//   return {
//     props: { users: data },
//   };
// }

export default Home;
