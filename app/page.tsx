import Header from "./components/Header";
import AddBlogButton from "./components/AddBlogButton";
import PostsList from "./components/PostsList";

async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data.posts;
}

export default async function Home() {
  const posts = await fetchBlogs();
  // console.log(posts);

  return (
    <main className="w-full h-full">
      <Header />
      <AddBlogButton />
      <PostsList posts={posts} />
    </main>
  );
}
