import Link from "next/link";

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
  // const posts = await fetchBlogs();
  // console.log(posts);

  return (
    <main className="w-full h-full">
      <div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-4 rounded-lg bg-slate-800 drop-shadow-xl">
        <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana]">
          Fluu Stack Blog app
        </h1>
      </div>
      <div className="flex">
        <Link
          href="/blog/add"
          className="md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold "
        >
          Add New Blog 📝
        </Link>
      </div>
    </main>
  );
}
