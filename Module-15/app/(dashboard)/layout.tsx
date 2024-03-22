interface ChildrenProps {
  children: React.ReactNode;
}

const layout = ({ children }: ChildrenProps) => {
  return (
    <main>
      <h1 className="font-bold text-green-600 m-4 ">
        this is the common layout of the settings & profile page
      </h1>
      <hr />
      {children}
    </main>
  );
};

export default layout;
