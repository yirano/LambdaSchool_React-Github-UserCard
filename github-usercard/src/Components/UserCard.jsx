import React from 'react'

export default function UserCard(props) {
  console.log("UserCard -> props", props)
  const {user} = props;
  return (

    <div>
      <h3>{user.login}</h3>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  )
}
