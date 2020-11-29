const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://pedrogiampietro:899681ph@cluster0.03uyz.gcp.mongodb.net/studydb?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise


module.exports = mongoose