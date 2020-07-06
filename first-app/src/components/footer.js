import React, { Component} from 'react';

class Footer extends Component{

    state = {
        name: '',
        age: 10,
        isLogin:false
    }

    componentDidMount() {
        this.setState({name: 'my name'})
    }
   

    changed = e => {
        this.setState({name: e.target.value})
        console.log(this.state.name);
    }
   
    render() {
        return (
            <div>
               

            { this.state.isLogin ? (
                    <React.Fragment>
                        <h2 onClick={this.props.myalert}>
                            {this.props.trademark} 
                        </h2>
                        <input value={this.state.name} onChange={this.changed}/>
                    </React.Fragment>
                ) : (
                    <React.Fragment>  
                        <h2> You can't see this content </h2>
                        <h2> You must be logged in </h2>
                    </React.Fragment>
                )  
            }
            </div>
        )
          
        
    }
}

export default Footer;