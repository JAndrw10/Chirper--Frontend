

import React, { useState } from 'react';

const App = () => {

    const [username, setuserName] = useState(''); // being filled in by user
    const [message, setMessage] = useState('');  // being filled in by user
    const [chirpmessage, setChirpMessage] = useState ([
        {
            username: 'Moe',
            message: 'Keep Laughing. As long as you are laughing you still have hope'
        },

        {
                username: 'Larry',
                message: 'If you have crazt friends you have everything'
        },

        {
            username: 'Curly',
            message: 'A simple job for simple people'
        }
    ]); // should display 


    // handles when the user puts in their user name 
    const handleuserNamechange = e => {
        setuserNameChange(e.target.value);
    }

    // handles message change by user
    const handlesetMessage = e =>{
        setmessage(e.target.value)
    }

    //handles message chirp display messages
    const handlechirpMessage = e => {
        setChirpMessage(e.target.value.display)
    }





    


return(
    <>
        <input value={username} onChange={e => setuserName(e.target.value)} />
        <input value={message} onChange={e => setMessage(e.target.value)} />
        <input value={chirpmessage} onChange={e => setChirpmessage(e.target.value)} />




    </>


);




}


export default App; 