import React from 'react';
import { useUser } from '../Context/UserContextProvider';

const Profile = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Password: {user.Password}</p>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
}

export default Profile