import { useQuery } from "@apollo/client";
import React from "react";
import { AUTHORE_QUERIES } from "../graphQl/queries/authoreQueries";

const AuthorePage = () => {
  const { loading, error, data, refetch } = useQuery(AUTHORE_QUERIES);
  if (loading) return <p>{loading ? "load" : ""}</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-[800px] h-[700px] rounded-md bg-white/10">
      {data.getAuthors.map((item) => (
        <div className="flex justify-between">
          <p>name : {item.name}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default AuthorePage;
