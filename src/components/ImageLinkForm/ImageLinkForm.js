import React from 'react';
import './ImageLinkForm.css'


const  ImageLinkForm = ({ onInputChange , onButtonSubmit}) => {
    return (
        <div >
           <p className='f3'>
               {'This Magic Brain will detect faces in your pictures. Git it a try.'}
           </p>
           <div className='center'>
                <div className='center form pa4 br3 shadow-5 '>
                    <input className='f3 pa2 w-70 center' type = 'text'  onChange= {onInputChange} />
                    <button className='w-30 grow f5 link ph2 pv2 dib black bg-light-yellow' 
                        onClick= {onButtonSubmit}>
                        Detect</button>
                </div>
           </div>
        </div>
    );
}

export default ImageLinkForm;