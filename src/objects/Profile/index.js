import React from 'react';
import './styles.css';

const Profile = ({ photo }) => {
  return (  
    <img  className="photo" src={photo} />
  );
}
 
export default Profile;