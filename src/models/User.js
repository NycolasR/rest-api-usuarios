const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: true,
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
    },
});

UserSchema.plugin(mongoosePaginate);
mongoose.model('User', UserSchema);