import React, { useState, useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';
import { useSelector } from 'react-redux';

const ChangeColor = () => {
    const [color, setColor] = useState(""); 
    const colorSelector = useSelector(state => state.theme.value); 
    const dispatch = useDispatch(); 

    useEffect( () => { 
        console.log({ colorSelector }); 
    }, [colorSelector]); 

    useEffect( () => { 
        console.log({ color }); 
    }, [color]); 

  return (
    <div>
        <input 
            type = 'text' 
            onChange = { (e) => setColor(e.target.value)} 
        /> 
        <button onClick={ () => { dispatch(changeColor(color))}}>Change Color</button>
    </div>
  )
}

export default ChangeColor; 