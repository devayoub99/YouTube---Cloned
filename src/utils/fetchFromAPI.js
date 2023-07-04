async function fetchFromAPI(url) {
  const baseURL = "https://youtube-v31.p.rapidapi.com";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(`${baseURL}/${url}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default fetchFromAPI;
