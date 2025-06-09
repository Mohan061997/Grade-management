
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

interface Grade {
    id: number;
    studentName: string;
    course: string;
    score: number;
}

interface GradesListProps {
    onGradeAddedOrDeleted: () => void; 
}

const GradesList: React.FC<GradesListProps> = ({ onGradeAddedOrDeleted }) => {
    const [grades, setGrades] = useState<Grade[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchGrades = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<Grade[]>('http://localhost:5000/api/grades');
            setGrades(response.data);
        } catch (err) {
            setError('Failed to fetch grades. Please try again.');
            console.error('Fetch grades error:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchGrades();
    }, [fetchGrades, onGradeAddedOrDeleted]);

    const handleDelete = async (id: number) => {
        setError(null);
        if (window.confirm('Are you sure you want to delete this grade?')) {
            try {
                await axios.delete(`http://localhost:5000/api/grades/${id}`);
                onGradeAddedOrDeleted(); 
            } catch (err) {
                setError('Failed to delete grade. Please try again.');
                console.error('Delete grade error:', err);
            }
        }
    };

    if (loading) {
        return <p className="loading">Loading grades...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (grades.length === 0) {
        return <p className="no-grades-message">No grades to display yet.</p>;
    }

    return (
        <div className="grades-list-container">
            {/* Changed from <ul> to <table> */}
            <table className="grades-table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Course</th>
                        <th>Grades</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade) => (
                        <tr key={grade.id}> {/* Changed from <li> to <tr> */}
                            <td>{grade.studentName}</td> {/* Changed from <span> to <td> */}
                            <td>{grade.course}</td>
                            <td className="score">{grade.score}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(grade.id)}
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GradesList;