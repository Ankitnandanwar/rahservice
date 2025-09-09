import React from "react";

const blogs = [
  {
    id: 1,
    title: "5 steps to becoming GDPR compliant on mobile apps",
    excerpt:
      "Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim.",
    author: "Shubham Ghadai",
    date: "Sep 9, 2025",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Measuring app success through mobile analytics",
    excerpt:
      "Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    author: "Admin",
    date: "Aug 28, 2025",
    image:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "How accessibility will influence your app development",
    excerpt:
      "Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem auctor malesuada.",
    author: "Infosai Softwares",
    date: "Aug 15, 2025",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=870&auto=format&fit=crop",
  },
];

function Blogs() {
  return (
    <section className="w-full py-12 px-4 sm:px-8 lg:px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends and insights from the tech world.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white duration-300 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-3xl rounded-bl-3xl"
            />
            <div className="p-6 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                {blog.title}
              </h2>
              <p className="text-gray-500 text-sm mb-6">{blog.excerpt}</p>
              <button className="py-2 px-6 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
