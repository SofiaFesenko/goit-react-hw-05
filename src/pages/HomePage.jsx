import axios from "axios";
import { useEffect, useState } from "react";


function HomePage() {

    const [articles, setArticles] = useState(null);
    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get(
                "https://api.themoviedb.org/3/trending/movie/day?api_key=ce1bdf60c90c5aff209d38216d693f24"
            );
            setArticles(response.data.results)
        }

        fetchMovies();
      }, []);

    return (
      <>
        <h1>Trending today</h1>
        {Array.isArray(articles) && articles.length > 0 && (
        <ul>
          { articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
      </>
    )
}
  
export default HomePage