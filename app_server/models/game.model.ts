import { Schema, Document, model } from "mongoose";

export interface Games extends Document {
    name: String,
    playtime: Number,
    rating: Number,
    comments: String,
}

const gameSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    playitme: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    comments: {
        type: String,
    },
})

export default model<Games>('Game', gameSchema)