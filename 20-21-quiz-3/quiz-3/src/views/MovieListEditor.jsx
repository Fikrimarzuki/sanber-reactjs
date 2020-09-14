import React, { useEffect, useState } from "react";
import sanberAPI from "../config/sanberAPI";
import Loading from "../components/Loading";

export default function MovieListEditor() {
  const [movies, setMovies] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    status: false,
    msg: ""
  })
  const [input, setInput] = useState({
    id: null,
    title: "",
    description: "",
    year: 2020,
    duration: 120,
    genre: "",
    rating: 0,
    image_url: ""
  });

  useEffect(() => {
    setIsLoading(true);
    document.title = "Movies";
    fetchMovies();
  }, [])

  const fetchMovies = async () => {
    const { data } = await sanberAPI.get("/movies");
    setInput({
      id: null,
      title: "",
      description: "",
      year: 2020,
      duration: 120,
      genre: "",
      rating: 0,
      image_url: ""
    });
    if (data.length === 0) {
      setMovies([
        {
          id: null,
          title: "N/A",
          description: "N/A",
          year: "N/A",
          duration: "N/A",
          genre: "N/A",
          rating: "N/A",
          image_url: "N/A"
        }
      ])
    } else {
      setMovies(data);
    }
    setIsLoading(false);
  }

  const handleInputSearch = event => {
    const value = event.target.value;
    if (value) {
      const list = movies.filter(el => el.title.toLowerCase().includes(value.toLowerCase()))
      if (list.length === 0) {
        setMoviesFiltered([
          {
            id: null,
            title: "N/A",
            description: "N/A",
            year: "N/A",
            duration: "N/A",
            genre: "N/A",
            rating: "N/A",
            image_url: "N/A"
          }
        ])
      } else {
        setMoviesFiltered(list);
      }
    } else {
      setMoviesFiltered(movies);
    }
  }

  const handleSearch = event => {
    event.preventDefault();
  }

  const handleChangeInput = event => {
    const value = event.target.value;
    const name = event.target.name;
    const payload = { ...input };
    payload[name] = value;
    setInput(payload);
  }

  const handleEditButton = payload => {
    setInput(payload);
    document.querySelector("#title").focus();
  }

  const handleDeleteMovie = async id => {
    setIsLoading(true);
    await sanberAPI.delete(`/movies/${id}`);
    await fetchMovies();
  }

  const handleSubmitForm = async event => {
    event.preventDefault();
    let status = false;
    let msg = [];
    if (input.year < 1998) {
      status = true;
      msg.push("Year must be more than 1998");
    }
    if (input.duration < 0) {
      status = true;
      msg.push("Duration in minutes and cant be less equal than 0");
    }
    if (input.rating < 0 || input.rating > 10) {
      status = true;
      msg.push("Rating must be greater than equal to 0 and less than equal to 10");
    }
    if (status) {
      setIsError({ status, msg: msg.join(" | ") })
    } else {
      setIsLoading(true);
      setIsError({ status: false, msg: "" })
      if (input.id) {
        await sanberAPI.put(`/movies/${input.id}`, input)
      } else {
        await sanberAPI.post("/movies", input);
      }
      await fetchMovies();
    }
  }

  const movieList = () => {
    let list = [];
    if (moviesFiltered.length !== 0) {
      list = [...moviesFiltered];
    } else {
      list = [...movies];
    }
    return list.map((el, index) => {
      return (
        <tr key={el.id}>
          <td>{!el.id ? "" : index + 1}</td>
          <td>{el.title ? el.title : "_"}</td>
          <td>{el.description && el.description.length > 20 ? `${el.description.substring(0, 20)} ...` : el.description }</td>
          <td>{el.year ? el.year : 2020}</td>
          <td>{el.duration ? el.duration : 120}</td>
          <td>{el.genre ? el.genre : "_"}</td>
          <td>{el.rating ? el.rating : 0}</td>
          <td>
            {
              !el.id ? "" : <>
                <button onClick={() => handleEditButton(el)}>Edit</button>
                <button onClick={() => handleDeleteMovie(el.id)}>Delete</button>
              </>
            }
          </td>
        </tr>
      )
    })
  }
  
  if (isLoading) {
    return <Loading />
  }

  return (
    <section>
      <div style={{ padding: "10px", border: "1px solid #ccc" }}>
        <div>
          <form onSubmit={handleSearch}>
            <input type="text" onChange={handleInputSearch}/>
            <button>Search</button>
          </form>
        </div>
        <h1 style={{ textAlign: "center" }}>Daftar Film</h1>
        <table style={{ width: "100%", tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Year</th>
              <th>Duration</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { movieList() }
          </tbody>
        </table>

        <h1 style={{ textAlign: "center" }}>Movies Form</h1>
        {
          isError.status
            ? <p style={{ color: "red "}}>{isError.msg}</p>
            : ""
        }
        <form className="movies-form" onSubmit={ handleSubmitForm }>
          <div className="movies-form-group">
            <div className="label">Title</div>
            <input
              id="title"
              type="text"
              name="title"
              onChange={ handleChangeInput }
              value={input.title ? input.title : ""}
              required
            />
          </div>
          <div className="movies-form-group">
            <div className="label">Description </div>
            <textarea
              cols="50"
              rows="5"
              name="description"
              onChange={ handleChangeInput }
              value={input.description ? input.description : ""}
              required
            />
          </div>
          <div className="movies-form-group">
            <div className="label">Year</div>
            <input
              type="number"
              name="year"
              onChange={ handleChangeInput }
              value={input.year ? input.year : 2020}
              required
            />
          </div>
          <div className="movies-form-group">
            <div className="label">Duration </div>
            <input
              type="number"
              name="duration"
              onChange={ handleChangeInput }
              value={input.duration ? input.duration : 120}
              required
            />
          </div>
          <div className="movies-form-group">
            <div className="label">Genre </div>
            <input
              type="text"
              name="genre"
              onChange={ handleChangeInput }
              value={input.genre ? input.genre : ""}
              required
            />
          </div>
          <div className="movies-form-group">
            <div className="label">Rating </div>
            <input
              type="number"
              name="rating"
              onChange={ handleChangeInput }
              value={input.rating ? input.rating : 0}
              required
            />
          </div>
          <div className="movies-form-group">
            <div className="label">Image Url:</div>
            <textarea
              cols="50"
              rows="5"
              name="image_url"
              onChange={ handleChangeInput }
              value={input.image_url ? input.image_url : ""}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br/>
      <br/>
    </section>
  )
}