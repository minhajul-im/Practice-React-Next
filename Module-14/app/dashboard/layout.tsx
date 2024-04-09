interface ChildrenProps {
  children: React.ReactNode;
  quiz: React.ReactNode;
  assignments: React.ReactNode;
  notifications: React.ReactNode;
}

const DashBoardLayout = ({
  children,
  assignments,
  notifications,
  quiz,
}: ChildrenProps) => {
  return (
    <>
      <h1 className="py-3 text-red-800 text-center border border-purple-600 my-4 rounded bg-gray-500">
        Header Dashboard Layout
      </h1>

      {children}

      <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
        {assignments}
        {notifications}
        {quiz}
      </div>

      <h1 className="py-3 text-red-800 text-center border border-purple-600 my-4 rounded bg-gray-500">
        Footer Dashboard Layout
      </h1>
    </>
  );
};

export default DashBoardLayout;
