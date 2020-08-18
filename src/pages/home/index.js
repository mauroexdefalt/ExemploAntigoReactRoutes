import React, { Component  } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
   

    render() {
        return (
            <div className='container'> 
       <p>Bem vindo a Pagina Home</p>
       <Link to="/sobre">ir para sobre</Link> 
       
           <hr/>
            </div>        
        );
    }
}





export default Home;