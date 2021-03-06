const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    title: RequiredString,
    description: RequiredString,
    url: RequiredString
});

module.exports = mongoose.model('Image', schema);