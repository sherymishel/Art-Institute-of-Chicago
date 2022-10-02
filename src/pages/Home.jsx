import React from "react";
import "../App.css";
import Cards from "../Cards";
import Pagination from "../Pagination";
import Search from "../Search";
import Spinner from "../Spinner";
import Limit from "../Limit";
import { DataContext } from "../App";
import LinearBuffer from "../Spinner";

function Home() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(12);
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(null);
  const { cardsReload, setCardsReload } = React.useContext(DataContext);
  // const defUrl = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`;
  // const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${search}&page=${page}&limit=${limit}&fields=id,image_id,title,date_display,artist_title`;
  // let url;
  // if (search === "") {
  //   url = defUrl;
  //   console.log(1);
  // } else {
  //   url = searchUrl;
  //   console.log(2);
  // }
  const [arr, setArr] = React.useState([]);
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    const defUrl = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`;
    const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${search}&page=${page}&limit=${limit}&fields=id,image_id,title,date_display,artist_title`;
    console.log(search);
    if (search === "") {
      setUrl(defUrl);
      setArr((prev) => [...prev, 1]);
    } else {
      setUrl(searchUrl);
      setArr((prev) => [...prev, "search"]);
    }
  }, [search, page, limit]);

  React.useEffect(() => {
    if (typeof arr[arr.length - 1] !== typeof arr[arr.length - 2]) {
      setPage(1);
    }
  }, [arr]);

  const clickPage = (page) => {
    setPage(page);
  };

  const { setItemsNum } = React.useContext(DataContext);

  const clickLimit = (limit) => {
    setPage(1);
    setLimit(limit);
    setItemsNum(limit);
  };

  async function getInfo(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      window.scrollTo(0, 0);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    getInfo(url);
    console.log(cardsReload);
  }, [url, cardsReload]);

  return (
    <div className="app" style={{ margin: "3%" }}>
      <div>
        <Search setSearch={setSearch} />
        <Limit clickLimit={clickLimit}></Limit>
        {loading ? (
          // <div style={{ marginBottom: "200px" }}>
          <LinearBuffer />
        ) : (
          // </div>
          <>
            <Cards results={data ? data : null} />
          </>
        )}
      </div>
      <div className="pagination">
        <Pagination
          pagesQuant={data.pagination}
          clickPage={clickPage}
          page={page}
        />
      </div>
    </div>
  );
}

export default Home;
