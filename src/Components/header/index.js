import React, { Component  } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
   

    render() {
        return (
            <div className='container'> 
           header meu projeto
           <Link to='/sobre'>sobre</Link>
           <hr/>
            </div>        
        );
    }
}





export default Header;