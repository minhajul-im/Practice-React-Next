// eslint-disable-next-line react/prop-types
const AvatarDemo = ({ children }) => {
  return (
    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-purple-600">
      <span className="font-bold">{children}</span>
    </div>
  );
};

export default AvatarDemo;
