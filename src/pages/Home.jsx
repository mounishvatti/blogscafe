import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import Landing from "./Landing";
import Landing2 from "./Landing2";
import Landing3 from "./Landing3";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0 && authStatus === false) {
    return (
      <>
        <Landing />
      </>
    );
  } else if (posts.length === 0 && authStatus === true) {
    return (
      <>
        <Landing2 />
      </>
    );
  }
  return (
    <>
      <Landing3 />
    </>
  );
}

export default Home;
