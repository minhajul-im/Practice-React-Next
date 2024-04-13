import React from "react";
interface ChildrenProps {
  children: React.ReactNode;
}
const ProductsLayout = ({ children }: ChildrenProps) => {
  return <div className="py-8 px-4 bg-teal-400">{children}</div>;
};

export default ProductsLayout;
