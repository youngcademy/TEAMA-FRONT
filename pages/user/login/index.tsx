import React, { useState } from "react";
import axios from "axios";

interface IUsersProps {
  users: IUserProps[];
}

interface IUserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Login = ({ users }: IUsersProps) => {
  const [Id, setID] = useState("");
  const [Password, setPassword] = useState("");

  const onChangeId = (e: React.FormEvent<HTMLInputElement>) => {
    setID(e.currentTarget.value);
  };
  const onChangePW = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmit = () => {
    console.log(Id, Password);
  };
  return (
    <div>
      {users.map((users, index) => (
        <h3 key={index}>{users.name}</h3>
      ))}
      <input onChange={onChangeId} value={Id} />
      <input type={"password"} onChange={onChangePW} value={Password} />
      <button onClick={onSubmit}>전송</button>
    </div>
  );
};

Login.getInitialProps = async () => {
  const { data: users } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(users);
  return { users };
};

export default Login;
