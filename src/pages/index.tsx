import * as React from 'react';

type Props = {
    name: 'john'
}

const Index: React.FC<Props> = ({ name }) => {

    const fName: string = 'johnny';
    const lName: string = 'bravo';
    return (
        <main>
            <h1>{`hello ${fName} ${lName}`}</h1>
        </main>
    );
}

export default Index;