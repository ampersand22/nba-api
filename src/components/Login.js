import React, {useState} from 'react'
import axios from 'axios'

const Login = (props) => {
    const [toggleLogin, setToggleLogin] = useState(true)
    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [toggleLogout, setToggleLogout] = useState(false)
    // const [currentUser, setCurrentUser] = useState({})
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')

    const handleCreateUser = (event) => {
        event.preventDefault()
        event.currentTarget.reset()
        let userObj = {
            email,
            password,
            username,
            location,
        }
        setEmail('')
        setPassword('')
        axios.post('https://breeze-back.herokuapp.com/api/users', userObj).then((response) => {
            if(response.data.email){
                console.log(response);
                setToggleError(false)
                setErrorMessage('')
                props.setCurrentUser(response.data)
                handleToggleLogout()
                props.toggleShowLogin()
            } else {
                setErrorMessage(response.data)
                setToggleError(true)
            }
        })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        event.currentTarget.reset()
        let userObj = {
            email: email,
            password: password,
            username: username,
            location: location
        }
        setEmail('')
        setPassword('')
        axios.put(`https://breeze-back.herokuapp.com/api/users/{userid}`, userObj).then((response) => {
            if(response.data.email){
                console.log(response);
                setToggleError(false)
                setErrorMessage('')
                props.setCurrentUser(response.data)
                handleToggleLogout()
                props.toggleShowLogin()
            } else {
                console.log(response);
                setToggleError(true)
                setErrorMessage(response.data)
            }
        })
    }
    
    const handleLogout = () => {
        props.setCurrentUser({})
        handleToggleLogout()
    }
    
    const handleToggleForm = () => {
        setToggleError(false)
        if(toggleLogin === true) {
            setToggleLogin(false)
        } else {
            setToggleLogin(true)
        }
    }
    
    const handleToggleLogout = () => {
        if(toggleLogout) {
            setToggleLogout(false)
        } else {
            setToggleLogout(true)
        }
    }

// overlay is the manually made model, find the z-index and put it on the css

    return (
        
        <div className='overlay'>
            <div className="add-form-container">
                <div className="add-form-header">
                    <button onClick={props.toggleShowLogin} className='close-add-button'>
                                <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z"
                                        fill="white"
                                    />
                                </svg>
                    </button>
                </div>
                    <h4>Current User</h4>
                    <form onSubmit={handleLogin} className='add-form'>
                        <label htmlFor="email">Email: </label>
                        <input type='text' placeholder='email' className='add-input' onChange={(event)=> {setEmail(event.target.value)}}/>
                        <label htmlFor="password">Password: </label>
                        <input type='password' placeholder='password' className='add-input' onChange={(event)=> {setPassword(event.target.value)}}/>
                        <label htmlFor="username">Username: </label>
                        <input type='text' placeholder='username' className='add-input' onChange={(event)=> {setUsername(event.target.value)}}/>
                        <label htmlFor="location">Location: </label>
                        <input type='text' placeholder='location' className='add-input' onChange={(event)=> {setLocation(event.target.value)}}/>
                        {toggleError ?
                        <h5 className='errorMsg'>{errorMessage}</h5>
                        :
                        null
                        }
                        <input type='submit' value='Login'  className='submitBtn btn btn-outline-primary'/>
                    </form>
                    {/* New User Registers here */}
                    <h4>New User? Register Here:</h4>
                        <form onSubmit={handleCreateUser} className='add-form'>
                        <input type='text' placeholder='email' className='add-input' onChange={(event)=> {setEmail(event.target.value)}}/>
                        <input type='password' placeholder='password' className='add-input' onChange={(event)=> {setPassword(event.target.value)}}/>
                        <input type='text' placeholder='username' className='add-input' onChange={(event)=> {setUsername(event.target.value)}}/>
                        <input type='text' placeholder='location' className='add-input' onChange={(event)=> {setLocation(event.target.value)}}/>
                        {toggleError ?
                            <h5 className='errorMsg'>{errorMessage}</h5>
                            :
                            null
                        }
                        <input type='submit' value='Register' className='submitBtn btn btn-outline-primary'/>
                    </form>
                
            

                </div>
        </div>
        
        
        )
    }
    
export default Login