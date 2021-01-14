import React from "react";

const DisplayTable = ({ userdata, repositories }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Location</th>
          <th>Bio</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{userdata.login}</td>
          <td>
            {!userdata.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={userdata.avatar_url}
                alt={userdata.avatar_url}
              />
            )}
          </td>
          <td>{userdata.location}</td>
          <td>{userdata.bio}</td>
          <td>
            {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;