import { createRouter, createWebHistory } from 'vue-router'
import addStudent from "@/components/addStudent";
import updateStudent from "@/components/updateStudent";
import Student from "@/components/Student";


const routes = [
  {
    path: '/',
    name: 'Student',
    component: Student
  },
  {
    path: '/addStudent',
    name: 'AddStudent',
    component: addStudent
  },
  {
    path: '/updateStudent/:id',
    name: 'UpdateStudent',
    component: updateStudent,
    pros:true
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
