import {useState} from 'react'

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState('')

    function save(){
        props.saveName(username)
        setShowInput(false)
    }
    if (showInput) {
        return <div className="name-picker">
            <input value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            <button onClick={save}>OK</button>
        </div>
    }

    return <div className="name-picker">
        <div className="username">{username}</div>
        <button onClick={()=> setShowInput(true)}>
            EDIT
        </button>
    </div>
}

export default NamePicker
