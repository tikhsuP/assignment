import React, { useState } from "react";
import Users from "./components/Users";
import Pagination from "./components/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import axios from "axios";
import logo from "./images/logo.png";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(-1);
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // useEffect(() => {
  const fetchPosts = async () => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${input}`
    );
    setPosts(res.data.items);
    setCount(res.data.total_count);
    // console.log(res.data.items.length)
  };

  // fetchPosts(input)
  // }, [])

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
