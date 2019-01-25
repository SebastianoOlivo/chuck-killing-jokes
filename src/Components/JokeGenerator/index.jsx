import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.scss'
import chuck from '../../assets/images/chuck.png'

class JokeGenerator extends Component{
    constructor(props){
        super(props);
        this.state = {
            joke : 'test'
        }
    }


    componentDidMount(){
        this.getAJoke();
    }
    getAJoke(){
        fetch('https://api.chucknorris.io/jokes/random')
        .then(result => result.json())
        .then(data => {
            this.setState({
                joke : data.value
            })
        })

    }

    render(){
        return(
                <div className="joke-generator card">
                <img className="joke-generator__image" src={chuck} alt=""/>
                    <p className="joke-generator__content">{this.state.joke}</p>
                    <div className="btn-container">
                        <button  className="joke-generator__button cta" onClick={() => this.getAJoke()} >C'mon !</button>
                        <button  className="joke-generator__button cta" >save it !</button>
                    </div>
                </div>
        )
    }
}



export default JokeGenerator;


