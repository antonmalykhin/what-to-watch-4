export const filmAdapter = (data) => {
  return {
    id: data.id,
    title: data.name,
    image: data.preview_image,
    backgroundColor: data.background_color,
    background: data.background_image,
    genre: data.genre,
    release: data.released,
    runtime: data.run_time,
    poster: data.poster_image,
    preview: data.preview_video_link,
    video: data.video_link,
    rating: {
      score: data.rating,
      count: data.scores_count
    },
    description: data.description,
    crew: {
      director: data.director,
      starring: data.starring
    },
    isFavorite: data.is_favorite
  };
};

export const filmsAdapter = (data) => {
  return data.map((it) => filmAdapter(it));
};
