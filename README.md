# react-webpack2
React Fundamentals - Why React? An overview of React, Webpack 2, React Router v4, and Babel by Tyler McGinnis

# Whi React?

### Composition

### Imperative vs Declartive
// Imperative(How)

var numbers = [1,2,3,4];
var totalSum = 0;
for ( var i=0; i < numbers.length; i++) {
    totalSum += numbers[1]
}

// Declarative(What)
var numbers = [1,2,3,4]
numbers.reduce( (prev, current) => {
    return prev + current
})

// Benefits of Declarative
reduce side effects
min mutability
more readable code
less bugs

### Uni-directional Data Flow
you only need to worry about the state as change of the state will be reflected to UI due to the data flow directionality
:
state -> UI

### Explicit Mutation

### Just JavaScript
instead ng-repeat and such you can use javaScript
