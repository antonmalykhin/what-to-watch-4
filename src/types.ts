export interface Film {
  id: number | string,
  title: string,
  image: string,
  backgroundColor: string,
  background: string,
  genre: string,
  release: number,
  runtime: number,
  poster: string,
  preview: string,
  video: string,
  rating: {
    score: number,
    count: number
  },
  description: string,
  crew: {
    director: string,
    starring: string[]
  },
  isFavorite: boolean
};

export interface Comment {
  id: number | string,
  user: {
    id: number,
    name: string
  },
  rating: number,
  comment: string,
  date: string
};

export interface Match {
  params: {
    id: string | number
  }
}
