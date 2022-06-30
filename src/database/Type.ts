export interface User{
    userName:String
    password:String
    role:String

}
export interface ResultVO {
    code: number
    message?: string
    data?: any
  }

export interface Student{
    userName:String
    password:String
    teacherName:String
    teacherSelect:boolean

}
export interface Teacher{
    userName:String
    password:String
    studentNumber:number
    studentsList:Student[]
}
export function listStudents():Student[]{
    const students: Student[] =[
        {userName:"1001",password:"1001",teacherName:"2001",teacherSelect:true},
        {userName:"1002",password:"1002",teacherName:"2001",teacherSelect:true},
        {userName:"1003",password:"1003",teacherName:"2001",teacherSelect:true},
        {userName:"1004",password:"1004",teacherName:"2002",teacherSelect:true},
        {userName:"1005",password:"1005",teacherName:"",teacherSelect:false},
        {userName:"1006",password:"1006",teacherName:"",teacherSelect:false},
    ]
    return students
}
export function listTeachers():Teacher[]{
    const teachers:Teacher[]=[
        {userName:"2001",
            password:"2001",
            studentNumber:3,
            studentsList:[
                {userName:"1001",password:"1001",teacherName:"2001",teacherSelect:true},
                {userName:"1002",password:"1002",teacherName:"2001",teacherSelect:true},
                {userName:"1003",password:"1003",teacherName:"2001",teacherSelect:true},]
        },
        {userName:"2002",
            password:"2002",
            studentNumber:3,
            studentsList:[
                {userName:"1004",password:"1004",teacherName:"2002",teacherSelect:true}]
        },
        {userName:"2003",
            password:"2003",
            studentNumber:3,
            studentsList:[]
        },
        {userName:"2004",
            password:"2004",
            studentNumber:3,
            studentsList:[]
        }
    ]
    return teachers
}
export function getTeacher(teacherlist:Teacher[],userName:String){
    return teacherlist.find((teacher)=>teacher.userName==userName)
}
export function getStudent(studentlist:Student[],userName:String){
    return studentlist.find((student)=>student.userName==userName)
}