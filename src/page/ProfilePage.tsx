import ProfileUI from "../ui/ProfileUI";
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const user = useSelector((store) => store.user);

  return (
    <main className="flex-1 overflow-y-auto  mt-10 pb-24 lg:pb-0">
      <ProfileUI user={user} />
    </main>
  );
};

export default ProfilePage;
