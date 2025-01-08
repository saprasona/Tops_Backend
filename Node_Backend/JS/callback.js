
// const add = (a,b,callback)=>{
//     callback(a+b, a*a, a*a*a)
// }

// add(10,20,(a,b,c)=>{
//     console.log(a+" "+b+" "+c)
// })


const students = (name,callback)=>{
    const list =  [
        {name:"John", age:20},
        {name:"Jane", age:22},
        {name:"Mike", age:21},
    ]

    const data =  list.find(ele=>{
        return ele.name==name
    })
    if(data)
        {
            callback(data)
        }
        else{
            callback("Not Found")
        }

}

const studentInfo = (name,callback)=>{
    
    const list =  [
        {name:"John", age:20,email:"jon@gmail.cop", phone:9099968585},
        {name:"test", age:20,email:"test@gmail.cop", phone:9099558585},
        {name:"abc", age:20,email:"abc@gmail.cop", phone:90999645485},
    ]

    const data =  list.find(ele=>{
        return ele.name==name
    })

    if(data)
    {
        callback(data)
    }
    else{
        callback("Not Found")
    }
 
}

students("John",(data)=>{
   
       studentInfo(data.name,(info)=>{
            console.log(info.name+" "+info.age+" "+info.email+" "+info.phone);
            
       })
      
})