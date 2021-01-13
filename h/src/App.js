import React, { useState, useEffect } from 'react'
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import SearchIcon from '@material-ui/icons/Search'
import { Button } from '@material-ui/core'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([]);
  // const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true)
      const res = await axios.get(`https://api.github.com/search/users?q=${input}`)
      setPosts(res.data.items)
      console.log(res.data.items)
      // setLoading(false)
    }

    fetchPosts()
  }, [input])

  const search = e => {
  //     e.preventDefault();

  //     dispatch({
  //         type: actionTypes.SET_SEARCH_TERM,
  //         term: input
  //     })

  //     // history.push('/search')
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>

      {/* Search Bar */}
      <form className="search">
            <div className="search-input">
                <input value={input} onChange={e => setInput(e.target.value)}></input>
                <SearchIcon className="search-icon"></SearchIcon>
            </div>
            {/* <Button type="submit" onClick={search} variant="outlined">Github Search</Button> */}
      </form>

      {/* Search Results */}
      <Posts posts={currentPosts} />

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App