import axios from 'axios';

export async function trending(type) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
export async function getDetails(id,type) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=52bbcddeda849047525b51d6f8a12361`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return;
    }
}
export async function topRated(type) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=52bbcddeda849047525b51d6f8a12361`);
        const sortedData = response.data.results.sort((a, b) => b.vote_average - a.vote_average);
        const top3 = sortedData.slice(0, 3);
        console.log(top3);
        return top3;
    } catch (error) {
        console.error('Error fetching data:', error);
        return;
    }
}
export async function postData(data) {
    
}
//  default Api;


// https://api.themoviedb.org/3/movie/126308?api_key=52bbcddeda849047525b51d6f8a12361