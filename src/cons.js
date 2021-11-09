import React, { Component } from 'react';
class Cons extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            data : "My name is user"
        }
        this.handleEvent = this.handleEvent.bind(this);

    }
    handleEvent()
    {
        console.log(this.state.data);
    }
    

render()
{
    return(
        <div>
            <input type="text" value={this.state.data} />
            <br></br>
            <button onClick={this.handleEvent}> Please Click</button>
        </div>

    );
}
}
export default Cons;