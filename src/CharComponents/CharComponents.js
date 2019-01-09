import React from 'react';

const style = {
    display : 'inline-block',
    padding : '16px',
    textAlign : 'center',
    margin: '16px',
    border: '1px solid',
}

const charComponents = (props) =>{
    return(
        <div style={style} onClick={props.click}>
            {props.char}
        </div>
    )
}

export default charComponents