
class Student {

  name;
  age;
  constructor(){

  }

  setName(name){
      this.name = name;
  }

  create(){
    const query = "INSERT INTO student (name, age) VALUES ($1, $2)";
    const values = [this.name, this.age];
    return db.query(query, values);
  }

}



const student = new Student(); // new instance 

student.setName("Arnaud");
student.create();


const student2 = new Student();// new instance 


student2.setName("Marie");


const  dataMapper = require('dataMapper');

dataMapper.addEntity(student);
dataMapper.addEntity(student2);
dataMapper.save();











