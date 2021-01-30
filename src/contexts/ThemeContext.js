import React, { Component, createContext } from 'react'

export const ThemeContext  = createContext();

class ThemeContextProvider extends Component {
   
    // State Properties
    state = {
        isLightTheme: true,
        light: { syntax : '#555' , ui: '#ddd' , bg: '#eee'},
        dark: { syntax : '#ddd' , ui: '#333' , bg: '#555'},
    }
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme});
    }
    render(){
        return (
            // Value will copy all properties from this state
            <ThemeContext.Provider value={{...this.state , toggleTheme: this.toggleTheme }}>
               {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;