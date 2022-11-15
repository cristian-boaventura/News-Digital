import { RootState } from "@/store";
import { SyntheticEvent } from "react";
import { useSelector } from "react-redux";

const FullArticle = () => {
  const article = useSelector((state: RootState) => state.currentArticle);
  const { title, urlToImage, content, description, source, url } = article;

  return (
    <div>
      <div className=" my-16 mx-auto px-10">
        <section className="mb-32 text-gray-800">
          <div className="block rounded-lg bg-white shadow-lg">
            <div className="flex flex-wrap items-center">
              <div className="w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src={urlToImage}
                  alt={title}
                  className="w-full rounded-t-lg  lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-4 text-2xl font-bold">{title}</h2>
                  <p className="mb-6 flex items-center font-bold uppercase text-red-600">
                    {source.name}
                  </p>
                  <p className="mb-6 text-gray-500">{description}</p>
                  <p className="mb-6 text-gray-500">{content}</p>
                  <a href={url} target="_blank">
                    View on it's original source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullArticle;
