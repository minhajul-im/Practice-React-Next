interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="p-4 m-4">
      <h1 className="font-semibold text-xl text-purple-500">
        hey this is a login page
      </h1>

      {children}
    </div>
  );
};

export default layout;
