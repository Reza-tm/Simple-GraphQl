import { from, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { AUTHORE_MUTATION } from "../graphQl/mutation/authoreMutations";

const CreateAuthorePage = () => {
  const [name, setName] = useState();
  const [submit] = useMutation(AUTHORE_MUTATION);

  const onSubmit = async () => {
    try {
      const {
        data: { createAuthor },
      } = await submit({ variables: { name } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col ">
      Create an Authore
      <from className="flex flex-col">
        <input
          value={name}
          className="bg-stone-100 my-5 px-4 py-1 text-black outline-none rounded-md text-center"
          onChange={(element) => setName(element.target.value)}
        />
        <button onClick={() => onSubmit()} className="bg-stone-50/10 active:bg-stone-50/20 rounded py-2">
          Craete Authore
        </button>
      </from>
    </div>
  );
};

export default CreateAuthorePage;
