import React from 'react';
import styles from './Link.scss';

const Link = ({ active, children, onSortClick }) => {
    return (
        <button
            className={`${styles.option} ${active ? styles.active : ''}`}
            onClick={e => {
                e.preventDefault();
                onSortClick()
            }}>
            {children}
        </button>
    )
};

export default Link;