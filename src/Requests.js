const key = 'b051b1d5ee006c73621443f54ca391b9'

const requests = {

  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  requestFilm: `https://api.themoviedb.org/3/movie/550?api_key=b${key}`


}

export default requests