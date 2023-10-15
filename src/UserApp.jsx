import { useState } from "react";
import { UserList } from "./componetns/UserList";
export const UserApp = () => {
  const [endPoint, setEndPoint] = useState("users");
  const handleFetch = () => {
    setEndPoint("comments");
  };
  return (
    <>
      <h1>Listado de usuario</h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>aqui se llama la API</button>
    </>
  );
};
