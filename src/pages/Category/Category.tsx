import { ArticlesList } from "@/components";
import categories from "@/data/categories.json";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }: any) {
  const categoryExists = categories.includes(params.category);

  if (!categoryExists) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return params.category;
}

const Category = () => {
  const category = useLoaderData() as string;

  return <ArticlesList category={category} />;
};

export default Category;
