import { useDispatch } from 'react-redux'
import { useState} from 'react';

function ElementForm(){
    const dispatch = useDispatch();
    const [elementInput, setElementInput] = useState('');

const onElementSubmit = () => {
console.log(elementInput);
dispatch({
    type: 'ADD_ELEMENT',
    payload: elementInput
})
}
    return(
        <div>
        <input 
        value={elementInput}
        onChange={(event)=> {setElementInput(event.target.value)}}
        placeholder="Add an element!"
        />
        <button onClick={onElementSubmit}>Add a element!</button>
    </div>
    )
}

export default ElementForm;