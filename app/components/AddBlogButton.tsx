import React from "react";
import Link from "next/link";

const AddBlogButton = () => {
  return (
    <div className="flex my-5">
      <Link
        href="/blog/add"
        className="md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold "
      >
        Add New Blog 📝
      </Link>
    </div>
  );
};

export default AddBlogButton;
