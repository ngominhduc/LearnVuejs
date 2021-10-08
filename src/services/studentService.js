import axios from "axios";

const STUDENT_API_BASE_url = 'http://localhost:8080/api/v1/student'

class studentService {
    getStudents() {
        return axios.get(STUDENT_API_BASE_url);
    }

    getStudentByID(id){
        return axios.get(STUDENT_API_BASE_url+"/"+id);
    }

    deleteStudent(id) {
        axios.delete(STUDENT_API_BASE_url + "/" + id).then(
            response => {
                if (response.data != null) {
                    alert("student deleted");
                }
            }
        );
    }

    addStudent(student){
        axios.post(STUDENT_API_BASE_url, student).then(response=>{
            alert("student added");
            console.log(response);
        });
    }

    updateStudent(id, student){
        axios.put(STUDENT_API_BASE_url + "/" + id, student).then(reponse=>{
            console.log(reponse);
        })
    }
}

export default new studentService()