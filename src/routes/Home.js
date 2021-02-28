import React from "react";
import propTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import { render } from "@testing-library/react";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    ); //axios로 영화 정보를 가져옵니다. (느림)
    //평점 순으로 data를 정렬합니다.
    //awiat => axios가 끝날 때 까지 기다렸다가 작업을 계속합니다. (async를 반드시 사용해야합니다.
    this.setState({ movies, isLoading: false }); //state의 이름과 받아오는 데이터의 객체 이름인 movies가 같기 때문에 줄여쓸 수 있습니다.
  };

  renderMovies = () => {
    const { movies } = this.state;

    return movies.map((movie) => (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres}
      />
    ));
  };

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div className="page_container">
        {isLoading ? (
          <div className="loader">
            <p className="loader_text">Please wait🌻</p>
          </div>
        ) : (
          <div className="movies">{this.renderMovies()}</div>
        )}
      </div> //JSX내부에는 꼭 className이라고 정확히 명시해줍니다. js의 class와 혼동할 수 있음.
    );
  }
}

export default Home;
