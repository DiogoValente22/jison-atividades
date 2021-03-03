// mygenerator.js
var Parser = require("jison").Parser;
 
// a grammar in JSON
var grammar = {
    "lex": {
        "rules": [
            ["\\s+", "/* skip whitespace */"],
            ["[a-zA-z/!/@/#/$/%/¨/&/*/(/)/_/-]{4,}@[a-z0-9]+[.a-z0-9]+",  "return 'EMAIL';"], //ex: diogo@outlook.com ou diogo@gmail.com.br.uol.seila
            ["", "return 'PLACA_INVALIDA';"]
        ]
    },
 
    "bnf": {
        "expressions": [
            ["EMAIL", "console.log('E-mail Valido!'); return $1;"],
            ["PLACA_INVALIDA", "console.log('E-mail INVALIDO!!!'); return null;"]
        ],
    }
};

var parser = new Parser(grammar);
var parserSource = parser.generate();
 
var source = "diogo@outlook.com.br";
console.log(parser.parse(source));
