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
        const animals = ['cat', 'dog', 'horse'];
        return (
            <div>
               { animals.map((animal)=> {
                   return (
                       <div key={animal}>
                            <h1>{animal} </h1>
                            <h1>{animal} </h1>
                       </div>
                    
                   ) 
               }) }
            </div>
        )
          
        
    }
}

export default Footer;