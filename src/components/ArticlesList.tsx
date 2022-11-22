import { Article } from "@/models";
import { RootState } from "@/store";
import { getTopHeadlines } from "@/utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ArticleCard } from "./";

const ArticlesList = ({ category }: { category: string }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const country = useSelector((state: RootState) => state.country);
  const [isError, setIsError] = useState(false);

  const categoryUppercase =
    category.charAt(0).toUpperCase() + category.slice(1);

  useEffect(() => {
    const showTopHeadlines = async () => {
      try {
        const response = await getTopHeadlines(country.code, category);
        setArticles(response);
      } catch (e) {
        setIsError(true);
      }
    };

    showTopHeadlines();
  }, [country, category]);

  return (
    <div className="xl mx-4 mt-4 grid max-w-6xl gap-y-4 gap-x-4 sm:mx-8 md:mx-16 lg:grid-cols-2 xl:mx-auto">
      <h2 className="col-span-full text-xl font-medium " data-test="heading">
        {country.name} {category === "general" ? "Top" : categoryUppercase}{" "}
        Headlines
      </h2>
      {isError ? (
        <p>Sorry, an unexpected error has occurred.</p>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))
      )}
    </div>
  );
};

export default ArticlesList;
