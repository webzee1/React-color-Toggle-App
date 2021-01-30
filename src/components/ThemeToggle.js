import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class ThemeToggle extends Component {

    static contextType = ThemeContext;

    render() {
        // toggleTheme Object Passes in ThemeContext.js
        const { toggleTheme } = this.context;
        return (
            <button onClick={toggleTheme}>Toggle Theme</button>
        )
    }
}

export default ThemeToggle
