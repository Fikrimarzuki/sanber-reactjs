import React, { Component } from "react";
import sanberAPI from "../config/sanberAPI";
import Loading from "../components/Loading";
// import seedMovies from "./seedMovies";

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, isLoading: true })
    this.fetchMovies();
    // seedMovies();
  }

  fetchMovies = async () => {
    const { data } = await sanberAPI.get("/movies");
    this.setState({ ...this.state, movies: data, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    }

    if (this.state.movies.length === 0) {
      return (
        <section>
          <h1>Daftar Film Film Terbaik</h1>
          <div>
            Movies List not found, please login and add some movie from movie list editor
          </div>
        </section>
      )
    } else {
      return (
        <section>
          <h1>Daftar Film Film Terbaik</h1>
          {
            this.state.movies.map(el => {
              return (
                <div id="article-list" key={ el.id }>
                  <div className="article">
                    <h2>{el.title}</h2>
                    <div style={{ display: "flex" }} className="movie-info">
                      <div className="image-wrapper">
                        <img src={el.image_url} alt={el.title}/>
                      </div>
                      <div>
                        <p>Rating: { el.rating > 10 ? 10 : el.rating <= 0 ? 0 : el.rating } / 10</p>
                        <p>Durasi: {el.duration} minutes</p>
                        <p>Genre: {el.genre}</p>
                      </div>
                    </div>
                    <p><strong>Description:</strong> {el.description}</p>
                  </div>
                  <hr />
                </div>
              )
            })
          }
        </section>
      )
    }
  }
}

// export default function Index() {
//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     document.title = "Home";
//     fetchMovie();
//   }, [])

//   const fetchMovie = async () => {
//     const { data } = await sanberAPI.get("/movies");
//     setMovies(data);
//   }

//   return (
//     <section>
//       <h1>Daftar Film Film Terbaik</h1>
//       {
//         movies.map(el => {
//           return (
//             <div id="article-list" key={ el.id }>
//               <div className="article">
//                 <h3>{el.title}</h3>
//                 <div style={{ display: "flex" }}>
//                   <img src={el.image_url} style={{ width: "50%" }} alt={el.title}/>
//                   <div>
//                     <p>Rating: {el.rating}</p>
//                     <p>Durasi: {el.duration}</p>
//                     <p>Genre: {el.genre}</p>
//                   </div>
//                 </div>
//                 <p>{el.description}</p>
//               </div>
//             </div>
//           )
//         })
//       }
//     </section>
//   )
// }
