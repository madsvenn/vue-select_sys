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
    name: String
    userName:String
    password:String
    teacherName:String
    teacherSelect:boolean

}
export interface Teacher{
    name: String
    userName:String
    password:String
    studentNumber:number
    studentsList:Student[]
}

const teachers:Teacher[]=[
    {
        name:"善老师",
        userName:"001",
        password:"001",
        studentNumber:3,
        studentsList:[
            {name:'小千',userName:"2001",password:"2001",teacherName:"001",teacherSelect:true},
            {name:'小曜',userName:"2002",password:"2002",teacherName:"001",teacherSelect:true},
            {name:'小南',userName:"2003",password:"2003",teacherName:"001",teacherSelect:true},]
    },
    {
        name:"梨老师",
        userName:"002",
        password:"002",
        studentNumber:2,
        studentsList:[
            {name:'小丸',userName:"2004",password:"2004",teacherName:"002",teacherSelect:true}]
    },
    {
        name:"鞠莉老师",
        userName:"003",
        password:"003",
        studentNumber:1,
        studentsList:[]
    },

]
const students: Student[] =[
    {name:'小千',userName:"2001",password:"2001",teacherName:"001",teacherSelect:true},
    {name:'小曜',userName:"2002",password:"2002",teacherName:"001",teacherSelect:true},
    {name:'小南',userName:"2003",password:"2003",teacherName:"001",teacherSelect:true},
    {name:'小丸',userName:"2004",password:"2004",teacherName:"002",teacherSelect:true},
    {name:'小露',userName:"2005",password:"2005",teacherName:"",teacherSelect:false},
    {name:'小黛',userName:"2006",password:"2006",teacherName:"",teacherSelect:false},
]
export function listStudents():Student[]{
    
    return students
}
export function listTeachers():Teacher[]{
    
    return teachers
}
export function getTeacher(teacherlist:Teacher[],userName:String){
    return teacherlist.find((teacher)=>teacher.userName==userName)
}
export function getStudent(studentlist:Student[],userName:String){
    return studentlist.find((student)=>student.userName==userName)
}

