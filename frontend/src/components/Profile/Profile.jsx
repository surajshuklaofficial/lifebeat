import { useNavigate } from "react-router-dom";

import { PROFILE } from "../../assets";
import WeekScoreDashboard from "./WeekScoreDashboard";

const Profile = ({ username }) => {
  const navigate = useNavigate();

  const id = localStorage.getItem('userid');

  return (
    <div className="px-4 py-6 min-w-fit bg-white rounded-lg shadow-md m-4 hidden  lg:block">
      <div className="flex flex-col items-center">
        <img className="rounded-full w-20 h-20 mb-2" src={PROFILE} alt="profile-photo" onClick={() => navigate(`/profile/${id}`)}/>
        <h3 className="text-lg font-semibold text-green-800">{username}</h3>
      </div>

      <div className="grid grid-cols-2 pt-6 gap-2 font-medium">
        <div className="text-center bg-green-500 text-white p-2 rounded-md">Age</div>
        <div className="text-center bg-green-500 text-white p-2 rounded-md">Blood</div>
        <div className="text-center bg-green-500 text-white p-2 rounded-md">Height</div>
        <div className="text-center bg-green-500 text-white p-2 rounded-md">Weight</div>
      </div>

      <div className="pt-6">
        <WeekScoreDashboard />
      </div>
    </div>
  );
};

export default Profile;
