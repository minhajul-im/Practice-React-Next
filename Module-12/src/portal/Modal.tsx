import Child from "./Child";

interface PropsModal {
  onClose: () => void;
}

const Modal = ({ onClose }: PropsModal) => {
  return (
    // <div className="flex justify-center items-center h-screen bg-black/10">
    <div
      className="w-[400px] h-[400px] rounded p-4 bg-blue-300 mx-auto"
      role="dialog"
      aria-modal="true"
    >
      <h1>HEllo Portal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quaerat
        labore, animi exercitationem dolore laboriosam, vitae dolores amet
        ratione adipisci sequi accusamus perferendis nostrum aperiam unde, quas
        magnam minus porro ullam impedit! Quos dolor, eos non, numquam vero sed
        labore impedit incidunt quibusdam deleniti cum atque beatae obcaecati
        ipsum quaerat vitae. Perspiciatis id quos nisi nesciunt recusandae harum
        eligendi porro.
      </p>
      <Child />
      <button
        onClick={onClose}
        className="py-2 px-4 bg-blue-600 text-white rounded-md"
      >
        close
      </button>
    </div>
    // </div>
  );
};

export default Modal;
