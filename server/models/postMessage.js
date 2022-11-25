import mongoose from 'mongoose';

//Schema create document one can have title and message and so on
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;