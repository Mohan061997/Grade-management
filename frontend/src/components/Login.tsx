import React, { useState } from 'react';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            onLogin();
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group"> {/* Added for grouping label and input */}
                    <label htmlFor="username">Username</label> {/* Label outside */}
                    <input
                        type="text"
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    
                    />
                </div>
                <div className="form-group"> {/* Added for grouping label and input */}
                    <label htmlFor="password">Password</label> {/* Label outside */}
                    <input
                        type="password"
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;