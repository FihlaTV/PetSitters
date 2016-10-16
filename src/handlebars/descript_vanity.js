module.exports = function (data, options) {
	let descript = this.description;
	let charAt48 = descript.charAt(47);
	descript = descript.slice(0, 48);
	if(charAt48 != " "){
		let lastIndex = descript.lastIndexOf(" ");
		descript = descript.substring(0, lastIndex);
	}
	return descript + "...";
};
