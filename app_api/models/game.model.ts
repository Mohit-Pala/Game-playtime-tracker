import { Schema, Document, model } from "mongoose"

export interface IGame extends Document {
    _id: String;
    name: String;
    playtime: Number;
    rating: String;
    icon: String;
    banner: String;
    saveFile: String;
}

const gameSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },

    playtime: {
        type: Number,
        required: true
    },
    rating: Number,
    icon: String,
    banner: String,
    saveFile: String
})

export default model<IGame>('Game', gameSchema);