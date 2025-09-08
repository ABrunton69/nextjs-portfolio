import React from "react";
import { FormData } from "@/app/Components/Contact/Contact";

const EmailTemplate = (data: FormData) => {
  return (
    <>
      <div>
        <h1>Recieved a new contact form from {data.name}</h1>
        <p>User Email: {data.email}</p>
        <p>User Message: {data.message}</p>
      </div>
    </>
  );
};

export default EmailTemplate;
