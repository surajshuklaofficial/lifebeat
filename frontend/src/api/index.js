import axios from "axios";

const DEVELOPMENT_URL = "http://localhost:3000/api/v1";
const DEPLOYMENT_URL = "https://health-monitoring-system.onrender.com/api/v1";

// const API = axios.create( {baseURL: DEVELOPMENT_URL} );
const API = axios.create({
  baseURL: DEVELOPMENT_URL,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return req;
});

export const  fetchMedicalRecord = (id) => API.get(`/user/${id}/medical-record`);
export const  updateMedicalRecord = (id, data) => API.patch(`/user/${id}/medical-record`, data);

// userData.action == signin || signup
export const auth = (userData) => API.post(`/auth/${userData.action}`, userData);
export const verifyEmail = (emailVerificationToken) => API.post('/auth/verify-email', {emailToken: emailVerificationToken});

// activities
export const fetchTodayActivity = (id) => API.get(`/user/${id}/fetch-today-activity`);
export const createOrUpdateTodayActivity = (id, todayActivity) => API.patch(`/user/${id}/create-or-update-today-activity`, todayActivity);

// gamification
export const fetchTodayScore = (id) => API.get(`/user/${id}/fetch-today-score`);
export const fetchWeeklyLeaderboard = (id) => API.get(`/user/${id}/fetch-weekly-leaderboard`);





export const fetchContentsByChannel = (channelID) =>
  API.get(`/contents/${channelID}`);
export const fetchContentByID = (contentID) => API.get(`/watch/${contentID}`);
export const fetchChannelByContent = (channelID) =>
  API.get(`/watch/${channelID}`);
export const uploadContent = (
  contentData,
  channelID,
  channelName,
  channelLogo
) =>
  API.post(
    `/channel/${channelID}/videos/upload?channelname=${channelName}&channellogo=${channelLogo}`,
    contentData
  );
export const fetchContents = () => API.get("/contents");
export const deleteContent = (channelID) =>
  API.delete(`/content/delete/${channelID}`);

export const signin = (userAuthInfo) => API.post("/users/signin", userAuthInfo);
export const signup = (userAuthInfo) => API.post("/users/signup", userAuthInfo);
