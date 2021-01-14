import React from "react";
import "./css/displayData.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import PinDropIcon from "@material-ui/icons/PinDrop";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import BusinessIcon from "@material-ui/icons/Business";

const DisplayData = ({ userData, repositories }) => {
  // Destructure Props
  const {
    avatar_url,
    name,
    login,
    location,
    email,
    company,
    bio,
    followers,
    following,
    html_url,
  } = userData;

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
                  <h5 className="card-title center">Name: {name}</h5>
                  <hr />

                  <p className="center">
                    <em>
                      <GitHubIcon /> {login}
                    </em>
                  </p>
                  {userData.location && (
                    <p className="center">
                      <em>
                        <PinDropIcon /> {location}
                      </em>
                    </p>
                  )}
                  {userData.email && (
                    <p className="center">
                      <em>
                        <EmailIcon /> {email}
                      </em>
                    </p>
                  )}
                  {userData.company && (
                    <p className="center">
                      <em>
                        <EmailIcon /> {company}
                      </em>
                    </p>
                  )}
                  {userData.bio && (
                    <p className="center">
                      <em>
                        <EmailIcon /> {bio}
                      </em>
                    </p>
                  )}
                  {/* <p className="center">
                    <em>Name: {followers}</em>
                  </p>
                  <p className="center">
                    <em>Name: {following}</em>
                  </p> */}

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
                  <a href={html_url} className="btn btn-primary">
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
