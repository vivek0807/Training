const seneca=require('seneca')({log:"silent"})
const io = require('console-read-write');

//senecaobj.quite();
//console.log(seneca.id)

/*Adding Pattern====================================================*/

seneca.add({role:"math", action:"multiply"},(args, respond)=>{
   // const res=args.a+args.b;
    respond(null,{result : args.a*args.b})
})

seneca.add({role:"math",action:"add"},(args,respond)=>{
    const res=args.a+args.b;
    respond(null,{result :res})
});

seneca.add({role :"greet",action: "view"},(args,respond)=>{
    respond(null , {message :"Welcome "+args.name})
})

seneca.add({role:"skills",action:"display"},(args,respond)=>{
    console.log(skills);
})

seneca.add({role:"skills",action:"check"},(args,respond)=>{
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

seneca.add({role:"skills",action:"addnew"},(args,respond)=>{

    seneca.act({role:"skills",action:"check",skill1:args.skill1},(err,recieve)=>{
        if(err)
            console.log("Some Error occured")
        else
           { console.log(recieve.message);
            respond(null,{message : recieve.message})
        }
    })

    
})

/*Passing Method*===================================================================================================================================================================================================*/


seneca.act({role:"math",action:"add",a:10,b:10},(err,recieve)=>{
    if(err)
        console.log("Error")
    else
       { console.log(recieve);
        console.log(`received via json ${recieve.result}`)
    }
})



            /*=======*/
seneca.act({role:"math",action:"multiply",a:10,b:10},(err,recieve)=>{

    if(err)
        console.log("Some Error recured")
    else
        console.log("Multiply "+recieve.result);
})
             /*=======*/
seneca.act({role :"greet", action : "view",name:"Vivek"},(err,recieve)=>{
    if(err)
        console.log("Error in displaying Message")
    else
        console.log(recieve.message);
})

var skills=["C"]


seneca.act({role:"skills",action:"addnew",skill1:"C"},(err,recieve)=>{
        if(err)
            console.log("Some error Occured")
        else
            console.log(recieve.message);
})

/*while(true){
    async function skills(param) {
        input=await io.read()
        console.log("Input was"+input);
      }
}*/
