module.exports = {
    // The name of the command, this has to be different in every command
    name: "ping",
    // The function to run every time the command is ran by a user
    run: (message) => {
      message.reply("**🏓Pong!**")
    }
  }