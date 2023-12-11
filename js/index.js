function generateQuote(){

    var quote=[" “Be yourself; everyone else is already taken.” ", 
            " “So many books, so little time.” ",
            " “A room without books is like a body without a soul.” ",
            " “You only live once, but if you do it right, once is enough.” ",
            " “Be the change that you wish to see in the world.” ",
            " “In three words I can sum up everything I've learned about life: it goes on.” ",
            " “You miss 100% of the shots you don't take.” ",
            "“The best revenge is massive success.” "

        ];

var author=["― Oscar Wilde","― Frank Zappa","― Marcus Tullius Cicero","― Mae West","― Mahatma Gandhi","― Robert Frost","― Wayne Gretzy","―Frank Sinatra"];

var quoteGenerate =Math.floor(Math.random()*quote.length);

document.getElementById("quote").innerHTML=quote[quoteGenerate];
document.getElementById("author").innerHTML=author[quoteGenerate];
}

