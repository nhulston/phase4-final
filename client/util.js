import Axios from "axios";

export const usernameUnique = (username) => {
    Axios.get("http://localhost:3001/username", {
        params: {
            username: username,
        }
    }).then(r => {
        if (r.data.length > 0) {
            alert("Username already exists");
        } else {
            alert("Username is unique");
        }
    });
};