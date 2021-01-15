import React from "react";
import Profile from "./Profile";
import "../css/users.css";

const Users = ({ users, count, allUsers, searchTerm }) => {
  console.log(users);

  return (
    <div>
      {searchTerm && count > 0 && (
        <p className="total">
          <em>
            <b>{allUsers?.length}</b> results found for <b>{searchTerm}</b>.
          </em>
        </p>
      )}

      {searchTerm && count === 0 && (
        <p className="total">
          <em>
            <b>No</b> results found for <b>{searchTerm}</b>.
          </em>
        </p>
      )}

      {searchTerm &&
        users.map((item) => (
          <Profile username={item.login} />
          // <Posts username={item} />
        ))}
    </div>
  );
};

export default Users;
