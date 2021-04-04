import React, { useState } from 'react';  // importorted usestate hook from react


const App = () => {
    //this is a functional component using state hooks
    const [newUsername, setNewUsername] = useState('');
    const [newMsg, setNewMsg] = useState('');
    const [chirps, setChirps] = useState([
        {
            username: 'Moe',
            message: 'Keep Laughing. As long as you are laughing you still have hope'
        },

        {
            username: 'Larry',
            message: 'If you have crazy friends you have everything'
        },

        {
            username: 'Curly',
            message: 'A simple job for simple people'
        }
    ]);

    /*this is how a state looks inside of a class component:
        this.state = {
            newUsername: '',
            newMsg: '',
            chirps: [{}, {}, {}]
        }

    */
  
    let myChirps = chirps.map((chirp, id) => {
        return (
            <React.Fragment key={id}>
                <div className="card m-4">
                    <div className="card-body">
                        <h5 className="card-title">{chirp.username}</h5>
                        <p className="card-text">{chirp.message}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    });

    let submitChirp = () => {
        let newChirp = {
            username: newUsername,
            message: newMsg
        }

        setChirps([...chirps, newChirp])
        emptyInputs()
    }

    let emptyInputs = () => {
        setNewUsername('')
        setNewMsg('')
    }

    return (
        <>
            <div className="row m-4">
             <h1> Chirper!</h1>
             <div className="col-2">
             <input value={newUsername} type="text" id="un-input" placeholder="Username" onChange={(e) => setNewUsername(e.target.value)}/>
            </div>
            <div className="col-2">
              <input value={newMsg} type="text" id="msg-input" placeholder="Whats up?" onChange={(e) => setNewMsg(e.target.value)}/>
            </div>
              <div className="col-2">
               <button className="btn btn-primary" onClick={submitChirp}> Submit Chirp</button>
                </div>
            </div>


            {myChirps}
        </>
    );
};






export default App;















// notes 
//line 6 actually using use state hook: useState(''), initial value inside () for this example empty string
//line 10 : to update state value in an input, inside of curly braces  " onchange={(e) => }"  e=event, e.target.value is getting input from the user
//    const [username, setUsername] = useState('')  //using the useState hook, enables username change when any user inputs their username, first input = what you want the state value to be names + function name that is going to update state value.
//equivalent to the this.state in class components , import the use state hook from react