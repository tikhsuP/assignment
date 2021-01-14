import React from "react";
import "./css/displayData.css";

const DisplayData = ({ userData, repositories }) => {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="card">
            <div className="row">
              <div className="col-sm-3">
                <img
                  src={userData.avatar_url}
                  className="card-img-top h-100"
                  alt="Image"
                />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h5 className="card-title">{userData.name}</h5>
                  <em>{userData.login}</em>
                  <em>{userData.location}</em>
                  <em>{userData.bio}</em>
                  <em>{userData.location}</em>
                  <em>{userData.location}</em>
                  {/* {repositories.map((repo) => (
                    <div className="ui relaxed divided list" key={repo.name}>
                      <div className="item">
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                          <a
                            href={repo.html_url}
                            className="header"
                            target="_blank"
                          >
                            {repo.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))} */}
                  <p className="card-text"></p>
                  <a href={userData.html_url} className="btn btn-primary">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayData;
