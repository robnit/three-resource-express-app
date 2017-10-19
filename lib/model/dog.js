const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
   
    name: {
        type: String,
        required: true
    },

    powers: {
        telepathy: Boolean,
        swimming: Boolean
    }

});


module.exports = mongoose.model('Dog', schema);