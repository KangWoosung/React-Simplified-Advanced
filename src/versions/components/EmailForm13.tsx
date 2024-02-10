/*  2024-02-10 14:26:19


*/

import React, { useId, useState } from "react";

const EmailForm13 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const id = useId();

  return (
    <>
      <h3>EmailForm13</h3>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        type="email"
        id={`${id}-email`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input
        type="text"
        id={`${id}-name`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default EmailForm13;
