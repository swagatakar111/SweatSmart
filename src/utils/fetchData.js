export const exerciseOptions =  {
    method: 'GET',
    headers: {
      'x-rapidapi-key':process.env.REACT_APP_API_KEY ,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions =  {
    method: 'GET',
    
    headers: {
      'x-rapidapi-key':process.env.REACT_APP_API_KEY ,
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };



export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    console.log(data, process.env);
   
    return data ?? [];
  };