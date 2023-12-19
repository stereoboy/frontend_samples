const User = require("../models/user");
const userController = {}


userController.saveUser = async (userName, sid) => {
    let user = await User.findOne({name: userName});

    console.log("sid:", sid);
    if (!user) {
        console.log("User not found");
        user = new User({
            name: userName,
            token: sid,
            online: true,
        });
    } else {
        console.log("User found. already on the database");
        user.token = sid;
        user.online = true;
    }
    await user.save();
    console.log("User saved successfully,", user);
    return user;
};

userController.checkUser = async (sid) => {
    const user = await User.findOne({token: sid});
    if (!user) throw new Error("User not found");
    return user;
}

module.exports = userController;