import React from 'react';

function Child1 ({sendData}) {
    const passData = () => {
        sendData ('skjcfhj')
    };

    return (
        <div>
            <h2>sldhadg</h2>
            <button onClick={passData}>sendddddddd</button>
        </div>
    );
}
export default Child1;