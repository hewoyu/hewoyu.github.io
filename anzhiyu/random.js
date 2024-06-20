var posts=["2024/05/21/obsidian的使用/","2024/06/20/TIAI/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };