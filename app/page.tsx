import { categories } from "../constants";

async function Homepage() {
  //fetch the news data

  const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <div>
      <h1 className=""></h1>
    </div>
  );
}

export default Homepage;
