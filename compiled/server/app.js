'use strict';

var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('client'));

app.listen(port, function () {
  return console.log('Server running on port ' + port);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9hcHAuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJhcHAiLCJwb3J0IiwidXNlIiwic3RhdGljIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxNQUFNRixTQUFaO0FBQ0EsSUFBTUcsT0FBTyxJQUFiOztBQUVBRCxJQUFJRSxHQUFKLENBQVFKLFFBQVFLLE1BQVIsQ0FBZSxRQUFmLENBQVI7O0FBRUFILElBQUlJLE1BQUosQ0FBV0gsSUFBWCxFQUFpQjtBQUFBLFNBQU1JLFFBQVFDLEdBQVIsNkJBQXNDTCxJQUF0QyxDQUFOO0FBQUEsQ0FBakIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBvcnQgPSAzMDAwO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdjbGllbnQnKSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBydW5uaW5nIG9uIHBvcnQgJHtwb3J0fWApKTsiXX0=