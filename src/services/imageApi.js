import axios from "axios";
// console.log(axios);

function getFetch(q, page) {
  let key = "18650825-85dd9ce829ef20624228a2c85";
  let perPage = 12;

  let url = `https://pixabay.com/api/?q=${q}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return axios.get(url).then((response) => {
    // console.log(response.data.hits);
    return response.data.hits;
  });
}

export default { getFetch };
