import React, { useState } from 'react';
import axios from 'axios';

interface GradeFormProps {
    onGradeAdded: () => void;
    onCancel: () => void; 
}

const GradeForm: React.FC<GradeFormProps> = ({ onGradeAdded, onCancel }) => { 
    const [studentName, setStudentName] = useState('');
    const [course, setCourse] = useState('');
    const [score, setScore] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

       
        if (!studentName || !course || !score) {
            setError('All fields are required.');
            setLoading(false);
            return;
        }
        if (isNaN(Number(score)) || Number(score) < 0 || Number(score) > 100) {
            setError('Score must be a number between 0 and 100.');
            setLoading(false);
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/grades', {
                studentName,
                course,
                score: parseFloat(score),
            });
            setStudentName('');
            setCourse('');
            setScore('');
            onGradeAdded(); 
        } catch (err) {
            setError('Failed to add grade. Please try again.');
            console.error('Add grade error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grade-form-container">
            <h2>Add New Student Grade</h2>
            <form onSubmit={handleSubmit} className="grade-form">
                <div className="form-group">
                    <label htmlFor="studentName">Student Name</label>
                    <input
                        type="text"
                        id="studentName"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="course">Course</label>
                    <input
                        type="text"
                        id="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="score">Grade</label>
                    <input
                        type="text"
                        id="score"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="form-actions"> 
                    <button type="submit" disabled={loading}>
                        {loading ? 'Adding...' : 'Add Grade'}
                    </button>
                    <button type="button" onClick={onCancel} className="cancel-button"> 
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GradeForm;