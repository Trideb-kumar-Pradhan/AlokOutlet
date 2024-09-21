
// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [deptname, setDeptname] = useState('');
//     const [password, setPassword] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8000/signup', { username, password, deptname });
//             setSuccessMessage("Signup successful! You can now log in.");
//             setUsername('');
//             setPassword('');
//             setDeptname('');
//         } catch (error) {
//             console.error('Signup error:', error.response ? error.response.data : error.message);
//             const errorMessage = error.response?.data?.message || "Signup failed. Please try again.";
//             setSuccessMessage(errorMessage);
//         }
//     };
    
    

//     return (
//         <div>
//             <form onSubmit={handleSignup}>
//                 <input 
//                     type="text" 
//                     placeholder="Dept" 
//                     value={deptname} 
//                     onChange={e => setDeptname(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Username" 
//                     value={username} 
//                     onChange={e => setUsername(e.target.value)} 
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={e => setPassword(e.target.value)} 
//                 />
//                 <button className="submit" type="submit">Signup</button>
//             </form>
//             {successMessage && <p className="success-message">{successMessage}</p>}
//         </div>
//     );
// };

// export default Signup;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [deptname, setDeptname] = useState('');
//     const [password, setPassword] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('https://outletsp.onrender.com/signup', { username, password, deptname });
//             setSuccessMessage("Signup successful! You can now log in.");
//             setUsername('');
//             setPassword('');
//             setDeptname('');
//         } catch (error) {
//             console.error('Signup error:', error.response ? error.response.data : error.message);
//             const errorMessage = error.response?.data?.message || "Signup failed. Please try again.";
//             setSuccessMessage(errorMessage);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <form onSubmit={handleSignup} style={{...styles.form , display: 'flex',
//         justifyContent: 'center',flexDirection:'column',
//         alignItems: 'center'}}>
//                 <h1>Signup <span style={{color:'#F99000'}}>Outlet</span></h1>
//                 <input 
//                     type="text" 
//                     placeholder="Department" 
//                     value={deptname} 
//                     onChange={e => setDeptname(e.target.value)} 
//                     style={styles.input}
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Username" 
//                     value={username} 
//                     onChange={e => setUsername(e.target.value)} 
//                     style={styles.input}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={e => setPassword(e.target.value)} 
//                     style={styles.input}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder=" Confirm Password" 
//                     value={password} 
//                     onChange={e => setPassword(e.target.value)} 
//                     style={styles.input}
//                 />
//                 <button className="submit" type="submit" style={styles.button}>Signup</button>
//             </form>
//             {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '105vh',
//         margin: '-100px',
//         backgroundColor: '#f0f0f0',
//     },
//     form: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '5px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         width: '300px',
//     },
//     input: {
//         width: '84%',
//         padding: '10px',
//         margin: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//     },
//     button: {
//         width: '92%',
//         padding: '10px',
//         backgroundColor: '#007BFF',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         fontSize: '16px',
//     },
//     successMessage: {
//         color: 'green',
//         textAlign: 'center',
//     },
// };

// export default Signup;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate
import Snackbar from '@mui/material/Snackbar'; // Import Snackbar
import MuiAlert from '@mui/material/Alert'; // Import Alert for Snackbar

const Signup = () => {
    const [username, setUsername] = useState('');
    const [deptname, setDeptname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(''); // 'success' or 'error'
    const navigate = useNavigate(); // Initialize navigate

    const handleSignup = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setSnackbarMessage("Passwords do not match.");
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
            return;
        }

        try {
            await axios.post('https://outletsp.onrender.com/signup', { username, password, deptname });
            setSnackbarMessage("Signup successful! You can now log in.");
            setSnackbarSeverity('success');
            setSnackbarOpen(true);

            // Redirect to login page after successful signup
            setTimeout(() => {
                navigate('/login'); // Use navigate to redirect
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error('Signup error:', error.response ? error.response.data : error.message);
            const errorMessage = error.response?.data?.message || "Signup failed. Please try again.";
            setSnackbarMessage(errorMessage);
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
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
            <form onSubmit={handleSignup} style={{...styles.form, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <h1>Signup <span style={{color:'#F99000'}}>Outlet</span></h1>
                <input 
                    type="text" 
                    placeholder="Department" 
                    value={deptname} 
                    onChange={e => setDeptname(e.target.value)} 
                    style={styles.input}
                />
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
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)} 
                    style={styles.input}
                />
                <button className="submit" type="submit" style={styles.button}>Signup</button>

                <p>Already have an account? <a href="/login">Login here</a></p>
            </form>

            {/* Snackbar for messages */}
            <Snackbar 
                open={snackbarOpen} 
                autoHideDuration={6000} 
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'buttom', horizontal: 'center' }} // Center it
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
        height: '105vh',
        margin: '-100px',
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

export default Signup;
