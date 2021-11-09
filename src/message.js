import react, { Component } from 'react';
class Message extends Component
{
    constructor()
    {
        super()

        this.state = {
            message : 'Welcome user'
        }
    }

    changeMessage(){
        this.setState({
            message : 'thank you for Click on Button'
        })

    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message} </h1>
                <button onClick= {() => this.changeMessage()}>clickForWelcome</button>
            </div>
        )
    }




} 



export default Message