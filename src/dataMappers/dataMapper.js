const Tag = require('../models/tag')
// remember the fact that it's all about modules 
// module can be a function , an object ... 
// here Tag is a Class 
// You know that you will need the Class to format data coming from the backend so from the database the api (web service) is a guard for.
// you will need to do so to make sure the data is the way your want before reaching the user of the app
// if you don't care about formatting it you risk making your app bug or even crash

const dbClient = require('../database');
// you need a client to access the database when your queries are sent 
// make sure to go checkout postgres website 

const dataMapper = {

    // the mapper is an object 
    // it doest several things but don't about the context it does it. It does care about what is passed as an argument to its methods
    // in others words if you care you should get those methods into a real specific context such as a Class


    //read
    async findAllTags(){


        // notions to see : await /async

        // as you can see we use async await because we are going to wait for the data to come into the results variable , we don't want anything to happen until it's done.
        const results = await dbClient.query('SELECT * FROM "tag"');

        // tags is a variable that is going to hold a value which will be an array , we hope, will not remain empty
        const tags = [];


        results.rows.forEach((row) => {

            // each rows in the tag table into the DB is an object { id : ..., name: ...}
            // we want to make sure  the format is what we want so we user model to format the data into the desired one. 
            const tag = new Tag(row)
            // after that our tag is fully-formatted and ready to be used. 
            // we push the formatted data into the array 
            tags.push(tag);

        })


        // we return the array filled with our formatted tags.
        // as you saw when we "node test.js" at the end of the class
        return tags;
    },

    async findOneTag(id){


        // findOneTag is a little bit more precise, for it queries a specific tag via its id.
        // the syntax is to be very carefully observed.
        const result = await dbClient.query('SELECT * FROM "tag" WHERE "id" = $1', [id]);

        //we already know that a tag is unique throught its id so we know it's going to be an array of rows but containg only one element
        const rawTag = result.rows[0];// so we get that element through [O]

        if(!rawTag){
            // don't forget to handle the case where there is nothing to get
            return null;
        }

        return new Tag(rawTag);


    }


}

module.exports = dataMapper;