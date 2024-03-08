const childProcess = require('child_process');
const fs = require('fs');

function postsList(){
  const postsList = fs.readFileSync('./posts.json','utf-8');
  return JSON.parse(postsList);
}

function create(post){
  console.log('Createing post: ' + post);
  return post + ' Created.';
}
async function createPostsList(){
  return new Promise((resolve, reject) => {
    childProcess.exec('hexo list post| grep _posts', (err, stdout, stderr) => {
      if(err){
        reject('error');
      }
      let lines = stdout.split('\n');
      let posts = [];
      
      lines.forEach((line) => {
        if(!line){
          return;
        }
        const date = line.split(' ')[0];
        const post = line.split('_posts/')[1].split(' ')[0];
        const title = line.split('_posts')[0].slice(12).trim();
        
        const item = {
          date: date,
          post: post,
          title: title
        }
        
        posts.push(item);
      });
      
      fs.writeFile('./posts.json', JSON.stringify(posts), 'utf-8', (err) => {
        if(err){
          console.error(err);
          reject(err);
          return;
        }
        resolve('ready');
      });
      
    });
  });
}

module.exports = {
  create,
  createPostsList,
  postsList
};