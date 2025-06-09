import React, { useState, useCallback } from 'react';
import GradesList from './components/GradesList';
import Login from './components/Login';
import GradeForm from './components/GradeForm';
import './main.css';

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(
        !!localStorage.getItem('isLoggedIn')
    );
    const [refreshGrades, setRefreshGrades] = useState(0);
    const [showAddGradeForm, setShowAddGradeForm] = useState(false); 

    const handleGradeAdded = useCallback(() => {
        setRefreshGrades(prev => prev + 1);
        setShowAddGradeForm(false); 
    }, []);

    const handleLogin = () => {
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        setShowAddGradeForm(false); 
    };

    const handleCloseAddGradeForm = useCallback(() => { 
        setShowAddGradeForm(false);
    }, []);

    return (
        <div className="overall-app-wrapper">
            <h1 className="app-title">Student Grades Management System</h1>

            {loggedIn && (
                <button onClick={handleLogout} className="top-right-logout-button">
                    Logout
                </button>
            )}

            {loggedIn ? (
                <> {/* Use a Fragment to group conditional content */}
                    {showAddGradeForm ? (
                        
                        <div className="full-page-form-overlay">
                            <GradeForm onGradeAdded={handleGradeAdded} onCancel={handleCloseAddGradeForm} />
                        </div>
                    ) : (
                       
                        <div className="content-area">
                            <button onClick={() => setShowAddGradeForm(true)} className="add-new-grade-button">
                                Add New Grade
                            </button>
                            <GradesList onGradeAddedOrDeleted={handleGradeAdded} />
                        </div>
                    )}
                </>
            ) : (
              
                <div className="login-page-layout">
                    <div className="description-box">
                        <p><strong>Student Academic Grades</strong></p>
                        <ul>
                            <li>Centralizes all student grades digitally.</li>
                            <li>Provides insights into student progress.</li>
                            <li>Simplifies administrative tasks for teachers.</li>
                            <li>Efficiently monitors academic performance.</li>
                        </ul>
                    </div>
                    <Login onLogin={handleLogin} />
                </div>
            )}
            <div className="copyright-footer">
                &copy; {new Date().getFullYear()} Student Academics. All rights reserved.
            </div>
        </div>
    );
};

export default App;