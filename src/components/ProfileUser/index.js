import React from 'react';
import AvatarProfile from '../../objects/AvatarProfile';
import Profile from '../../img/profile.jpeg';

const ProfileUser = () => {
  return ( 
    <dl>
      <dd>
        <AvatarProfile src={Profile} />
      </dd>
      <dt> Rodrigo Reis </dt>
      <dd>Desenvolvedor Front-end com sólida experiência em e-commerce. Fascinado por VanillaJS. Expert em acessibilidade e entusiasta UX/UI.</dd>
    </dl>
  );
}
 
export default ProfileUser;