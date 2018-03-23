"use strict";

const testRegExp = /^\/((?:\\\/|[^/])+)\/([migyu]{0,5})?$/;

module.exports = input => {
	const parts = testRegExp.exec(input);
	if (parts) {
		try {
			const regex = new RegExp(parts[1], parts[2]);
			return regex instanceof RegExp;
		} catch (err) {
			console.error(`${input} => ${err.message}`);
		}
	}
	return false;
};
