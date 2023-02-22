
import {
    addPlayer,
    getPlayers,
    getPlayerByname,
    updatePlayerBygoals,
    deletePlayerByname
} from '../controller/restController.js';


const allRoutes = (app) => {

    app.route('/footballplayers')

        .get(
            getPlayers
        )

        .post(
            addPlayer
        );

    app.route('/player/:playername')

        .get(
            getPlayerByname
        )

        .delete(
            deletePlayerByname
        )

        .put(
            updatePlayerBygoals
        );
}

export default allRoutes;