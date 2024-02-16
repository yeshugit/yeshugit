

const recentPosts = [
{
  title: "How to Install and Setup Php Mysql in Termux?",
  permalink: "https://termhub.xyz/xion198/post/how-to-install-and-setup-php-mysql-in-termux/",
  date: "1707381492000"
},
{
  title: "Unlock Your Phone's Secret Superpower: The Beginer's Termux Guide.",
  permalink: "https://termhub.xyz/xion198/post/unlock-your-phones-secret-superpower-the-beginer-termux-guide/",
  date: "1706942163000"
},
];

function createPostList(post){
  const date = new Date(post.date).toLocaleDateString();
  return '<li><span class="fa fa-caret-right"></span> <a href="'+post.permalink+'">'+post.title+'</a></li>';
}

function renderPosts(){
  const recentPostsList = document.getElementById('recentPostsList');
  recentPostsList.innerHTML = '';
  
  recentPosts.forEach((post)=>{
    const postList = createPostList(post);
    recentPostsList.innerHTML += postList;
  });
}

document.addEventListener('DOMContentLoaded',renderPosts);