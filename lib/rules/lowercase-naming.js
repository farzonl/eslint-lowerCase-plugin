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

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "Identifier": function(node) {
                if(node.name ===  node.name.toUpperCase()) {
                    return;
                }
                if(node.name[0] === node.name[0].toUpperCase() &&
                !('a' <= node.name[0] && 'z' >= node.name[0]) ){
                    context.report(node, 'identifer does not start with a lowercase.');
                }
            }
        };
}
};
