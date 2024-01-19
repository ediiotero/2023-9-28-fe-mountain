import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

import moviePoster from '../images/movies.jpg'

const data = [
    {
        id: 1,
        title: 'The Batman',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat?'
    },
    {
        id: 2,
        title: 'Top Gun',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat?'
    },
    {
        id: 3,
        title: 'Lightyear',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat?'
    },
    {
        id: 4,
        title: 'Jurassic Park',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat?'
    },
]

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container-fluid">
            <img src={moviePoster} alt="" style={{minWidth: '100%', height: '15rem'}}/>
            <p className="post-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos, perferendis obcaecati maxime distinctio amet voluptatum aliquid dolores placeat? Quos ut, totam numquam repellat dolor, temporibus quam qui voluptatem laboriosam voluptate exercitationem nulla repudiandae ducimus. Ratione iure quasi dicta nostrum?
            </p>
            <div className="row">
                {data.map(movie => <Card key={movie.id} className="col-6" title={movie.title} text={movie.post}/>)}
            </div>
        </main>
        <Footer copy="Movie App 2024"/>
      </>
    );
  }
}
