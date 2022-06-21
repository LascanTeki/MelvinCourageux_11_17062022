import '../Style/Deroulant.css'
import React, { useState } from 'react';

function Deroulant(props) {

    let title = props.title
    let content = props.content
    var [clas, changeclass] = useState('Deroulant Close');

    //Roule et deroule element en changeant sa clase
    function roll() {
        if (clas==='Deroulant Open') {
            changeclass(clas = 'Deroulant Close');
        }
        else{
            changeclass(clas = 'Deroulant Open');
        }
    }

    return (
        
        <div className={clas}>
            <div className='title'><span>{title}</span><span className='roll' onClick={roll}>^</span></div>
            <div className='content'><span>{content}</span></div>
        </div>
    )
  }

  export default Deroulant