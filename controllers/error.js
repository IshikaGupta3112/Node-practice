exports.get04 =(req , res , next)=>{
    // res.status(404).sendFile(path.join(__dirname , "views" , "404.html"));
    res.render("404" , {docTitle:"404"});
    }