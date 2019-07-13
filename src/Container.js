import React, {Component} from 'react';
import Message from './Message'
import './App.css';
import axios from 'axios'


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas : [],
            text: ""
        }
    }

    onChange = (e) => {        
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleClick = (e) => {
        e.preventDefault();
        var data = this.state.datas
        data.push({"text": this.state.text, "position" : "right"})
        

        let url = `http://localhost:5000/parse?q=${this.state.text}`
        
        this.setState({text : "", datas:data})

        axios.get(url)
        .then(res => {
            var data = this.state.datas
            data.push({"text": res.text, "position" : "left"})
        })
    }


    render(){
        return (
            <div className="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="chat_window">
                                <ul class="messages">
                                    {this.state.datas.map((d) => {                        
                                        return (
                                            <Message teks={d.text} position={d.position}/>
                                        )
                                    })}
                                </ul>
                                <div class="bottom_wrapper clearfix">
                                    <div class="message_input_wrapper">
                                        <input id="msg_input" 
                                            class="message_input" 
                                            placeholder="Say Hi to begin chat..." 
                                            name="text"
                                            value={this.state.text}
                                            onChange={this.onChange.bind(this)}/>
                                    </div>
                                    <div class="send_message" onClick={this.handleClick.bind(this)}>
                                        <div class="text">Send</div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Container;