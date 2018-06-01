/**
 * @fileoverview Enforces properties start with a lowercase letter.
 * @author Farzon Lotfi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/lowercase-naming"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({env: {"es6": true}});
ruleTester.run("lowercase-naming", rule, {

    valid: [

        { code: "var a = {fooBar: 1 };" },
        { code: "var a = {foo: 1 };" },
        { code: "var fooBar = \"A\";" },
        { code: "var foo = \"A\";" },
        { code: "var FOO = \"A\";" },
        { code: "function bar() {}" },
        { code: "var foo1 = function () {}"},
        { code: "var foo2 = () => {}"},
        { code: "class Foo {}"},
        { code: "var Foo3 = class {}"},
        { code: "var a = {FooBar: class {} };"},
        { code: "var bar = function*  foo() {}"},
        { code: "const { STRINGS, ERRCODE } = [1,2]" },
        { code: "var a = {'data': 1, 'origin': 2};"},
        { code: "let keyObj = {a:1,b:2,c:3,d:4,e:5}; let [a, b, c, d, e] = [keyObj.a, keyObj.b, keyObj.c, keyObj.d, keyObj.e];"},
        { code: "var a = {404: 'page not found' };" },
    ],

    invalid: [
        {
            code: "var FooBar = \"A\";",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"VariableDeclaration"
            }]
        }, {
            code: "var _FooBar = \"A\";",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"VariableDeclaration"
            }]
        }, {
            code: "var a = {FooBar: 1 };",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"ObjectExpression"
            }]
        },
        {
            code: "class foo {}",
            errors: [{
                message: 'class identifiers should start with a capital',
                type:"ClassDeclaration"
            }]
        },
        {
            code: "var foo3 = class {}",
            errors: [{
                message: 'class identifiers should start with a capital',
                type:"VariableDeclaration"
            }]
        }, {
            code: "var a = {fooBar: class {} };",
            errors: [{
                message: 'class identifiers should start with a capital',
                type:"ObjectExpression"
            }]
        },
        {
            code: "var Foo3 = class bar {}",
            errors: [{
                message: 'class identifiers should start with a capital',
                type:"ClassExpression"
            }]
        },
        {
            code: "var bar = function Foo() {}",
            errors: [{
                message: 'identifer does not start with a lowercase.',
                type:"FunctionExpression"
            }]
        }, 
        {
            code: "var a = {fooBar: function Foo() {}};",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"FunctionExpression"
            }]
        },
        {
            code: "var bar = function*  Foo() {}",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"FunctionExpression"
            }]
        },
        {
            code: "var Bar = function*  foo() {}",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"VariableDeclaration"
            }]
        },
        {
            code: "let keyObj = {Aa:1,b:2,c:3,d:4,e:5}; let [a, b, c, d, e] = [keyObj.Aa, keyObj.b, keyObj.c, keyObj.d, keyObj.e];",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"ObjectExpression"
            }]
        },
        {
            code: "let keyObj = {a:1,b:2,c:3,d:4,e:5}; let [Aa, b, c, d, e] = [keyObj.a, keyObj.b, keyObj.c, keyObj.d, keyObj.e];",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"ArrayPattern"
            }]
        }
    ]
});
