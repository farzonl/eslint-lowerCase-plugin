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

var ruleTester = new RuleTester();
ruleTester.run("lowercase-naming", rule, {

    valid: [

        { code: "var a = {fooBar: 1 };" },
        { code: "var a = {foo: 1 };" },
        { code: "var fooBar = \"A\";" },
        { code: "var foo = \"A\";" }

    ],

    invalid: [
        {
            code: "var FooBar = \"A\";",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"Identifier"
            }]
        }, {
            code: "var _FooBar = \"A\";",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"Identifier"
            }]
        }, {
            code: "var a = {FooBar: 1 };",
            errors: [{
                message: "identifer does not start with a lowercase.",
                type:"Identifier"
            }]
        }
    ]
});
