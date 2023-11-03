import Dashboard from "./users/Dashboard";
import Profile, { loader as profileLoader, action as profileAction} from './users/Profile';
import Auth, { action as authAction } from './auth/Auth';

export {Dashboard, Profile, Auth};
export {authAction, profileAction, profileLoader};