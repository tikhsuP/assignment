import React, { useState, useEffect } from "react";
import DisplayData from "./DisplayData";
import { BASE_URL, CLIENT_ID, CLIENT_SECRET } from "./auth/keys";

const Profile = ({ username }) => {
  const [userData, setUserData] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async (username) => {
      // Construct Search Query
      const searchQuery = `${BASE_URL}${username}?clientId=${CLIENT_ID}&clientSecret=${CLIENT_SECRET}`;
      const profile = await fetch(searchQuery);
      const profileJson = await profile.json();
      console.log(profileJson);

      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      console.log(repoJson);

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
