import axios from 'axios';

const searchImages =  async (term) => {
     const   response =  await axios.get('https://api.unsplash.com/search/photos', {
    headers:  {
        Authorization : 'Client-ID 1MsP4zFsp60agEL9P8CZ1UTa9Fpzfwn8QUlhWleB5BQ'
    }, 
    params: {
        query: term,
    },
    
 });


 return response.data.results;
};

export default searchImages;   
