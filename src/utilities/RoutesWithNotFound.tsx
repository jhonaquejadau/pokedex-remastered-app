import { Route, Routes } from "react-router-dom";

interface ChildrenProps {
  children: JSX.Element[] | JSX.Element;
}

const RoutesWithNotFound = ({ children }: ChildrenProps) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<>ROUTE NOT FOUND</>} />
    </Routes>
  );
};

export default RoutesWithNotFound;
