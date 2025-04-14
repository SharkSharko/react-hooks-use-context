import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import Interests from './Interests';

function Profile() {
  const { user } = useContext(UserContext); // Access user from context

  if (!user) return <h2>Please Log In to view your profile</h2>;

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests />
    </div>
  );
}

export default Profile;


