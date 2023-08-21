const fetchQuote = async () => {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b5a8fac0e4msh68e0442b43ca2d6p137abdjsn64fea5244fc4',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export default fetchQuote;