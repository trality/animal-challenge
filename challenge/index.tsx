import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import animalData from './animals.json';
import { Continent } from '../.';

const App = () => {
    const [votes] = React.useState(0);
    const [favouriteContinent] = React.useState<string[]>([]);
    const [favouriteArea] = React.useState<string[]>([]);
    const [favouriteAnimals] = React.useState<string[]>([]);

    const onDownload = () => {
        alert('Not implemented');
    };

    const onReset = () => {
        alert('Not implemented');
    };

    return (
        <div>
            <div style={{ display: 'flex' }}>
                {Object.entries(animalData).map(([continent, areas]) => (
                    <Continent
                        key={continent}
                        continent={continent}
                        areas={areas}
                    />
                ))}
            </div>
            <hr />
            <div style={{ marginLeft: '3rem' }}>
                <h2>Total Votes: {votes}</h2>
                <h2>Favourite Continent(s): {favouriteContinent.join(',')}</h2>
                <h2>Favourite Area(s) {favouriteArea.join(',')}</h2>
                <h2>Favourite Animal(s): {favouriteAnimals.join(',')}</h2>
                <button onClick={onDownload}>Download Statistics</button>
                <button onClick={onReset}>Reset Statistics</button>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
