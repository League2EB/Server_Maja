const request = require('request');

module.exports = function (callback)
{
	request.get('https://raw.githubusercontent.com/League2EB/OpenWebObject/master/NewTaipeiGAS.json', function(error, response, body)
	{
		try
		{
			return callback(JSON.parse(body));
		}
		catch (err)
		{
			return callback(null);
		}
	});
}
