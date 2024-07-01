export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fbf9c402dfmshb04d141c782c315p1d3957jsn074743bd2be2',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
		'x-rapidapi-key': 'fbf9c402dfmshb04d141c782c315p1d3957jsn074743bd2be2',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };