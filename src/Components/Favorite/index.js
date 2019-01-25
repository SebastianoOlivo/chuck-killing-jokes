import React , {Component} from 'react';
import './index.scss'
class Favorite extends Component {

    constructor(props){
        super(props);
        this.state= {
            savedJokes:['test']
        }
    }

    render(){
        const jokes = this.state.savedJokes.map(elem => (
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


export default Favorite;