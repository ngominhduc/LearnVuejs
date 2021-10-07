import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home";
import addStudent from "@/components/addStudent";
import updateStudent from "@/components/updateStudent";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addStudent',
    name: 'AddStudent',
    component: addStudent
  },
  {
    path: '/updateStudent',
    name: 'UpdateStudent',
    component: updateStudent
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
