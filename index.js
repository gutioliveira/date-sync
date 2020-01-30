var OriginalDate = Date;

var time = {
	date: null,
};

module.exports = {
	config: function(timeArg, sumTimeZoneOffset = false){

		if (!time.date){
			time.date = new Date();
		}

		Date = class extends Date {
				constructor(...options) {
					if (options.length) {
						super(...options);
					} else {
						super(Date.parse(timeArg) + (Date.now() - time.date.getTime()) - (sumTimeZoneOffset ? (time.date.getTimezoneOffset() * 60 * 1000) : 0));
					}
				}
			};
	},
	reset: function(){
		Date = OriginalDate;
	}
};