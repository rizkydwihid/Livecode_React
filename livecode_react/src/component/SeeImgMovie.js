import React from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../static/css/bootstrap.min.css';
import '../static/css/main.css';
import PropTypes from "prop-types";

const SeeImgMovie = props =>{
  return (
    <div class="card mb-4 my-4">
         <img class="card-img-top" src={props.img} alt="Card image cap"/>
    </div>
  );
}

SeeImgMovie.propTypes = {
  img : PropTypes.string.isRequired

}

export default SeeImgMovie;
