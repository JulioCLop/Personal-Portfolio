import React, { Component } from 'react';
import './Card.style.css';




class Card extends Component{

  
    render() {
        const { title, text, desc } = this.props;
        
        return (
            <div className="Card-Container">
                <div className="Card-Body">
                    <div className="Title">
                        <h1>{ title }</h1>
                    </div>
                    <div className="Card-Text">
                        <h5>{ text }</h5>
                    </div>
                    <div>
                        <small className="Card-Description">
                            { desc }
                        </small>
                    </div>
              </div>
            </div>
        )
    }
}

export default Card;