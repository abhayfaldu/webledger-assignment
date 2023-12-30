export const base_url = "http://localhost:3001/api";

const token = localStorage.getItem("token");

export const config = {
	headers: {
		Authorization: `Bearer ${token || ""}`,
		Accept: "application/json",
	},
};
