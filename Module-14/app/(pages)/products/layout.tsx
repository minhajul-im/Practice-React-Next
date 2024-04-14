import React from "react";
interface ChildrenProps {
  children: React.ReactNode;
  products: React.ReactNode;
}
const ProductsLayout = ({ children, products }: ChildrenProps) => {
  return (
    <div className="py-8 px-4 bg-teal-400">
      {products}
      {children}
    </div>
  );
};

export default ProductsLayout;
