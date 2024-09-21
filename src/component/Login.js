
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setToken }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/login', { username, password });
//             console.log(response.data); // Log the response
//             setToken(response.data.token); // Set the token
//             setUsername('');
//             setPassword('');
//             navigate('/home'); // Navigate to the home page
//         } catch (error) {
//             console.error(error); // Log the error for debugging
//             alert("Invalid credentials");
//         }
//     };
    

//     return (
//         <form onSubmit={handleLogin}>
//             <input 
//                 type="text" 
//                 placeholder="Username" 
//                 value={username} 
//                 onChange={e => setUsername(e.target.value)} 
//             />
//             <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={e => setPassword(e.target.value)} 
//             />
//             <button className="submit" type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar'; // Import Snackbar
import MuiAlert from '@mui/material/Alert'; // Import Alert for Snackbar
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(''); // 'success' or 'error'
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://outletsp.onrender.com/login', { username, password });
            console.log(response.data);
            setToken(response.data.token);
            setUsername('');
            setPassword('');
            navigate('/home');
        } catch (error) {
            console.error(error);
            setSnackbarMessage("Invalid credentials");
            setSnackbarSeverity('error'); // Set severity to 'error'
            setSnackbarOpen(true); // Open the Snackbar
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <div style={styles.container}>
            <form 
                onSubmit={handleLogin} 
                style={{
                    ...styles.form,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <h1>Login <span style={{color:'#F99000'}}>Outlet</span></h1>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    style={styles.input}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    style={styles.input}
                />
                <button className="submit" type="submit" style={styles.button}>Login</button>
                <p>Don't have an account? <a href="/signup">Signup now</a></p>
            </form>

            <Snackbar 
                open={snackbarOpen} 
                autoHideDuration={6000} 
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Corrected to 'bottom'
            >
                <MuiAlert 
                    onClose={handleSnackbarClose} 
                    severity={snackbarSeverity} 
                    sx={{ 
                        width: '100%', 
                        backgroundColor: snackbarSeverity === 'success' ? '#00B74A' : '#F44336', // Change color based on severity
                        color: 'white' // Text color
                    }} 
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // margin: '-100px',
        backgroundColor: '#f0f0f0',
    },
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    input: {
        width: '84%',
        padding: '10px',
        margin: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '92%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Login;
