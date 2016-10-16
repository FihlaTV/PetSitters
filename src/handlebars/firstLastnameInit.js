module.exports = function (data, options) {
	let firstname = this.user.first.charAt(0).toUpperCase() + this.user.first.slice(1);
	let lastnameInit = this.user.last.slice(0,1).toUpperCase() + ".";
	let name = firstname + " " + lastnameInit;
	return name;

	// return options.fn( data.info[0] );
};
