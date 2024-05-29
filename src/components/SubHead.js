// components/SubHead.js

import React from 'react';

const SubHead = ({ sectionNumber, title }) => {
    return (
        <div style={{ marginTop: '40px', marginBottom: '0', display: 'flex', alignItems: 'center' }}>
            <h2 style={{ margin: '0', color: '#95a5a6' }}>Level {sectionNumber}:</h2>
            <h2 style={{ margin: '0 0 0 5px', color: '#333' }}> {title}</h2>
        </div>
    );
};

export default SubHead;
