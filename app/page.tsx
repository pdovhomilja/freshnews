import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";

async function Homepage() {
  //fetch the news data

  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log(news, "news");
  return (
    <div>
      <h1 className=""></h1>
    </div>
  );
}

export default Homepage;
