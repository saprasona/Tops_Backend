const students = (name)=>{

    return new Promise((resolve,reject)=>{
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
                resolve(data)
            }
            else{
                reject("Not Found")
            }
    })    
}


const studentInfo = (name)=>{
    
    return new Promise((resolve,reject)=>{
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
            resolve(data)
        }
        else{
            reject("Not Found")
        }
    })
}

// students("Jofhn").then(data=>{
    
//     return studentInfo(data.name)
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);  // Not Found
// })

const test = async ()=>{

    try {
        const data = await students("Jgohn")
        console.log(data);
        const r = await studentInfo(data.name)
        console.log(r);
    } catch (error) {
        console.log(error);   
    }  
}


test()