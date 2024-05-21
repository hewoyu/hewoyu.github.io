var posts=["2024/05/20/问题三/","2024/05/20/hello-world/","2024/05/21/obsidian的使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };