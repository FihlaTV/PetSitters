module.exports = function (data, options) {
	let url = this.title;
	url = url.replace(/^\s*/, '');
	url = url.replace(/\s*$/, '');
	url = url.replace(/\s+/g, '-');
	url = url.replace(/[^0-9a-zA-Z_-]/g, '');
	url = url.replace(/[-]{2,}/g, '-');
	url = "#" + url;
	return url;
};
