class CoreModel {

  id;

  constructor(obj){
      // type guards
    //   if(typeof obj.id !== "number" || obj.id <= 0){
    //       throw new Error("The id must be a positive number")
    //   }
      this.id = obj.id
  }
}

module.exports = CoreModel
