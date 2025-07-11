var book= {
    bookName :"How to C?",
    authorName:"Yashwant",
    chapters:[
        {
            startPage:1,
            endPage:10,
            chapterName:"What is C?"
        },{
            startPage:11,
            endPage:20,
            chapterName:"variables C?"
        }
    ]
}

console.log(book["bookName"])
for(let chapter of book.chapters){
    console.log(chapter["chapterName"])
    console.log("chapterName" in chapter)
    //to check whether a property is present in given object or not
}