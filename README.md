# function_evaluator
A package that evaluates a given string as function

This module is a simple way to evaluate a string content as an expression. 
Passing other than string to this module throws an error.

Download

It is published on node package manager (npm). To install, do:

`
npm i @adhikari_mithun/function_evaluator`


Usage

`
var evaluate = require('@adhikari_mithun/function_evaluator')`

`var res = _evaluate(content,callback)`

The following options are available:

content (String): the content to be evaluated

callback (Function) : the function to be called when the expression
is evaluated or some error is thrown.

# Example
`
var evaluate = require('@adhikari_mithun/function_evaluator')`

`var res = evaluate('let m = 123; exports.x = x',function(res,err){
    // => res === { x: 123 }
});`


`
res = evaluate('module.exports = function () { return 123 }',function(res,err){
// => res() === 123
});`

`
res = evaluate(13,function(res,err){
// => err === "This expression requires only string and not other"
});`