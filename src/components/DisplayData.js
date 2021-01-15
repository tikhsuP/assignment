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
                  className="image-style"
                  src={userData.avatar_url}
                  className="card-img-top h-100"
                  alt="Image"
                />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h5 className="card-heading center">{name}</h5>
                  {userData.bio && (
                    <p className="center">
                      <em>
                        <AccountCircleIcon /> {bio}
                      </em>
                    </p>
                  )}
                  <hr />
                  <div className="card-content">
                    <div className="flex-container">
                      <p className="">
                        <em>
                          <GitHubIcon /> {login}&nbsp;
                        </em>
                      </p>
                      {userData.location && (
                        <p className="">
                          <em>
                            <PinDropIcon /> {location}&nbsp;
                          </em>
                        </p>
                      )}
                      {userData.email && (
                        <p className="">
                          <em>
                            <EmailIcon /> {email}&nbsp;
                          </em>
                        </p>
                      )}
                      {userData.company && (
                        <p className="">
                          <em>
                            <BusinessIcon /> {company}&nbsp;
                          </em>
                        </p>
                      )}
                      <p className="center">
                        <em>Followers: {followers}</em>
                      </p>
                      <p className="center">
                        <em>Following: {following}</em>
                      </p>
                    </div>

                    {repositories && (
                      <>
                        <hr />
                        <div className="container horizontal-scrollable">
                          <p className="center repo">
                            <b>Repositories</b>
                          </p>
                          <div className="row text-center">
                            {repositories.map((repo) => (
                              <>
                                <div className="col-xs-4" key={repo.id}>
                                  <a
                                    className="repo-link"
                                    href={repo.html_url}
                                    target="_blank"
                                  >
                                    {repo.name}
                                  </a>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    <div className="center">
                      <p className="card-text"></p>
                      <a
                        href={html_url}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
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
