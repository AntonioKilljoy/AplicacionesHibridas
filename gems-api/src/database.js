const mongoose = require('mongoose')

mongoose.conect("mongodb+srv://AntonioKilljoy:@cluster0.pdjt1.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('DB is connected'))
.catch(err => console.error(err))

