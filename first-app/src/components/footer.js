import React, { Component} from 'react';

class Footer extends Component{
    changed(e) {
        console.log('changed')
    }
   
    render() {
        return (
            <div>
                <h2 onClick={this.props.myalert}>
                    {this.props.trademark} 
                </h2>
                <input  onChange={this.changed} />
            </div>
        )
          
        
    }
}

export default Footer;