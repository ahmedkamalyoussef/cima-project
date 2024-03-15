import React, { useEffect, useState } from "react";
import Item from "../item/item";
import { trending,topRated } from "../../api/Api";
import Loading from "../Loading/Loading";
import { Offline } from "react-detect-offline";
import { useSelector } from "react-redux";
import TopRated from "../TopRated/TopRated";

function Home() {
  let { searchVal } = useSelector((search) => search.search);

  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [tv, setTv] = useState([]);
  const [tv2, setTv2] = useState([]);
  async function fetchData() {
    try {
      const data = await trending("movie");
      setMovies(data);
      setMovies2(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const data = await trending("tv");
      setTv(data);
      setTv2(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies2(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
    setTv2(
      tv.filter((show) =>
        show.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  }, [searchVal]);
  return (
    <>
      <Offline>
        <Loading />
      </Offline>
      
      {searchVal===""?<TopRated type="tv"/>:""}
      {
      movies.length > 0 && tv.length > 0 ? (
        <>
        
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-4 ">
                <div className="w-25 brdr"></div>
                <div className="trendTxt">
                  Trending <br />
                  Movies <br />
                  To Watch
                </div>
                <p className="trendp">Most Watched Movies By The Week</p>
                <div className="w-100 brdr"></div>
              </div>
              {movies2.length > 0 ? (
                movies2.map((value, index) => <Item key={index} data={value} />)
              ) : (
                <h1 className="nores">No Result...</h1>
              )}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                <div className="w-25 brdr"></div>
                <div className="trendTxt">
                  Trending <br />
                  TV Showes <br />
                  To Watch
                </div>
                <p className="trendp">Most Watched Movies By The Week</p>
                <div className="w-100 brdr"></div>
              </div>
              {tv2.length > 0 ? (
                tv2.map((value, index) => <Item key={index} data={value} />)
              ) : (
                <h1 className="nores">No Result...</h1>
              )}
            </div>
          </div>
        </>
      ) : searchVal === "" ? (
        <Loading />
      ) : (
        <h1 className="nores">No Result...</h1>
      )}
    </>
  );
}

export default Home;
