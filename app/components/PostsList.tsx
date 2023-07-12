import React from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface Props {
  posts: Post[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {posts?.map((post: any) => (
        <div className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center">
          {/* Title and Action */}
          <div className="flex items-center my-3">
            <div className="mr-auto">
              <h2 className="mr-auto font-semibold">{post.title}</h2>
            </div>
            <Link
              href={`/blog/edit/${post.id}`}
              className="px-4 py-1 text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200"
            >
              Edit
            </Link>
          </div>
          {/* Date and Description */}
          <div className="mr-auto my-1">
            <blockquote className="font-bold text-slate-700">
              {new Date(post.date).toDateString()}
            </blockquote>
          </div>
          <div className="mr-auto my-1">
            <h2>{post.description}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
