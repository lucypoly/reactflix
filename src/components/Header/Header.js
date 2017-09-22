import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className="container-fluid">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;