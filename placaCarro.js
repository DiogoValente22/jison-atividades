// mygenerator.js
var Parser = require("jison").Parser;
 
// a grammar in JSON
var grammar = {
    "lex": {
        "rules": [
            ["\\s+", "/* skip whitespace */"],
            ["[A-Z]{3}[0-9]{4}",  "return 'PLACA_ANTIGA';"], // ex: AAA0000
            ["[A-Z]{3}[0-9][A-Z][0-9]{2}",  "return 'PLACA_NOVA';"], // ex: AAA0A00
            ["", "return 'PLACA_INVALIDA';"]
        ]
    },
 
    "bnf": {
        "expressions": [
            ["PLACA_ANTIGA", "console.log('Placa antiga valida'); return $1;"],
            ["PLACA_NOVA", "console.log('Placa Nova valida'); return $1;"],
            ["PLACA_INVALIDA", "console.log('A placa é invalida'); return null;"]
        ],
    }
};

var parser = new Parser(grammar);
var parserSource = parser.generate();
 
var source = "AAA0000";
console.log(parser.parse(source));