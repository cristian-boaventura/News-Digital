import { ArticleCard } from "@/components";
import { RootState } from "@/store";
import { getTopHeadlines } from "@/utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Saved = () => {
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <div className="xl mx-4 mt-4 grid max-w-6xl gap-y-4 gap-x-4 sm:mx-8 md:mx-16 lg:grid-cols-2 xl:mx-auto">
      <h2 className="col-span-full text-xl font-medium ">Saved News</h2>
      {favorites[0]
        ? favorites.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))
        : "No saved news"}
    </div>
  );
};

export default Saved;
