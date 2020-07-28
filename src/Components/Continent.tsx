import React, { useState } from 'react';
import { Area } from './Area';
import { AnimalDescriptor } from './Animal';

interface ContinentProps {
    continent: string;
    areas: { [key: string]: AnimalDescriptor[] };
}

export const Continent: React.FC<ContinentProps> = ({ continent, areas }) => {
    const [points] = useState(0);
    return (
        <div style={{ marginLeft: '3rem' }}>
            <h1>{`${continent} (${points})`}</h1>
            {Object.entries(areas).map(([area, animals]) => (
                <Area key={area} area={area} animals={animals} />
            ))}
        </div>
    );
};
