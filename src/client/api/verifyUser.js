import axios from "axios";

// import { getArtistsCache, setArtistsToCache } from '../Cache/artistsCache';

export default function verifyUser(id) {
  (async () => {
    try {
      const user = await axios.request({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/users/login`,
      });
      console.log(user.data);
      alert(JSON.stringify(user.data));
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  })();
}
