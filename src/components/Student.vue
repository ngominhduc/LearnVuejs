<template>
  <div class="container">
    <h1 class="text-center">Student List</h1>
    <router-link to="/addStudent"><button class="btn btn-primary" type="button" >add new student</button></router-link>
    <table class="table table-striped">
      <thead>
      <th>Student Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>DOB</th>
      <th>Email</th>
      </thead>
      <tbody>
      <tr v-for="student in students" v-bind:key="student.id">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.age }}</td>
        <td>{{ student.dob }}</td>
        <td>
          {{ student.email }}
          <router-link :to="{name: 'UpdateStudent', params: {id: student.id }}"><button class="btn btn-primary" type="button" >update</button></router-link>
          <button class="btn btn-primary" type="button" v-on:click="deleteStudent(student.id)">delete</button>
        </td>
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import studentService from "@/services/studentService";

export default {
  name:'Students',
  props: ['id'],
  data(){
    return{
      students : []
    }
  },
  methods:{
    getStudents(){
      studentService.getStudents().then((response) => {
        this.students = response.data;
      });
    },

    async deleteStudent(id){
      await studentService.deleteStudent(id);
      this.getStudents();
    }
  },
  created(){
    this.getStudents();
  }
}
</script>

<style>

</style>