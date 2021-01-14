import React from "react";
import Profile from "./Profile";
import Posts from "./Posts";

const Users = ({ users, count, allUsers, searchTerm }) => {
  // console.log(users)

  return (
    <div>
      {searchTerm && count > 0 && (
        <p className="total">
          <em>
            <b>{allUsers?.length}</b> results found for <b>{searchTerm}</b>.
          </em>
        </p>
      )}

      {searchTerm && count == 0 && (
        <p className="total">
          <em>
            <b>No</b> results found for <b>{searchTerm}</b>.
          </em>
        </p>
      )}

      {users.map((item) => (
        // <Profile username={item.login} />
        <Posts username={item} />
      ))}
    </div>
  );
};

export default Users;
