import React from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../static/css/bootstrap.min.css';
import '../static/css/main.css';
import PropTypes from "prop-types";

const SeeMovie = props =>{
  return (
        <div class="card mb-4 my-4">
        <h3 class="my-4" style={{textAlign:"center"}}>{props.title}</h3>
           <img class="card-img-top" src={props.img} alt="Card image cap"/><br></br>
           <span class="text-muted" style={{fontSize:"15px"}}>{props.year}</span>
           <div class="card-body">
             <p class="card-text" style={{fontSize:"14px"}}>{props.synopsis}</p>
             <a href="#" class="btn btn-primary">Read More &rarr;</a>
           </div>
        </div>

  );
}

SeeMovie.propTypes = {
  title :  PropTypes.string.isRequired,
  year : PropTypes.string.isRequired,
  synopsis : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired

}

export default SeeMovie;
