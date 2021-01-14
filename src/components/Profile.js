import React, { useState, useEffect } from "react"
import DisplayTable from "./DisplayTable"

const Profile = ({ username }) => {
  const [userdata, setUserData] = useState({})
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const submitHandler = async username => {
      // e.preventDefault()
  
      const profile = await fetch(`https://api.github.com/users/${username}`)
      // https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting
      const profileJson = await profile.json()
      console.log(profileJson)
  
      const repositories = await fetch(profileJson.repos_url)
      const repoJson = await repositories.json()
      console.log(repoJson)
  
      if (profileJson) {
        setUserData(profileJson)
        setRepositories(repoJson)
      }
    }

    submitHandler(username)
  }, [])



  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <p>{userdata.login}</p>
          {/* <DisplayTable userdata={userdata} repositories={repositories} /> */}
        </div>
      </div>
    </>
  )
}
export default Profile