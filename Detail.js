import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    const detailMovie = document.getElementsByClassName("detail_movie");
    const detailContainer = document.getElementsByClassName("detail_container");
    const root = document.getElementById("root");

    if (location.state === undefined) {
      history.push("/");
    }

    if (detailMovie[0].clientHeight >= window.innerHeight) {
      detailContainer[0].classList.add("soBigContent");
      root.style.overflow = "scroll";
      root.scrollTop = 0;
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail_container">
          <div className="detail_movie">
            <img
              className="detail_movie_poster"
              src={location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <div className="detail_movie_data">
              <h3 className="detail_movie_title">{location.state.title}</h3>
              <strong className="detail_movie_year">
                {location.state.year}
              </strong>
              <ul className="detail_movie_genres">
                {location.state.genres.map((genre, index) => (
                  <li key={index} className="detail_genres_genre">
                    {index === location.state.genres.length - 1
                      ? genre
                      : genre + ","}
                  </li>
                ))}
              </ul>
              <p className="detail_movie_summary">{location.state.summary}</p>
            </div>
          </div>
        </div>
        // </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
