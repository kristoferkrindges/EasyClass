import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header';

function Profile() {
  let { username } = useParams();
  return (
    <>
        <Header></Header>
        <div>This is the profile page for {username}!</div>
    </>
  )
}

export default Profile