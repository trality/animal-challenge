import React, { useState } from 'react';
import { Animal, AnimalDescriptor } from './Animal';

interface AreaProps {
    area: string;
    animals: AnimalDescriptor[];
}

export const Area: React.FC<AreaProps> = ({ area, animals }) => {
    const [points] = useState(0);
    return (
        <div>
            <h2>{`${area} (${points})`}</h2>
            {animals.map(animal => (
                <Animal key={animal.name} animal={animal} />
            ))}
        </div>
    );
};
