"use client";

import { form } from "@/utils/form";

const Page = () => {
  const { textarea, dataSet, handleText, handleChange, handleSubmit } = form();

  return (
    <div className="p-10">
      <h1 className="text-4xl text-cyan-300 text-center py-8">
        Hello contact Form
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {dataSet.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">
            <label className="font-medium text-xl text-gray-500">
              {item.label}
            </label>
            <input
              className="outline-none py-2 px-4 border
             border-gray-300 text-gray-500
             rounded"
              name={item.key}
              type={item.type}
              value={item.value}
              placeholder={item.placeholder}
              onChange={handleChange}
            />
          </div>
        ))}

        <label className="font-medium text-xl text-gray-500">Messages</label>
        <textarea
          className="outline-none p-4 border text-xl
         border-gray-300 text-gray-500 rounded"
          name="message"
          cols="30"
          rows="10"
          value={textarea}
          onChange={handleText}
        ></textarea>

        <button
          type="submit"
          className="outline-none border border-slate-700 py-2
          uppercase font-semibold rounded duration-100 bg-slate-700
          px-4 text-sky-500 hover:bg-white hover:text-sky-600"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Page;
