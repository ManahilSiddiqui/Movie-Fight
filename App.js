 
const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '330151ac',
            s: 'avengers'
        }
    });

    console.log(response.data);
 };

 fetchData();