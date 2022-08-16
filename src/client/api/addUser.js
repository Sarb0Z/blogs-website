import axios from "axios";

// import { getArtistsCache, setArtistsToCache } from '../Cache/artistsCache';

export default function addUser(userData, setFlag, setUserData) {
  (async () => {
    try {
      const user = await axios.request({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/users`,
        data: userData,
      });
      setUserData(user);
      setFlag(true);
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  })();
}