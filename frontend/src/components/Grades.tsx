import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GradesList: React.FC = () => {
    const [grades, setGrades] = useState<any[]>([]);

    const fetchGrades = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/grades');
            setGrades(response.data);
        } catch (error) {
            console.error('Error fetching grades:', error);
        }
    };

    useEffect(() => {
        fetchGrades();
    }, []);

    return (
        <div>
            <h1>Grades</h1>
            <ul>
                {grades.map(grade => (
                    <li key={grade.id}>{grade.studentName} - {grade.course}: {grade.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default GradesList;