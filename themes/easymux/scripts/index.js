
hexo.on('new',function(post){
  const fs = require('fs');
  const newFile = post.path.replace('_posts','tutorial');
  console.log(newFile);
  
  
  fs.rename(post.path,newFile, (err)=>{
    if(err){
      console.error("Error creating post");
    }else{
      console.log("post created.")
    }
  }); 
});
