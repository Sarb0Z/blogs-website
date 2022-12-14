import axios from "axios";

export default function addUser(userData) {
  (async () => {
    try {
      const user = await axios.request({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/users`,
        data: userData,
      });
      console.log(user.data);
      alert(JSON.stringify(user.data));
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  })();
}
