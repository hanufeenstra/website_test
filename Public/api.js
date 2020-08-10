function GetItechdSubs(){
    var PilotLog = JSON.parse(fs.readFileSync('.pilotpass.json', 'utf8'));
    var options = {
        url: 'http://adm.pilot-gps.ru/backend/api/api.php?cmd=accounts',
        auth: {
            username: PilotLog[0].username,
            password: PilotLog[0].password
        }
    };
    request.get(options, function(err,res,body){
        var jsonAPIres = JSON.parse(body);
        fs.appendFileSync('Subs JSON/itechdsubs.json', JSON.stringify(jsonAPIres),'utf8');       
    });     
};
function GetTracetecSubs(){
    var PilotLog = JSON.parse(fs.readFileSync('.pilotpass.json', 'utf8'));
    var options = {
        url: 'http://adm.pilot-gps.ru/backend/api/api.php?cmd=accounts',
        auth: {
            username: PilotLog[1].username,
            password: PilotLog[1].password
        }
    };
    request.get(options, function(err,res,body){
        var jsonAPIres = JSON.parse(body);
        fs.appendFileSync('Subs JSON/tracetecsubs.json', JSON.stringify(jsonAPIres),'utf8');       
    });     
};
function GetAntotoSubs(){
    var PilotLog = JSON.parse(fs.readFileSync('.pilotpass.json', 'utf8'));
    var options = {
        url: 'http://adm.pilot-gps.ru/backend/api/api.php?cmd=accounts',
        auth: {
            username: PilotLog[2].username,
            password: PilotLog[2].password
        }
    };
    request.get(options, function(err,res,body){
        var jsonAPIres = JSON.parse(body);
        fs.appendFileSync('Subs JSON/antotosubs.json', JSON.stringify(jsonAPIres),'utf8');       
    });     
};
function GetiPinSubs(){
    var PilotLog = JSON.parse(fs.readFileSync('.pilotpass.json', 'utf8'));
    var options = {
        url: 'http://adm.pilot-gps.ru/backend/api/api.php?cmd=accounts',
        auth: {
            username: PilotLog[3].username,
            password: PilotLog[3].password
        }
    };
    request.get(options, function(err,res,body){
        var jsonAPIres = JSON.parse(body);
        fs.appendFileSync('Subs JSON/ipinsubs.json', JSON.stringify(jsonAPIres),'utf8');       
    });     
};