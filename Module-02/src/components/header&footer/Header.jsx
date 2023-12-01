import { useState } from "react";
import Form from "./Form";

export default function Header() {
  const [formToggle, setFormToggle] = useState(false);

  const handleToggleForm = () => {
    setFormToggle(true);
  };

  return (
    <header className="">
      <nav className=" ms-12 mr-12 mx-auto py-3 flex justify-between items-center">
        <img
          className="h-10 w-25 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxb8A7Ra_XhFcf845bg1ksefJliQSTlVsmA&usqp=CAU"
          alt="bg"
        />

        <img
          onClick={handleToggleForm}
          className="w-10 h-10 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBs2plKhQ81c6kj_EvYGTB4HJGHcv-MfpgQQ&usqp=CAU"
          alt=""
        />
      </nav>
      {formToggle && (
        <div className="h-screen flex justify-center items-center">
          <Form />
        </div>
      )}
    </header>
  );
}
