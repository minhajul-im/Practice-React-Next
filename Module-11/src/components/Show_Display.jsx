import React from "react";
import { cookies } from "next/headers";

const Show_Display = () => {
  const cookie = cookies();

  // cookie.delete("token");

  return cookie.getAll().map((cookie, index) => (
    <div key={index}>
      <li>
        Name: {cookie.name} {"  "} Value: {cookie.value}
      </li>
    </div>
  ));
};

export default Show_Display;
