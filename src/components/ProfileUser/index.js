import React from 'react';
import './styles.css';

import Github from '../../img/github-icon.png';
import Facebook from '../../img/facebook-icon.png';
import Linkedin from '../../img/linkedin-icon.png';
import Twitter from '../../img/twitter-icon.png';
import Instagram from '../../img/instagram-icon.png';

import AvatarProfile from '../../objects/AvatarProfile';
import Profile from '../../img/profile.jpeg';
import IconSocial from '../../objects/IconSocial';

const ProfileUser = () => {
  return ( 
    <dl className="profile-user">
      <dd className="avatar">
        <AvatarProfile src={Profile} />
      </dd>
      <dt className="title"> Rodrigo Reis </dt>
      <dd className="description"> Desenvolvedor Front-end com sólida experiência em e-commerce. Fascinado por VanillaJS. Expert em acessibilidade e entusiasta UX/UI.</dd>
      <dd className="socials">
        <IconSocial src={Github} alt= "logo do Github" />
        <IconSocial src={Facebook} alt= "logo do Facebook" />
        <IconSocial src={Linkedin} alt= "logo do Likedin" />
        <IconSocial src={Twitter} alt= "logo do Twitter" />
        <IconSocial src={Instagram} alt= "logo do Instagram" />
      </dd>
    </dl>
  );
};
 
export default ProfileUser;