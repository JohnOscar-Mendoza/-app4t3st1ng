// Functions are called action creator
// Actions are the return values from the action creator
"use strict";
export const selectUser = (user) => {
	return {
		type: "USER_SELECTED",
		payload: user
	}
};