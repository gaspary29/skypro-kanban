import PopExit from "../components/PopExit/PopExit";
import { useUser } from "../hooks/userUser";


export function ExitPage({ }) {
  const { logout } = useUser();
  return <PopExit logout={logout} />;
}
export default ExitPage;
