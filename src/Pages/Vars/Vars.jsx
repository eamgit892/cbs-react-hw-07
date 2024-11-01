 function Vars() {
    return (
        <div className="Main">
            <h2>Vars explained</h2>
            <p>
                In JavaScript, var, let, and const are used to declare variables, 
                but they differ in their scope, hoisting, and reassignment behavior.
            </p>
            <h3>Scope</h3>
            <h4>var</h4>
            <p>
                Function-scoped. A variable declared with var is accessible within the function it's declared in, 
                or globally if declared outside any function.
            </p>
            <h4>let & const</h4>
            <p>
            Block-scoped. Variables declared with let and const are only accessible within the block they're declared in (e.g., within an if statement, loop, or function).
            </p>
            <h3>Hoisting:</h3>
<h4>var:</h4>
Hoisted to the top of their scope and initialized with undefined. This means you can use a var variable before it's declared, but its value will be undefined.
<h4> let and const: </h4>
Hoisted to the top of their scope but not initialized. Accessing them before declaration results in a ReferenceError. This is known as the "temporal dead zone". 
<h4> Reassignment: </h4>
<em>var:</em> Can be reassigned any number of 
<em>let:</em> Can be reassigned any number of times.
<em> const:</em> Cannot be reassigned once it's initialized. However, if the variable is an object or array, you can modify its properties or elements.
<pre>
        some code
</pre>
        </div>

    )    
}
export default Vars;