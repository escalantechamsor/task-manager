import React, { createContext, useContext, useEffect, useState } from "react";

const contextData = createContext();

export function useContextData() {
  return useContext(contextData);
}

export function ContextPosts({ children }) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([])
   const users = "https://jsonplaceholder.typicode.com/users";
  const url = "https://jsonplaceholder.typicode.com/posts";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };
  const getUsers = async () => {
    const response = await fetch(users);
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getData();
    getUsers()
  }, []);

  return <contextData.Provider value={user}>{children}</contextData.Provider>;
}
