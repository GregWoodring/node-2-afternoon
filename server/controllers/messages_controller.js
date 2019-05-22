let messages = [];
let id = 0;

module.exports = messages_controller = {
    create: function(req,res,next){
        let {text, time} = req.body
        // let time = new Date();
        messages.push({text, time, id});
        id++;
        res.send(messages).status(200);
    },

    read: function(req,res,next){
        res.send(messages).status(200);
    },

    update: function(req,res,next){
        let message = messages.find(item => item.id = req.params.id)
        let index = messages.findIndex(item => item.id = req.params.id)
        message.text = req.body.text;
        messages.splice(index, 1, message)
        res.send(messages).status(200);
    },

    delete: function(req,res,next){
        let index = messages.findIndex(item => item.id = req.params.id)
        messages.splice(index,1);
        res.send(messages).status(200);
    }
}