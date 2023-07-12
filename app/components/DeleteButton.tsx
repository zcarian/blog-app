import { Fragment } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const deleteBlog = async (id: string) => {
  const res = fetch(`http://localhost:3000/api/blog/${id}`, {
    method: "DELETE",
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    toast.loading("Deleting Blog...", { id: "2" });
    await deleteBlog(id);
    toast.success("Blog Deleted", { id: "2" });
    router.push("/");
  };

  return (
    <button
      onClick={handleDelete}
      className="font-semibold px-4 py-2 shadow-xl bg-red-400 rounded-lg mt-2 m-auto hover:bg-red-500"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
