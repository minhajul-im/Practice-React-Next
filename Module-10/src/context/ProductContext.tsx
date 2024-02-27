import React, {
  useState,
  Dispatch,
  createContext,
  SetStateAction,
} from "react";

export type TypeOfContext = {
  id: string | number;
  setId: Dispatch<SetStateAction<string | number>>;
} | null;

export const ProductContext = createContext(null);

interface PropsChildren {
  children: React.ReactNode;
}

const ProductContextProvider = ({ children }: PropsChildren) => {
  const [id, setId] = useState<TypeOfContext>(null);
  return (
    <ProductContext.Provider value={{ id, setId }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
