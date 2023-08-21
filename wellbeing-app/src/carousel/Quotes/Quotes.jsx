import React, { useState, useEffect } from "react";
import fetchQuote from "./QuotesAPI";

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuoteData();
  }, []);

  const fetchQuoteData = async () => {
    const result = await fetchQuote();
    if (result) {
      setQuote(result.content);
      setAuthor(result.originator.name);
    }
  };

  return (
    // Display the fetched quote at the top
    <div>
      <h2>Quote of the Day</h2>
      <div className="quoteContainer">
        <p id="quote">{quote}</p>
        <p id="author">— {author}</p>
      </div>
    </div>
  );
}

export default Quotes;
