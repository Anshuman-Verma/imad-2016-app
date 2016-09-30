var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne = {
    title:'Article-One|Anshuman',
    heading: 'About Me:',
    date: 'Sep 10,2016',
    content: 
    `<div>
        <ol>
            <li>Anime-</li>
                <p>Anime is my interest since childhod! It plays a key role in my life and taught me to never lose hope!</p><br>
            <li>Football-</li>
                <p>My key sport is football & I play at Winger or Striker position</p> <br>
            <li>Coding-</li>
                <p>Computer Science is in my blood.<br>
        </ol>    
    </div>`
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
     </head>
    
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                
                <h3>${heading}</h3>
                
            ${content}        
                
            </div>
        </body>
      
        
    </html>
    
    `;
    return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one', function (req,res){
    res.send(createTemplate(ArticleOne));
    
});

app.get('/Article-two', function (req,res){
    res.send('Article Two will be served here !');
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/sora.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sora.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
