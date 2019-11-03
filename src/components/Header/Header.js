import React from "react";


// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
    head: {
        background: "black",
        width: "100%",
        height: "12%",
        color: "white"
    },
    headtext: {
        // width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
        justifyContent: "center",
        alignItems: "center"
    }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Header() {
    return (
        <div style={styles.head}>
            <h3 style={styles.headtext}>Click on a picture to start. If you click on the same picture more than once you lose!</h3>
        </div>
    );
}

export default Header;
