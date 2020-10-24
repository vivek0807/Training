var skills=["C"]

function myplugin(options){
console.log(options.message)

/*this.add({role:"skills",action:"display"},(args,respond)=>{

    console.log(skills);
})*/

this.add({role:"skills",action:"check"},(args,respond)=>{
    if(skills.indexOf(args.skill1)==-1)
        {   
            skills.push(args.skill1)
            console.log(skills);
            respond(null,{message : 'Added'})
        }
    else
        {//console.log("Skill already exitst")
        respond(null,{message : 'Skill present'})
    }
})

this.add({role:"skills",action:"addnew"},(args,respond)=>{

    this.act({role:"skills",action:"check",skill1:args.skill1},(err,recieve)=>{
        if(err)
            console.log("Some Error occured")
        else
           { console.log(recieve.message);
            respond(null,{message : recieve.message})
        }
    })

    
})
}
module.exports=myplugin;