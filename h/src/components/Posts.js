import React from 'react';

const Posts = ({ posts }) => {
  // if (loading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <ul className='list-group mb-4'>
      {posts.map(item => (
        <li key={item.id} className='list-group-item'>
          <div key={item.id} className="card">
              <img src={item.avatar_url} alt="Avatar" />
              <h1 className="name">{item.login}</h1>
              <a href={item.html_url} class="btn" target="_blank">Visit Profile</a>
            </div>
        </li>
      ))}
    </ul>
  )
}

export default Posts;
