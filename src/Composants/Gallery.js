import '../Style/Gallery.css'
import React, { useState } from 'react';

function Gallery(props) {

    let newlist = props.newlist;


    var [numb, number] = useState(0);


    function More() {
        if (newlist[0].pictures[numb + 1] !== undefined) {
            number(numb + 1);
        }
        else {
            number(numb = 0)
        }
    }
    function Less() {
        if (newlist[0].pictures[numb - 1] !== undefined) {
            number(numb - 1);
        }
        else {
            number(numb = newlist[0].pictures.length - 1)
        }
    }

    if (newlist[0].pictures.length !== 1) {
        return (
            <div className='Gallery'>
                <div className='number'>{numb+1}/{newlist[0].pictures.length}</div><div className='arrow' onClick={Less}>&lt;</div><div className='arrow-left' onClick={More}>&gt;</div><img src={newlist[0].pictures[numb]} alt={newlist[0].title} />
            </div>
        )
    }
    else{
    return (
        <div className='Gallery'>
            <img src={newlist[0].pictures[numb]} alt={newlist[0].title} />
        </div>
    )}
}

export default Gallery