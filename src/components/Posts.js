import React from "react";
// import "./posts.css";

const Posts = ({ username }) => {
  console.log(username);
  return (
    <div className="container">
      <div className="box">
        <div className="card">
          <div className="row">
            <div className="col-sm-3">
              <img
                src={username.avatar_url}
                className="card-img-top h-100"
                alt="Image"
              />
              {/* <a href={username.html_url} className="btn btn-primary">View Profile</a> */}
            </div>
            <div className="col-sm-8">
              <div className="card-body">
                <h5 className="card-title">{username.login}</h5>
                <p className="card-text">
                  Alice is a freelance web designer and developer based in
                  London. She is specialized in HTML5, CSS3, JavaScript,
                  Bootstrap, etc.
                </p>
                <a href={username.html_url} className="btn btn-primary">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
