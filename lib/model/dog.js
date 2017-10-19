const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
   
    name: {
        type: String,
        required: true
    },

    stats: {
        HP: Number,
        MP: Number,
        swimms: Boolean
    }

});


module.exports = mongoose.model('Dog', schema);