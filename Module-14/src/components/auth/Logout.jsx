import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Logout = ({ children }) => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({});
    navigate("/");
  };

  return <span onClick={handleLogout}>{children}</span>;
};

export default Logout;
