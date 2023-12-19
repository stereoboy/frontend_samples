const userController = require('../controllers/user.controller');
const chatController = require('../controllers/chat.controller');

module.exports = function (io) {
    // io

    io.on("connect",  async(socket) => {
        console.log("client is connected", socket.id);

        socket.on("login", async(userName, cb) => {
            console.log("user is logged in as ", userName);
            try {
                const user = await userController.saveUser(userName, socket.id);
                cb({ok:true, data:user});
            } catch (err) {
                cb({ok: false, err: err.message});
            }
        });
        socket.on("sendMessage", async(message, cb) => {
            try {
                const user = await userController.checkUser(socket.id)
                const newMessage = await chatController.saveChat(message, user)
                io.emit("message", newMessage);
                cb({ok:true});

            } catch (err) {
                console.error(err);
                cb({ok: false, err: err.message});
            }
        });

        socket.on("disconnect",  (reason) => {
            console.log("client disconnected", reason);
        });
    })
};