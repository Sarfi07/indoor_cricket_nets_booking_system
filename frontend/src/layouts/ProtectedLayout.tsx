import { Outlet } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";

const ProtectedLayout = () => {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
};

export default ProtectedLayout;
