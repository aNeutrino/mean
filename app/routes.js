var models = require('./models/models');
var User = models.User;
var Performance = models.Performance;
var Player = models.Player;
module.exports = function(app){

    // JSON API ----------------------------------------------------------------
    // get home page
    app.get('/', function (req, res) {
        res.render('index');
    });

    // JSON API ----------------------------------------------------------------
    // get all users
    app.get('/api/users', function(req, res) {
        User.find(function (err, data) {
            if(err) res.send(err);

            res.json(data);
        })
    });
    // JSON API ----------------------------------------------------------------
    // get
    app.get('/api/perf', function(req, res) {
        var perf = new Performance();
        perf.save(function(err, model){
            if(err) console.log(err);

            res.json(model);
        });
    });
    // JSON API ----------------------------------------------------------------
    // get to create a user
    app.get('/api/user', function(req, res) {
        user.save(function(err){
            if(err) console.log(err);
        })
    });

    // JSON API ----------------------------------------------------------------
    // get a player
    app.get('/api/player/:id', function (req, res) {
        var playerId = req.params.id;

        Player.findById(playerId, function (err, model) {
            if (err) console.log('api Error: ' + err);

            res.json(model);
        });
    });


};
