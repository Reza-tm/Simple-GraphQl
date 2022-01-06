import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { BOOK_MUTATION } from "../graphQl/mutation/bookMutations";
import { AUTHORE_QUERIES } from "../graphQl/queries/authoreQueries";

const CreateBookPage = () => {
  const [title, setTitle] = useState("");
  const [authoreId, setAuthoreId] = useState("");
  const [submit] = useMutation(BOOK_MUTATION);

  const onSubmit = async () => {
    try {
      const {
        data: { createBook },
      } = await submit({ variables: { title, authorId: authoreId } });
    } catch (error) {
      console.log(error);
    }
  };

  const { loading, error, data, refetch } = useQuery(AUTHORE_QUERIES);
  if (loading) return <p>{loading ? "load" : ""}</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      create book
      <form className="flex flex-col">
        <input value={title} placeholder="name" className="my-10 text-black" onChange={(e) => setTitle(e.target.value)} />

        <select
          className="text-black"
          name="authors"
          id="authors"
          value={authoreId}
          onChange={(e) => setAuthoreId(e.target.value)}
        >
          <option value="">choose</option>
          {data.getAuthors.map((item) => (
            <option value={item._id}>{item.name}</option>
          ))}
        </select>
        <button type="button" onClick={() => onSubmit()}>
          create book
        </button>
      </form>
    </div>
  );
};

export default CreateBookPage;
