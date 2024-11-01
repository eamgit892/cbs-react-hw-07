function LexEnv(){
    return(
        <div className="Main">
            <h2>About Lexical Environment</h2>
            <p>
            A lexical environment is essentially a structure that defines the association between identifiers, to specific variables and functions.
<br></br>
If you’re wondering what the difference is between identifiers and variables, you can think of identifiers as the variables’ names.
<br></br>

The association between a name of a variable to its value is called binding. So if you hear the term identifier binding, remember it’s about the association between the variable name to its value.

<br></br>

So if we take the next piece of code:
            </p>
            <pre>
                let x = 10;
            </pre>
            <p>
            The identifier is x, and it has binding to the value 10.
            </p>
            <a href="https://www.webdevlog.com/p/how-js-works-lexical-environment/">More on this</a>
        </div>
    );
}

export default LexEnv;