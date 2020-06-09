import React, {Component} from 'react';
import MovieApp from './MovieApp.js';
import SeriesApp from './SeriesApp.js';
import './MainApp.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Scroll from '../components/Scroll.js'

// Main application

class MainApp extends Component{
    constructor() {
        super();
        this.state = {
            navPage: 'titleScreen'
        }
    }

changeToMovies= (event) => {
    this.setState({navPage: 'movie'});
}
changeToShows = (event) => {
    this.setState({navPage: 'series'});
}

    render() {
        // returns Movie JSX
        if(this.state.navPage === 'movie') {
            return (
                <MovieApp/> 
            )
        }
        // returns Series JSX
        else if(this.state.navPage === 'series') {
            return (
                <SeriesApp/> 
            )
        }
        else{
            return(
                <div> 
                    <section> 
                        <Header/> 
                    </section> 
                    <Scroll> 
                        <section className ='buttonSection'>
                            <button onClick={this.changeToMovies} className= 'ma4 eachButton'>
                            MOVIES
                            </button>                    
                            <button onClick={this.changeToShows} className= 'ma4'>
                            SERIES
                            </button>
                        </section> 
                    </Scroll> 

                    <section>
                        <Footer/> 
                    </section> 
                </div> 
            )
        }
    }

}

export default MainApp;