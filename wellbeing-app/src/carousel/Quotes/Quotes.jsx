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
      <p>Quote for today:</p>
      <h2 id="quote">{quote}</h2>
      <p id="author">— {author}</p>
    </div>
  );
}

export default Quotes;
