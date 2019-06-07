const mongodb = require('mongodb');
const data = require('./final_data.json');
async function run() {
	var client;
	try {
		client = await mongodb.MongoClient.connect('mongodb://localhost/navSiteBackend', {useNewUrlParser: true});
		console.log("connected...");
	} catch(err) {
		console.error(err);
		return;
	}
	client.db('navSiteBackend').collection('websites').insertMany(data)
		.then(console.log("imported successfully..."))
		.catch(err => console.error(err));
}
run();
