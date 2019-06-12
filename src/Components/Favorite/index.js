import React , {Component} from 'react';
import './index.scss'
import {connect} from 'react-redux';
class Favorite extends Component {

    render(){
        console.log(this.props.Jokes)
        const jokes = this.props.savedJokes.map(elem => (
            <li className="favorite__list__item"><p>{elem}</p></li>
        ))
        return(
            <div className="favorite  card">
                <h3 className="card-tile">chuck's best jokes</h3>
                <ul className="favorite__list">
                    {jokes}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state =>(
        {
            savedJokes : state.Jokes
        }
    ) 
export default connect(mapStateToProps) (Favorite);
