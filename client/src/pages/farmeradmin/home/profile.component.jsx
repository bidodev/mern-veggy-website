import React, { useState } from 'react';

/* Components */
import HeaderFarmerProfile from 'pages/farmeradmin/home/header/header.profile';
import GalleryList from 'pages/farmeradmin/home/gallery/gallery.list';

/* Styles */
import './profile.styles.scss';

const ProfileAdmin = ({ photo, name }) => {

  return (
    <section className="panel-profile">
      <div className="panel-profile__wrapper">
        <HeaderFarmerProfile farmerPhoto={photo} />

        <div className="panel-profile__biography">
          <div className="panel-profile__biography__info">Welcome {name}</div>
          <div className="panel-profile__biography__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit natus suscipit
            excepturi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit natus
            suscipit excepturi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit natus
            suscipit excepturi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit
            natus suscipit excepturi!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse sit
            natus suscipit excepturi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, fugiat esse
            sit natus suscipit excepturi!
          </div>
        </div>

        <hr />
        <GalleryList />
        <hr />
      </div>
    </section>
  );
};

export default ProfileAdmin;
