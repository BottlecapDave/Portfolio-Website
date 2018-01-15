var target = new Date(2012, 5, 12, 19, 59, 59);

function initialise() {
    document.getElementById('dbpcountdownwrapper').innerHTML =
    '<div id="dbpimage"><img src="http://www.davidskendall.co.uk/blog/images/dreambuildplaylogo.png" alt=Dream.Build.Play Logo /></div><div id="dbpcountdown"></div>';

    this.countdown();
}

function countdown() {
    var date = new Date();
	var now = date.getTime();

	var localOffset = (date.getTimezoneOffset() + 60) * 60000;
    var seconds = (target.getTime() - localOffset) - now;
    delete now;
	delete date;
	delete localOffset;

    if (seconds < 0) {
        document.getElementById('countbox').innerHTML = "The deadline has past. See what I submitted";
    } else {
        var days = 0;
        var hours = 0;
        var mins = 0;
        var out = "";
		var timeStyle = "font-size: 3em; color: #6ECAFF; font-weight: bold;";

        seconds = Math.floor(seconds / 1000);

        days = Math.floor(seconds / 86400);
        seconds = seconds % 86400;

        hours = Math.floor(seconds / 3600);
        seconds = seconds % 3600;

        mins = Math.floor(seconds / 60);
        seconds = seconds % 60;

        seconds = Math.floor(seconds);

        out += '<span style="' + timeStyle + '">' + ((days < 10) ? '0' + days : days) + "</span> day" + ((days != 1)?"s":"")+ " ";

        out += '<span style="' + timeStyle + '">' + ((hours < 10) ? '0' + hours : hours) + "</span> hour"+((hours!=1)?"s":"")+ " ";

        out += '<span style="' + timeStyle + '">' + ((mins < 10) ? '0' + mins : mins) + "</span> minute"+((mins!=1)?"s":"")+ " ";

        out += '<span style="' + timeStyle + '">' + ((seconds < 10) ? '0' + seconds : seconds) + "</span> second" +((seconds!=1)?"s":"");

        document.getElementById('dbpcountdown').innerHTML =
		'<p>' + out + ' left to finish</p>';

        setTimeout("countdown()", 1000);
    }
}

window.onload = initialise;