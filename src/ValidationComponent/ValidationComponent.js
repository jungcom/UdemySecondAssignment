import React from 'react';

const validationComponent = (props) =>{
    var text = null;

    if (props.length > 8){
        text = (
            <div>
                <p>Text Too Long!</p>
            </div>
        )
    } else if (props.length < 3){
        text = (
            <div>
                <p>Text Too Short!</p>
            </div>
        )
    }
    
    return(text)
}

export default validationComponent