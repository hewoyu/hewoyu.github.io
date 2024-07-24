var posts=["2024/05/21/obsidian的使用/","2024/06/20/TIAI/","2024/07/24/安知鱼博客页面配置/","2024/07/24/欢迎/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };