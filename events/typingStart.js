
    module.exports = (client, Channel, User) => {

        if(Channel.name == 'informations' || Channel.name == 'règlement' && User.id == "369301863113293834") {

            Channel.startTyping()

        }
    
    }