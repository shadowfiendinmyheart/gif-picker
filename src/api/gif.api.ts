import axios from "axios";
import { API_URL } from "../constants/api";
import { Gif } from "../models/gif.model";

interface GifResponse {
  data: Gif[];
}

const getGifs = async (query: string) => {
  const response = await axios.get<GifResponse>(
    `${API_URL}gifs/search?&q=${query}&api_key=${process.env.REACT_APP_API_KEY}`,
  );

  return response.data.data;
};

export default getGifs;
