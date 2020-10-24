//let arr; 
module.exports = function catalogplugin(options) {
    this.add({ init: "catalogplugin" }, (args, respond) => {
        console.log("Catalog plugin initialized");
       // arr = require("./books.json");
       /*  const books = this.make$("books")
        books.list$({}, (err, books) => {
            arr = books; console.log(books)
            respond();
        }); */
        respond();        
});
    
    this.add({ role: "catalog", action: "searchbyname" }, (args, respond) => {
        const booksEntity = this.make$("books")
        booksEntity.list$({ title: args.title }, (err, books) => {     
            respond(null, books);
        })
    })

this.add({role:"catalog",action :"searchbycategory"},(args,respond) =>{
/* result=arr.filter(val => val.category == args.category)
respond(null, result); */
    const booksEntity = this.make$("books")
        booksEntity.list$({ category: args.category }, (err, books) => {     
            respond(null, books);
        })
})

this.add({role:"catalog",action :"searchbyrating"},(args,respond) =>{
/* result=arr.filter(val => val.rating == args.rating)
respond(null, result);*/
    const booksEntity = this.make$("books")
    
        booksEntity.list$({ rating: parseInt(args.rating) }, (err, books) => {     
            respond(null, books);
        })
}) 
}