const url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40';

const quoteBtn = document.getElementById('quote-btn');
const twitterBtn = document.getElementById('twitter-btn');

quoteBtn.addEventListener('click', () => {
       
    let randNum = Math.floor(Math.random() * 40);
    
    fetch(url)
    .then(response => {
        return response.json();
    }).then(json => {
        let authorName = json[randNum].title;
        let quoteContent = json[randNum].content;
        quoteContent = quoteContent.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '').
        replace(/&#[0-9]+;t/gi,"").replace(/\[/g,"").replace(/\]/g,"")
         console.log('Author Name: ', authorName);
         console.log('Quote Content: ', quoteContent);
        document.getElementById('quoteContent').innerHTML = `<span><i class="fa fa-quote-left"></i></span>${quoteContent}<i class="fa fa-quote-right"</i>`;
        document.getElementById('quoteAuthor').innerHTML = `--${authorName}`;
        twitterBtn.disabled = false;
    });
    

});

twitterBtn.addEventListener('click', () => {

    console.log(quoteContent)

    let url = 'https://twitter.com/intent/tweet';
    let text = `Check Out This Awesome Quote! "${document.getElementById('quoteContent').innerText}" by ${document.getElementById('quoteAuthor').innerText}`;
    let hashtags = 'RandomQuoteGenerator';
    window.open(`${url}?text=${text};hashtags=${hashtags};," "`);
});
