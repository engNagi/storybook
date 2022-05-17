const moment = require("moment");
	// to format the date

module.exports = {
	formatDate: function (date, format) {
		return moment(date).format(format);
	},
	// handlebar function to truncate our  Story body to cetain length
	truncate: function (str, len) {
		if (str.length > len && str.length > 0) {
			let new_str = str + " ";
			new_str = str.substr(0, len);
			new_str = str.substr(0, new_str.lastIndexOf(" "));
			new_str = new_str.length > 0 ? new_str : str.substr(0, len);
			return new_str + "...";
		}
		return str;
	},
// handlebar function to remove any excessive html tags
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, '')
  },
};
