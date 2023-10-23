import { PROFILE } from "../../assets";
import WeekScoreDashboard from "./WeekScoreDashboard";

const Profile = () => {
  return (
    <div className="px-4 py-16 flex-col w-60">
        <div className="flex-center flex-col">
            <img className="rounded-full w-20 h-20" src={PROFILE} alt="profile-photo"/>
            <h3 className="text-center">Suraj Shukla</h3>
        </div>

        <div className="grid-cols-2 grid pt-8">
            <div className="text-center">Age</div>
            <div className="text-center">Blood</div>
            <div className="text-center">Height</div>
            <div className="text-center">Weight</div>
        </div>

        <div>
            <WeekScoreDashboard />
        </div>
    </div>
  )
}

export default Profile;