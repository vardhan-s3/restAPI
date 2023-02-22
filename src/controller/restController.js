
import mongoose from 'mongoose';


import { footballplayersSchema } from '../model/restModel.js';


const Player = mongoose.model('Player', footballplayersSchema);


export const addPlayer = (req, res) => {

    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {

        if (err) {
            res.send(err);
        }

        res.json(player)
    });

}


export const getPlayers = (req, res) => {

    Players.find({}, (err, player) => {

        if (err) {
            res.send(err);
        }

        res.json(player);
    });

}


export const getPlayerByname = (req, res) => {

    Player.findByname(req.params.playername, (err, player) => {

        if (err) {
            res.send(err);
        }

        res.json(player);
    });

}


export const updatePlayerBygoals = (req, res) => {

    Player.findOneAndUpdate({ _id: req.params.playername },

        req.body,

        { new: true },

        (err, player) => {

            if (err) {
                res.send(err);
            }

            res.json(player);
        });

}


export const deletePlayerByname = (req, res) => {

    Player.remove({ _id: req.params.playername },

        (err, player) => {

            if (err) {
                res.send(err);
            }

            res.json({ message: "The player was deleted." });
        });

}