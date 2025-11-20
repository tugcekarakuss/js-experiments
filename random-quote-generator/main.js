function randomQuote() {
    var quotes = {
        "― Oscar Wilde": `"Be yourself; everyone else is already taken."`,
        "― Marilyn Monroe": `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
        "― Frank Zappa": "'So many books, so little time.'",
        "― Marcus Tullius Cicero": '"A room without books is like a body without a soul."',
        "― Dr. Seuss" : `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)]

    var quote = quotes[author]

    document.getElementById("quote").innerHTML=quote
    document.getElementById("author").innerHTML=author

}

var btn = document.querySelector("button")
btn.addEventListener("click", randomQuote)