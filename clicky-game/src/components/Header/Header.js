import React from "react";


// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
    head: {
        background: "great",
        width: "100%",
        height: "20%"
    },
    headtext: {
        justifyContent: "center",
        alignItems: "center"
    }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Header() {
    return (
        <div style={styles.head}>
            <h1 style={styles.headtext}>this is the clicky game</h1>
        </div>
    );
}

export default Header;
