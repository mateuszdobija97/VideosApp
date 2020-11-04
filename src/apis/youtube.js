import axios from "axios";

const KEY = "AIzaSyAASjf-HpvQ_krF9hMkje8NjTOk-50pwhI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
