export const exerciseOptions =  {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	port: null,
	path: '/status',
	headers: {
		'x-rapidapi-key': ProcessingInstruction.env. REACT_APP_RAPID_API_KEY
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


export const fetchdata = async ( url, options) => {
    const responce = await fetch(url, options);
    const data = await responce.json();

    return data;

}


