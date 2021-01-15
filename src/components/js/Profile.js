import React, { useState, useEffect } from "react";
import DisplayData from "./DisplayData";
import { clientId, clientSecret } from "../auth/keys";

export const BASE_URL = "https://api.github.com/users/";

const Profile = ({ username }) => {
  const [userData, setUserData] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async (username) => {
      // Construct Search Query
      const searchQuery = `${BASE_URL}${username}?clientId=${clientId}&clientSecret=${clientSecret}`;
      const profile = await fetch(searchQuery);
      const profileJson = await profile.json();

      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();

      if (profileJson) {
        setUserData(profileJson);
        setRepositories(repoJson);
      }
    };

    fetchData(username);
  }, [username]);

  return (
    <>
      <DisplayData userData={userData} repositories={repositories} />
    </>
  );
};
export default Profile;
