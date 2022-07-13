import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const API_KEY = '28606386-da43ad70a5a9d48305ac13b2f';

export const PictureDataFetch = async (searchValue) => {
    
    const respons = await axios.get('api/', {params: {
        q: searchValue,
        key: API_KEY,
        page: 1,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
    }})
    console.log(respons.data.hits)
    return respons.data
}