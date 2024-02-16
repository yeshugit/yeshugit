document.addEventListener('DOMContentLoaded', function() {

  // Burger menu functionality:
  const navbarBurger = document.querySelector('.navbar-burger');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarBurger.addEventListener('click', function() {
    navbarBurger.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  });

  // Search functionality:
  var searchData = document.createElement('script');
  searchData.src = "/js/search.js";
  document.head.appendChild(searchData);
  
  var idx;
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('focus',function(){
    idx = lunr(function(){
      this.ref('id');
      this.field('title');
      
      posts.forEach(function(post){
        this.add({
          id: post.id,
          title: post.title,
          permalink: post.permalink
        });
      },this);
    });
  });
  
  searchInput.addEventListener('keyup',function(){
    const query = this.value;
    
    if(query == ''){
      return;
    }
    
    const results = idx.search(query).map((result)=>{
      
      for(const post of posts){
        if(post.id === result.ref){
          return '<li class="box"><span class="fa fa-caret-right"></span> <a href="'+post.permalink+'">'+post.title+'</a></li>';
        }
      }
      
    }).join('');
    
    
    var searchResult = document.getElementById('search-result');
    searchResult.innerHTML = results+'<div class="is-clearfix"></div>';
  });
});