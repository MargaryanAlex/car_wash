import React from 'react';
import '../error/error.css';
import error from 'src/resource/img/error.png'
import Button from '../button/Button.component';

const Error = () =>  {
    return (
        <div className='home-page'>
            <div className='left-side'>
                <h1 >Oops... an internal server error!</h1>
                <p style={{margin: '0'}}>Try refreshing page or try later. <br/>Our apologies.</p>
                <button className='reload'>Reload</button>
            </div>
            <div className='right-side'>
                <img src={error} alt="error" />
            </div>
      </div>
    )
  
}

export default Error;