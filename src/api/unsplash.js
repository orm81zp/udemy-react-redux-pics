import axios from 'axios';

const axiosInstance =  axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 967915aeedf600c0f7288cbb408e618ec8735960efd0a0a59cae269449165da6'
  }
});

export const getImages = async (query) => {
  const response = await axiosInstance.get('/search/photos', {
    params: {
      query
    }
  })

  const { data } = response;
  return data.results;
};

export default axiosInstance;
