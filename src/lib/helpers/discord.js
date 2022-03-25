export const getUserForToken = async function (token) {
	try {
		let opts = {
			method: 'get',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Bearer ${token}`
			}
		};
		let res = await fetch('https://discord.com/api/users/@me', opts);
		if (res.ok) {
			return await res.json();
		} else {
			return null;
		}
	} catch (err) {
		return null;
	}
};
