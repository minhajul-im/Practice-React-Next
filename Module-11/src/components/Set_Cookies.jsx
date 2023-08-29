"use client";

import SetCookiesFunc from "@/utils/SetCookieFunc";

const Set_Cookies = () => {
  const { data, cookie, handleOnChange, handleOnClick } = SetCookiesFunc();

  return (
    <div>
      <h1 className="text-2xl font-mono font-semibold text-gray-800 my-6">
        Set Cookies
      </h1>

      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-2 w-80 my-4">
          <label className="font-medium text-xl text-gray-500">
            {item.label}
          </label>
          <input
            className="outline-none py-1 px-3 border
           border-gray-300 text-gray-500 rounded"
            name={item.key}
            type={item.type}
            value={item.value}
            placeholder={item.placeholder}
            onChange={handleOnChange}
          />
        </div>
      ))}
      <button
        onClick={handleOnClick}
        className="outline-none border border-gray-700 py-2 my-4
        uppercase font-semibold rounded duration-100 bg-gray-700 text-xs
        px-4 text-white hover:bg-white hover:text-gray-700"
      >
        set cookie
      </button>
      {/* <li>Key:{cookie.key} Value:{cookie.value}</li> */}
    </div>
  );
};

export default Set_Cookies;
