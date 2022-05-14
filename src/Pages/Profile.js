import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  let { username } = useParams();
  return (
    <div>This is the profile page for {username}!</div>
  )
}

export default Profile