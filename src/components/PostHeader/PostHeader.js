import logo from '../../assets/Search.svg'
import lupa from '../../assets/searchnormal.svg'
import profile from '../../assets/profile.svg'

import "./Estilo.css"
import React from 'react';

function PostHeader(){
    return(
        <>
        <header>
            <a>
                <img src={logo} className='IMGlogo'/>
            </a>

            <div>
                <a><img src={lupa} className='IMGlupa'/></a>
                <input className='search' placeholder='Clique para pesquisar'></input>
            </div>
            
            <a>
                <img src={profile} className='IMGprofile'/>
            </a>
            
        </header>
        </>
    )
}

export default PostHeader