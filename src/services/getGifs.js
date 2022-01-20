const API_KEY = 'QUs47DHXA45ZQFf1p6NDpvaEIhxqsQHQ';

export const getGifs = (keyword = '') => {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(API_URL)
      .then(response => response.json())
      .then(({ data }) => {
        const gifs = data.map(image => {
            const { images, title, id } = image;
            const { url } = images.downsized_medium;
            return { title, id, url }
        })
        return gifs;
      })
      .catch(err => console.log(err.msg));
}