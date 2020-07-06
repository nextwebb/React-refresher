import React, { Component} from 'react';

class Footer extends Component{

    state = {
        name: 'nextwebb'
    }

    changed = e => {
        this.setState({name: e.target.value})
        console.log(this.state.name);
    }
   
    render() {
        return (
            <div>
                <h2 onClick={this.props.myalert}>
                    {this.props.trademark} 
                </h2>
                <input value={this.state.name} onChange={this.changed} />
            </div>
        )
          
        
    }
}

export default Footer;