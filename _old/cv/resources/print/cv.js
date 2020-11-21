//import snarkdown from 'resources/snarkdown';

var filepath = "./resources/cv.json";

function readFile() {
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filepath, false);
    rawFile.onreadystatechange = function ()
    {
    	if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status == 0))
        {
            var json = rawFile.responseText;
            var cv = JSON.parse(json);

            var urlParams = new URLSearchParams(window.location.search);

            process_brief(cv, urlParams.get('mobile'));
            process_profile(cv);
            process_skills(cv);
            process_employment(cv);
            process_education(cv);
            process_accomplishments(cv);
            process_interests(cv);
        }
    }

    rawFile.send(null);
}

function process_brief(cv, mobile) {
    var header = document.getElementById("header-right");
    process_brief_info(header, cv.Location, "resources/print/images/location.png")

    if (mobile !== null) {
        process_brief_info(header, mobile, "resources/print/images/phone.png")
    }

    process_brief_info(header, cv.Email, "resources/print/images/email.png")
    process_brief_info(header, cv.Website, "resources/print/images/web.png")
}

function process_brief_info(element, text, imageSource) {
    element.insertAdjacentHTML("beforeend", "<div class=\"contact-container\"><p class=\"contact-container-text\">" + text + "</p><img src=\"" + imageSource + "\" /></div>")
}

function process_profile(cv) {

    var profile = document.getElementById("profile");
    profile.innerHTML = markdown_to_html(cv.Profile);
}

function process_skills(cv) {
	var skillsOdd = document.getElementById("skills-list-odd");
    skillsOdd.innerHTML = "<ul>";
    skillsOdd = skillsOdd.childNodes[0];

    var skillsEven = document.getElementById("skills-list-even");
    skillsEven.innerHTML = "<ul>";
    skillsEven = skillsEven.childNodes[0];

	for (var i = 0; i < cv.Skills.length; i++) {

        if (i % 2 == 0) {
		  skillsEven.innerHTML += "<li><p>" + cv.Skills[i].Skill + "</p></li>";
        }
        else {
          skillsOdd.innerHTML += "<li><p>" + cv.Skills[i].Skill + "</p></li>";
        }
	}

    skillsOdd.innerHTML += "</ul>";
    skillsEven.innerHTML += "</ul>";
}

function process_employment(cv) {
    var employment = document.getElementById("employment");

    cv.Employment.forEach(function(item) {
        employment.innerHTML += process_employment_item(item);
    });
}

function process_employment_item(item) {
    var html = "";
    var end = "Present";
    if (item.End != null) {
        end = to_month_year(new Date(item.End));
    }

    var start = to_month_year(new Date(item.Start));

    html += "<h4>" + item.Role + " - " + item.Employer + "</h4>";
    html += "<h5>" + start + " - " + end + "</h5>";
    html += "<ul>";

    item.Duties.forEach(function(duty) {
        html += "<li>" + markdown_to_html(duty.Duty) + "</li>";
    });

    html += "</ul>";

    return html;
}

function process_education(cv) {
    var employment = document.getElementById("education");

    cv.Education.forEach(function(item) {
        employment.innerHTML += process_education_item(item);
    });
}

function process_education_item(item) {
    var html = "";
    html += "<h4>" + item.Establishment + " - " + item.Course + "</h4>";
    html += "<h5>" + item.Start + " - " + item.End + "</h5>";
    html += markdown_to_html(item.Description);

    return html;
}

function process_accomplishments(cv) {
    var accomplishments = document.getElementById("accomplishments");

    var html = "<ul>";
    cv.PersonalAccomplishments.forEach(function(item) {
        html += "<li>" + markdown_to_html(item.Accomplishment) + "</li>";
    });

    html += "</ul>";

    accomplishments.innerHTML = html;
}

function process_interests(cv) {
    var interests = document.getElementById("interests");

    var html = "<ul>";
    cv.Interests.forEach(function(item) {
        html += "<li>" + markdown_to_html(item) + "</li>";
    });

    html += "</ul>";

    interests.innerHTML = html;
}

function to_month_year(date) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[date.getMonth()] + " " + date.getFullYear();
}

function markdown_to_html(content) {
    var md = new Remarkable();

    return md.render(content);
}

if (window.addEventListener) {
	window.addEventListener("load", readFile, false);
}
else if (window.attachEvent) {
	window.attachEvent("onload", readFile);
}
else {
	window.onload = readFile;
}