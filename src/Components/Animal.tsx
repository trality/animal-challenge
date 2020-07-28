import React, { useState } from 'react';

export interface AnimalDescriptor {
    name: string;
    points: number;
}

interface AnimalProps {
    animal: AnimalDescriptor;
}

export const Animal: React.FC<AnimalProps> = ({ animal }) => {
    const [points, setPoints] = useState(animal.points);
    const onUpVote = () => {
        setPoints(points + 1);
    };
    const onDownVote = () => {
        setPoints(points - 1);
    };
    return (
        <div>
            <h4>{animal.name}</h4>
            <button onClick={onUpVote}>Upvote</button>
            <button onClick={onDownVote}>Downvote</button>
            <h4>{`${points} Points`}</h4>
            <hr />
        </div>
    );
};
