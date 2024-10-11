import DBLocal from "db-local"

const {Schema} = new DBLocal({path:'./db'})

const User = Schema('User',{
    _id:{type:String, required: true},
    username:{type:String, required:true},
    password:{type:String, required:true}
})

export default class{
    static create({username, password}){
        Validation.name(username)
        Validation.password(password)
    }
}

export class Validation{
    static name(username){
        if(typeof username != 'string') throw new Error('The username must be string')
        if(username.length < 3) throw new Error('The username must be more 3 characters')
    }
    static password(password){
        if(typeof password != 'string') throw new Error('The password must be string')
        if(password.length < 6) throw new Error('The password must be more 6 characters')
    }
}