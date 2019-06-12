import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.scss'
import chuck from '../../assets/images/chuck.png'
import { bindActionCreators } from 'redux';
import {saveJokeAction} from '../../Actions/index'

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

    saveJoke(){
        this.props.saveJokeAction(this.state.joke)
    }

    render(){
        return(
                <div className="joke-generator card">
                <img className="joke-generator__image" src={chuck} alt=""/>
                    <p className="joke-generator__content">{this.state.joke}</p>
                    <div className="btn-container">
                        <button  className="joke-generator__button cta" onClick={() => this.getAJoke()} >C'mon !</button>
                        <button  className="joke-generator__button cta" onClick={() => this.saveJoke()} >save it !</button>
                    </div>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({saveJokeAction}, dispatch)



export default connect(null, mapDispatchToProps)(JokeGenerator);


