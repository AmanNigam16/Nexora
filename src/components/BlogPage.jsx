const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "How to Host a Successful Virtual Event",
      date: "September 26, 2024",
      excerpt: "Hosting a virtual event can be daunting. Here are some tips to ensure success.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NDR8MHwxfGFsbHwxfHx8fHx8fHwxNjQ4Njg2MjM5&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
      id: 2,
      title: "Engaging Your Audience in Virtual Spaces",
      date: "September 22, 2024",
      excerpt: "Learn how to keep your audience engaged during virtual events with these effective strategies.",
      image: "https://kongres-magazine.eu/wp-content/uploads/2021/05/tallinn_estonia.png?x36696"
    },
    {
      id: 3,
      title: "The Future of Events: Virtual vs In-Person",
      date: "September 15, 2024",
      excerpt: "What does the future hold for events? A look at the benefits of virtual and in-person gatherings.",
      image: "https://media.licdn.com/dms/image/D4E12AQGaChQm3Q7MEQ/article-cover_image-shrink_720_1280/0/1707993213998?e=2147483647&v=beta&t=4nCxjUU_zIBI8wvW5jAfG8zNw6iXczjSCZhx2i657Qk"
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Nexora Blog</h1>
      <div className="blog-posts">
        {posts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
