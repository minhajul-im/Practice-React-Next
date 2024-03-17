import { useState } from "react";

import Modal from "./Modal";
import Portal from "./Portal";

const PortalReact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBubbling = () => {
    console.log("event bubbling");
  };

  return (
    <div
      onClick={handleBubbling}
      className="w-[600px] h-[100px] overflow-hidden border rounded  bg-green-400 mx-auto p-4 mt-6"
    >
      <h1>Create Portal modal</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="py-2 px-4 bg-blue-600 text-white rounded-md"
      >
        open
      </button>
      {isOpen && (
        <Portal>
          <Modal onClose={() => setIsOpen(false)} />,
        </Portal>
      )}
    </div>
  );
};

export default PortalReact;
