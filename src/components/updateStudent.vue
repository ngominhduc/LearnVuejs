<template>
  <h1>update student</h1>
  <p>The destination is : {{this.$route.params.id}}</p>
  <form>
    <div >
    <label>name:  </label>
    <input type="text" required v-model = "name">
    <label>age</label>
    <input type="number" required v-model = "age">
    <label>dob</label>
    <input type="date" required v-model = "dob">
    <label>email</label>
    <input type="email" required v-model = "email">
    </div>

    <button type="submit" v-on:click="onSubmit()">submit</button>
  </form>
  <p></p>
  <p>name : {{name}}</p>
  <p>email : {{email}}</p>
  <router-link to="/"><button>back to home page</button></router-link>
</template>

<script>
import studentService from "@/services/studentService";

export default {
  name: "updateStudent",
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
      studentService.updateStudent(this.$route.params.id, student);
    },
    getStudentByID(){
      studentService.getStudentByID(this.$route.params.id);
    },
    created(){
      this.getStudentByID();
    }
  }
}
</script>

<style scoped>

</style>