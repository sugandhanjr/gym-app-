export const exerciseOptions =  {
	method: 'GET', 
	headers: {
		'x-rapidapi-key': process.env. REACT_APP_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


export const fetchdata = async ( url, options) => {
    const responce = await fetch(url, options);
    const data = await responce.json();

    return data;

}


