import axios from "axios";

export const client = axios.create({
  baseURL: "https://newsapi.org",
  headers: { "X-Api-Key": `${import.meta.env.VITE_NEWS_API_KEY}` },
});

export const getSearch = async (input: string) => {
  try {
    const { data } = await client.get(
      `/v2/everything?q=${encodeURIComponent(`${input}`)}`
    );
    const { articles } = data;

    return articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTopHeadlines = async (country: string, category: string) => {
  try {
    const { data } = await client.get(
      `/v2/top-headlines?country=${country}&category=${category}`
    );

    const { articles } = data;

    return articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
