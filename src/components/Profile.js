import React, { useState, useEffect } from "react";
import DisplayData from "./DisplayData";

const Profile = ({ username }) => {
  const [userData, setUserData] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchData = async (username) => {
      const profile = await fetch();
      // `https://api.github.com/users/${username}&clientId=13d7edc5dea42d4d53ef`
      // https://api.github.com/users/${username}&clientId=13d7edc5dea42d4d53ef&clientSecret=3180015fcefb0ff85a17d6849501a2d26f010869
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
