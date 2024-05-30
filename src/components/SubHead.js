import React from 'react';
import styles from '../../styles/SubHead.module.css';

const SubHead = ({ sectionNumber, title }) => {
    return (
        <div className={styles.subheadContainer}>
            <h2 className={styles.subheadLevel}>Level {sectionNumber}:</h2>
            <h2 className={styles.subheadTitle}>{title}</h2>
        </div>
    );
};

export default SubHead;
