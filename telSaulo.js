// mygenerator.js
var Parser = require("jison").Parser;
 
// a grammar in JSON
var grammar = {
    "lex": {
        "rules": [
            ["\\s+", "/* skip whitespace */"],
            ["9[0-9]{4}\\-[0-9]{4}",  "return 'PHONE_NUMBER';"],
            ["[0-9]{4}\\-[0-9]{4}",  "return 'FIX_NUMBER';"],
            ["\\(0{0,1}[0-9][0-9]\\)", "return 'DDD'; "],
        ]
    },
 
    "bnf": {
        "expressions": [
            ["DDD", "console.log('Valid DDD'); return $1;"],
            ["PHONE_NUMBER", "console.log('Valid Number'); return $1"],
            ["DDD PHONE_NUMBER", "console.log('Valid Phone'); return $1 + $2"],
            ["DDD FIX_NUMBER", "console.log('Valid Fix Phone'); return $1 + $2"],
        ],
    }
};

var parser = new Parser(grammar);
var parserSource = parser.generate();
 
var source = "(28)99809-7414";
console.log(parser.parse(source));