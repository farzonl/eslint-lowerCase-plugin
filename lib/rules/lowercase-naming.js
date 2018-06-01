/**
 * @fileoverview Enforces properties start with a lowercase letter.
 * @author Farzon Lotfi
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Enforces properties start with a lowercase letter.",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

    const exclusionList = {
        "Buffer":true, // node
        "By" : true, //selenium
    };

    function checkIdentifier(name, node) {
        if(name ===  name.toUpperCase()) {
            return;
        }
        if(name[0] === name[0].toUpperCase()) {
            context.report(node, 'identifer does not start with a lowercase.');
        }
    }

    function checkClassName(name, node) {
        if(name[0] !== name[0].toUpperCase()) {
            context.report(node, 'class identifiers should start with a capital');
        } else {
            return;
        }
    }

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "ClassDeclaration" : function(node) {
                let name = node.id.name;
                checkClassName(name, node);
                
            },"ClassExpression" : function(node) {
                if(node.id === null) {
                    return;
                }
                let name = node.id.name;
                checkClassName(name, node);
            }, "FunctionExpression" : function(node) {
                if(node.id === null) {
                    return;
                }
                let name = node.id.name;
                checkIdentifier(name, node);

            }, "ObjectPattern" : function(node) {
                node.properties.forEach(function(element) {
                    let name =  element.key.name;

                    checkIdentifier(name, node);
                });
            }, "VariableDeclaration" : function(node) {
                node.declarations.forEach(function(element) {
                    if (element.id.type === "ObjectPattern") {
                        return; //skip
                    }

                    if (element.id.type === "ArrayPattern") {
                        return; //skip
                    }

                    let name =  element.id.name;
                    
                    if(!name) {
                        // if this error is reported there might be a new language feature this
                        // linter plugin needs to account for.
                        context.report(node, 'had an unknown error, element id is: '+element.id.type);
                        return; //break
                    }
                    if(element.init !== null && element.init.type == "ClassExpression") {
                        if(name[0] !== name[0].toUpperCase()) {
                            context.report(node, 'class identifiers should start with a capital');
                        } else {
                            return;
                        }
                    }
                    if(exclusionList[name]) {
                        return;
                    }
                    
                    checkIdentifier(name, node);
                });
            }, "FunctionDeclaration": function(node) {
                let name = node.id.name;
                checkIdentifier(name, node);
            }, "ArrayPattern" : function(node) {
                node.elements.forEach(function(element) {
                    let name = element.name;
                    checkIdentifier(name, node);
                });
            }, "ObjectExpression": function(node) {
                node.properties.forEach(function(element) {
                    let name = null;
                    if(element.key.type === "Literal") {
                        name = element.key.value;
                    } else {
                        name = element.key.name;
                    }
                    if(!name) {
                        // if this error is reported there might be a new language feature this
                        // linter plugin needs to account for.
                        context.report(node, 'had an unknown error, element id is: '+element.key.type);
                        return; //break
                    }
                    if( (typeof name) !== "string") {
                        return; //break
                    }
                    if(element.init !== null && element.value.type == "ClassExpression") {
                        checkClassName(name, node);
                        return;
                    }
                    checkIdentifier(name, node);
                });
            }
        };
}
};
