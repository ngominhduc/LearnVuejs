<template>
  <form>
    <label>name</label>
    <input type="text" required v-model = "name">
    <label>age</label>
    <input type="number" required v-model = "age">
    <label>dob</label>
    <input type="date" required v-model = "dob">
    <label>email</label>
    <input type="email" required v-model = "email">


    <button type="submit" v-on:click="onSubmit()">submit</button>
  </form>
  <p></p>
  <p>name : {{name}}</p>
  <p>age : {{age}}</p>
  <p>dob : {{dob}}</p>
  <p>email : {{email}}</p>
  <router-link to="/"><button>back to home page</button></router-link>
</template>

<script>
import studentService from "@/services/studentService";

export default {
  name: "addStudent",
  data(){
    return{
      name :'',
      age : '',
      dob : '',
      email:''
    }
  },
  methods:{
    onSubmit(){
      let student = {
        name:this.name,
        age:this.age,
        dob:this.dob,
        email:this.email
      };
      studentService.addStudent(student);

      console.log(student);
    }
  }
}
</script>

<style scoped>
form{
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label{
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ddd;
  color: #555;
}
</style>