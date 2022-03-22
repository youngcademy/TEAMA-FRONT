import React from "react";
import axios from "axios";

interface IUsersProps {
  name: string;
  email: string;
}

const Login = ({ users }: IUsersProps) => {
  return <div>Login</div>;
};

Login.getInitalProps = async () => {
  const { data: users } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("data loaded");
  return { users };
};

export default Login;
