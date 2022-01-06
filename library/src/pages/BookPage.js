import { useQuery } from "@apollo/client";
import React from "react";
import { BOOK_QUERIES } from "../graphQl/queries/bookQueries";

const BookPage = () => {
  const { loading, error, data, refetch } = useQuery(BOOK_QUERIES);
  if (loading) return <p>{loading ? "load" : ""}</p>;
  if (error) return <p>{error.message}</p>;
  console.log(data);

  return (
    <div className="w-[800px] h-[700px] rounded-md bg-white/10">
      {data.getBooks.map((item) => (
        <div className="flex justify-between">
          <p>name : {item.title}</p>
          <p>craeted by : {item.author.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BookPage;
