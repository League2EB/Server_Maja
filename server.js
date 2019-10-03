
const hapi        = require('hapi');
const server      = new hapi.Server();

const TESTFile = require('./TESTFile.js');

/*應用*/
const PlaceCrime = require('./PlaceCrime.js');
const NewTaipeiWiFi = require('./NewTaipeiWiFi.js');
const GoalPost = require('./GoalPost.js')
const NewTaipeiGAS = require('./NewTaipeiGAS.js')
const NewTaipeiMovement = require('./NewTaipeiMovement.js')
const NewTaipeiHospital = require('./NewTaipeiHospital.js')
const MyRunTrack = require('./MyRunTrack.js')
const ShowMeBMI = require('./ShowMeBMI.js')
const NewTaipeiChurch = require('./NewTaipeiChurch.js')
const BrewTeaTime = require('./BrewTeaTime.js')
const AnimalAdoption = require('./AnimalAdoption.js')
const CPCGASStation = require('./CPCGASStation.js')
const WaterQuality = require('./WaterQuality.js')
const SanoTicTacToe = require('./SanoTicTacToe.js')
const MealPrepr = require('./MealPrepr.js')
const AntiViolence = require('./AntiViolence.js')
const PasswordPusher = require('./PasswordPusher.js')
const RainfallObservation = require('./RainfallObservation.js')
const TaiwanHostel = require('./TaiwanHostel.js')
const FuckOff = require('./FuckOff.js')
const TalkShit = require('./3of9Stage.js')

server.connection({ port: process.env.PORT || 8080});

/**/
/*TESTFile*/
server.route
({
    method: 'GET',
    path: '/api/v1/testfile', 
    handler: function(request, replay) 
    {
        TESTFile(function(result)
        {
            replay(result);
        });
    }
});

/*PlaceCrime*/
server.route
({
    method: 'GET',
    path: '/api/v1/placecrime', 
    handler: function(request, replay) 
    {
        PlaceCrime(function(result)
        {
            replay(result);
        });
    }
});

/*NewTaipeiWiFi*/
server.route
({
    method: 'GET',
    path: '/api/v1/newtaipeiwifi', 
    handler: function(request, replay) 
    {
        NewTaipeiWiFi(function(result)
        {
            replay(result);
        });
    }
});

/*GoalPost*/
server.route
({
    method: 'GET',
    path: '/api/v1/goalpost', 
    handler: function(request, replay) 
    {
        GoalPost(function(result)
        {
            replay(result);
        });
    }
});

/*NewTaipeiGAS*/
server.route
({
    method: 'GET',
    path: '/api/v1/newtaipeigas', 
    handler: function(request, replay) 
    {
        NewTaipeiGAS(function(result)
        {
            replay(result);
        });
    }
});

/*NewTaipeiMovement*/
server.route
({
    method: 'GET',
    path: '/api/v1/newtaipeimovement', 
    handler: function(request, replay) 
    {
        NewTaipeiMovement(function(result)
        {
            replay(result);
        });
    }
});

/*NewTaipeiHospital*/
server.route
({
    method: 'GET',
    path: '/api/v1/newtaipeihospital', 
    handler: function(request, replay) 
    {
        NewTaipeiHospital(function(result)
        {
            replay(result);
        });
    }
});

/*MyRunTrack*/
server.route
({
    method: 'GET',
    path: '/api/v1/myruntrack', 
    handler: function(request, replay) 
    {
        MyRunTrack(function(result)
        {
            replay(result);
        });
    }
});

/*ShowMeBMI*/
server.route
({
    method: 'GET',
    path: '/api/v1/showmebmi', 
    handler: function(request, replay) 
    {
        ShowMeBMI(function(result)
        {
            replay(result);
        });
    }
});

/*NewTaipeiChurch*/
server.route
({
    method: 'GET',
    path: '/api/v1/newtaipeichurch', 
    handler: function(request, replay) 
    {
        NewTaipeiChurch(function(result)
        {
            replay(result);
        });
    }
});

/*BrewTeaTime*/
server.route
({
    method: 'GET',
    path: '/api/v1/brewteatime', 
    handler: function(request, replay) 
    {
        BrewTeaTime(function(result)
        {
            replay(result);
        });
    }
});

/*AnimalAdoption*/
server.route
({
    method: 'GET',
    path: '/api/v1/animaladoption', 
    handler: function(request, replay) 
    {
        AnimalAdoption(function(result)
        {
            replay(result);
        });
    }
});

/*CPCGASStation*/
server.route
({
    method: 'GET',
    path: '/api/v1/cpcgasstation', 
    handler: function(request, replay) 
    {
        CPCGASStation(function(result)
        {
            replay(result);
        });
    }
});

/*WaterQuality*/
server.route
({
    method: 'GET',
    path: '/api/v1/waterquality', 
    handler: function(request, replay) 
    {
        WaterQuality(function(result)
        {
            replay(result);
        });
    }
});

/*SanoTicTacToe*/
server.route
({
    method: 'GET',
    path: '/api/v1/sanotictactoe', 
    handler: function(request, replay) 
    {
        SanoTicTacToe(function(result)
        {
            replay(result);
        });
    }
});

/*MealPrepr*/
server.route
({
    method: 'GET',
    path: '/api/v1/mealprepr', 
    handler: function(request, replay) 
    {
        MealPrepr(function(result)
        {
            replay(result);
        });
    }
});

/*AntiViolence*/
server.route
({
    method: 'GET',
    path: '/api/v1/antiviolence', 
    handler: function(request, replay) 
    {
        AntiViolence(function(result)
        {
            replay(result);
        });
    }
});

/*PasswordPusher*/
server.route
({
    method: 'GET',
    path: '/api/v1/passwordpusher', 
    handler: function(request, replay) 
    {
        PasswordPusher(function(result)
        {
            replay(result);
        });
    }
});

/*RainfallObservation*/
server.route
({
    method: 'GET',
    path: '/api/v1/rainfallobservation', 
    handler: function(request, replay) 
    {
        PasswordPusher(function(result)
        {
            replay(result);
        });
    }
});

/*TaiwanHostel*/
server.route
({
    method: 'GET',
    path: '/api/v1/taiwanhostel', 
    handler: function(request, replay) 
    {
        TaiwanHostel(function(result)
        {
            replay(result);
        });
    }
});

/*FuckOff*/
server.route
({
    method: 'GET',
    path: '/api/v1/fuckoff', 
    handler: function(request, replay) 
    {
        FuckOff(function(result)
        {
            replay(result);
        });
    }
});

/*TalkShit*/
server.route
({
    method: 'GET',
    path: '/api/v1/3of9Stage', 
    handler: function(request, replay) 
    {
        TalkShit(function(result)
        {
            replay(result);
        });
    }
});

/*---------------------------------------*/

/*啟動*/
server.start((err) =>
{
    if (err) 
    {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
