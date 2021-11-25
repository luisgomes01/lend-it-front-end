import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { useUsers } from "../contexts/userContext";

export default function Routes() {
  const { isLogged } = useUsers();

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
}
