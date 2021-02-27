import react from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: { year, title, summary, genres, poster },
      }}
    >
      <div className="movieContainer">
        <div className="movie">
          <img
            className="movie_poster"
            src={poster}
            alt={title}
            title={title}
          />
          <i className="fas fa-ellipsis-v infoMenu"></i>
          <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <strong className="movie_year">{year}</strong>
            <ul className="movie_genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres_genre">
                  {index === genres.length - 1 ? genre : genre + ","}
                </li>
              ))}
            </ul>
            <p className="movie_summary overflowHidden">
              {summary.slice(0, 180)}
              {summary.length > 180 && (
                <button
                  className="summary_showMore"
                  title="Show more..."
                  type="button"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              )}
            </p>
          </div>
        </div>
        <div className="movieUsersContainer">
          <div className="movieUsers">
            <ul className="users_image">
              <li className="usersImageList firstUserImg">
                <img
                  className="userImg"
                  src="https://t1.daumcdn.net/cfile/tistory/2426F0395855726801"
                  alt="UserImg"
                />
              </li>
              <li className="usersImageList secondUserImg">
                <img
                  className="userImg"
                  src="https://static-storychat.pstatic.net/1527676_16771803/9bnc5dga37710.jpg"
                  alt="UserImg"
                />
              </li>
              <li className="usersImageList thirdUserImg">
                <img
                  className="userImg"
                  src="https://blog.kakaocdn.net/dn/3Lndn/btqEh7tx1It/KRYxjpmeP4kzdZOAYGN8y0/img.png"
                  alt="UserImg"
                />
              </li>
            </ul>
            <span className="userWatching">
              장동윤, 신짱구, Inter Milan and 4 others are watching this.
            </span>
            <div className="recommend">
              <button className="recommendButton" type="button">
                <i className="far fa-thumbs-up"></i>
              </button>
              <span className="recommendCount">32</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
