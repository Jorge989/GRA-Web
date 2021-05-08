import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Container, Container2 } from "./styles";
import Header from "../components/Header";
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
      <Container>
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
export async function getStaticProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;
  return {
    props: { users: data },
  };
}
export default Home;
