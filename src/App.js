import React, { useState } from "react";
import Users from "./components/js/Users";
import Pagination from "./components/js/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import axios from "axios";
import logo from "./images/logo.png";
import { githubToken } from "../src/components/auth/keys";
import "./App.css";

export const BASE_URL = "https://api.github.com/search/users?q=";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(-1);
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    // Construct Search Query
    const searchQuery = `${BASE_URL}${input}`;
    // const res = await axios.get(searchQuery);
    const res = await axios({
      method: "get",
      url: searchQuery,
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setPosts(res.data.items);
        setCount(res.data.total_count);
        // callback(null, {
        //   statusCode: 200,
        //   body: JSON.stringify(res.data),
        // });
      })
      .catch((err) => {});
  };

  const search = (e) => {
    e.preventDefault();
    fetchPosts(input);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="parent-container">
      <div className="nav-bar">
        <img className="logo" src={logo} alt="Github Logo" />

        {/* Search Bar */}
        <form className="search">
          <div className="search-input">
            <SearchIcon className="search-icon"></SearchIcon>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </div>
          <div className="search-buttons">
            <Button type="submit" onClick={(e) => search(e)} variant="outlined">
              Github Search
            </Button>
          </div>
        </form>
      </div>
      <div className="results">
        {/* Pagination */}
        <Pagination
          searchTerm={input}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />

        {/* Search Results */}
        <Users
          users={currentPosts}
          count={count}
          allUsers={posts}
          searchTerm={input}
        />
      </div>
    </div>
  );
};

export default App;
