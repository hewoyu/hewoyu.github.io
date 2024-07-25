var posts=["2024/05/21/obsidian的使用/","2024/07/24/安知鱼博客页面配置/","2024/06/20/马克思主义/","2024/07/24/安知鱼博客文章页面配置/","2024/07/24/教师资格证 综合素质--国家实施素质教育的基本要求/","2024/07/25/教师资格证 综合素质--学生观/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };