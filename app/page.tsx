import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";
import NewsList from "./NewsList";
//import response from "../response.json";

async function Homepage() {
  //fetch the news data

  const news: NewsResponse =
    //response || (await fetchNews(categories.join(",")));
    await fetchNews(categories.join(","));
  //console.log(news, "news");
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
