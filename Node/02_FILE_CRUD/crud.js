const yargs = require("yargs")
const file = require("./file.js")

yargs.command({
    command:"add",
    builder:{
        name:{
            type:String
        },
        email:{
            type:String
        }, 
    },
    handler:function(argv){
        // console.log("add calling");
        // // console.log(argv.name+" "+argv.email);
        // console.log(argv);
        const data = {
            name : argv.name,
            email: argv.email
        }
        file.createFile(data)
    }
})

yargs.command({
    command:"view",
    handler:function(argv){
        // console.log("view calling");
        file.viewData()
    }
})

yargs.parse()