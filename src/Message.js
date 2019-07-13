import React, {Component} from 'react';
import './App.css';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Message extends Component {

    render() {
        const { teks, position } = this.props;

        return (
            
            <li className={"message " + position + "  appeared"}>
                <div class="avatar"></div>
                <div class="text_wrapper">
                    <div class="text">{teks}</div>
                </div>
            </li>
            
        
        )
    }

}

export default Message;