
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

import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [deptname, setDeptname] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/signup', { username, password, deptname });
            setSuccessMessage("Signup successful! You can now log in.");
            setUsername('');
            setPassword('');
            setDeptname('');
        } catch (error) {
            console.error('Signup error:', error.response ? error.response.data : error.message);
            const errorMessage = error.response?.data?.message || "Signup failed. Please try again.";
            setSuccessMessage(errorMessage);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSignup} style={{...styles.form , display: 'flex',
        justifyContent: 'center',flexDirection:'column',
        alignItems: 'center'}}>
                <h1>hello</h1>
                <input 
                    type="text" 
                    placeholder="Dept" 
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
                <button className="submit" type="submit" style={styles.button}>Signup</button>
            </form>
            {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
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
    successMessage: {
        color: 'green',
        textAlign: 'center',
    },
};

export default Signup;
