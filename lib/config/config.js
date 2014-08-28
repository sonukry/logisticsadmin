module.exports = {
	port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://testuser:testpassword@ds053469.mongolab.com:53469/pulsetest'
//    'mongodb://localhost/test'
}
