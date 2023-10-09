var http = require('http');
var url = require('url');
var dt = require('./datetime');


const server = http.createServer((request, response) => {
    // Write the request to the log. 
    console.log(request);

    // Standard Hello World.
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h3>Hello World!</h3>')

    // Access funcion from a separate JavaScript module.
    response.write("The date and time are currently: " + dt.myDateTime() + "<br><br>");

    // Show the url. 
    response.write("req.url="+request.url+"<br><br>");

    // Suggest adding something tl the url so that we can parse it. 
    response.write("Consider adding '/test?year=2017&month=July' to the URL.<br><br>");
    var q = url.parse(request.url, true).query;
    var txt = q.year + " " + q.month;
    response.write("txt="+txt);

    // Close the response
    response.end('<h3>The End.</h3>');
});

// Generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Route to generate a random number between 1 and 6 (for a dice roll)
server.get('/api/dice-roll', (req, res) => {
    const randomValue = getRandomNumber(1, 6);
    res.json({ result: randomValue });
});

// You can define more routes for other random number generation needs
// For example, to generate a random number between 1 and 100:
server.get('/api/random-number', (req, res) => {
    const randomValue = getRandomNumber(1, 100);
    res.json({ result: randomValue });
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
