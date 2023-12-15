module.exports = function (io) {
    // io

    io.on("connect",  async(socket) => {
        console.log("client is connected", socket.id);

        socket.on("disconnect",  (reason) => {
            console.log("client disconnected", reason);
        });
    })
};