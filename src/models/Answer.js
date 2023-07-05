const CoreModel = require('./CoreModel');

class Answer extends CoreModel {

    description; 

    constructor(obj){
        super(obj)

        // type guards and format checkings 
        if(typeof obj.description !== "string" || typeof obj.description === null){

            throw new Error("Answer description must be a string or not null");

        }

        this.description = obj.description;

    }


}


module.exports = Answer;

