/* 
var formattedName = HTMLheaderName.replace("%data%", "Thomas Allen")
var role = [" Web Developer", " Engineering Director", " Program Manager", " Agile Change Agent"]
$("#header").prepend(role[1])
$("#header").prepend(formattedName);
*/

/*
 *	Model
*/
var model = {
	bio: {
		name: "Thomas Allen  ",
		role: "Agile Change Agent",
		contact : {
			mobile: "(408) 829-5342",
			email: "tjallen1103@gmail.com",
			github: "1103TomFoolery",
			twitter: "@tallen1103",
			location: "San Diego"
		},
		agileSkills : ["Organizational Change Management", "Process Definition & Implementation", "Coaching & Best Practices"],
		webSkills : ["HTML5,", "JavaScript,", "CSS,", "Responsive Design", "Bootstrap", "Backbone"], 
		devSkills: ["Python", "Django", "SQL"],
		dataSkills: ["R", "Statistics"],
		directorPDSkills : ["Organizational Leadership", "New Product Development", "Design Thinking", "Continuous Integration", "Entrepreneurial Marketing"],

		bioPic : "images/bioPic.jpg",
		welcomeMessage : "Welcome to my resume page!"
	},
 	work: {
	 	jobs: [
		 	{ company: "Emotient, Inc.",
		 	  position: "Senior Director - Engineering & Program Management",
		 	  location: "San Diego, CA, USA",
		 	  tenure: "2014 - 2016",
		 	  description: "Founded product development group.  Implemented strategic and tactical level agile processes."
		 	},
		 	{ company: "Websense, Inc.",
		 	  position: "Director - Engineering Program Management",
		 	  location: "San Diego, CA, USA",
		 	  tenure: "2013 - 2014",
		 	  description: "Successfully designed and led global adoption of SCRUM and agile practices."
		 	},
		 	{ company: "E*TRADE Securities, Inc.",
		 	  position: "Senior Engineering Program Manager",
		 	  location: "Menlo Park, CA, USA",
		 	  tenure: "2006 - 2013",
		 	  description: "Successfully managed many complex strategic projects and programs. Member of 30-member strategic innovation task force."
		 	},
		 	{ company: "Charles Schwab, Inc.",
		 	  position: "Engineering Program Manager",
		 	  location: "San Francisco, CA, USA",
		 	  tenure: "2005 - 2006",
		 	  description: "Consultant - successfully managed backend integration of newly acquired firms' IT infrastructure."
		 	},
		 	{ company: "Real Time Systems, Inc.",
		 	  position: "Vice President - Automation Systems",
		 	  location: "Sunnyvale, CA, USA",
		 	  tenure: "2000 - 2005",
		 	  description: "Co-founder - developed multi-loop multi-variable control system"
		 	},
		 	{ company: "ASA Visual, Inc.",
		      position: "founder",
		      location: "Syracuse, NY, USA",
		      tenure: "1996 - 2000",
		      description: "Founder/Owner - Implemented over 100 distance learning rooms in Upstate New York"
		    },
		 	{
		 		company: "Hughes Aircraft Company",
		 		position: "Control Systems Engineer",
		 		location: "Riyadh, Saudi Arabia",
		 		tenure: "1992 - 1996",
		 		description: "Developed and implemented SCADA system."
		 	},
		 	{
		 		company: "Johnson Controls, Inc.",
		 		position: "Project Engineer",
		 		location: "Brisbane, CA, USA",
		 		tenure: "1987 - 1992",
		 		description: "Developed and implemented SCADA system."
		 	}
		 ] // close jobs array
	}, // close work

	education: {
		schools: [
			{ name: "Stanford University",
			  location: "Stanford, CA, USA",
			  major: "Management Science & Engineering",
			  degree: "Graduate Certificate",
			  graduation: "2016"
			},
			{ name: "San Jose State University",
			  location: "San Jose, CA, USA",
			  major: "Computer Engineering",
		      degree: "Master of Science",
		      graduation: "2005"
		  	},
		  	{ name: "Syracuse University",
		   	  location: "Syracuse, NY, USA",
		      major: "Electrical Engineering",
		      degree: "Bachelor of Science",
		      graduation: "1987"
		    }
	    ], // close schools array

	 	onlineCourses:[
		  	{  name: "Front-End Development",
		  	   school: "Udacity",
		  	   certification: "Nanodegree",
		  	   completed: "June 2016",
		       url : "https://www.udacity.com/course/viewer#!/c-ud775/l-3105028581"
		  	},
		  	{  name: "Data Science",
		  	   school: "Johns Hopkins University",
		  	   certification: "Specialization",
		  	   completed: "September 2016",
		  	   url: "https://www.coursera.org/specializations/jhu-data-science"
		  	},
		  	{  name: "Full Stack Development",
		  	   school: "Udacity",
		  	   certification: "Nanodegree",
		  	   completed: "tbd",
		  	   url: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
		  	}
		], // close onlineCourses array

		certifications: [
		    { certificate: "Advanced Project Management",
			  issuedBy: "Stanford University - Continuing Education",
			  completed: "May 2013"
			},
			{ certificate: "Certified Scrum Master (CSM)",
			  issuedBy: "Scrum Alliance",
			  completed: "October 2009"
			},
			{ certificate: "Certified Scrum Product Owner (CSPO)",
			  issuedBy: "Scrum Alliance",
			  completed: "May 2013"
			},
			 { certificate: "Certified Scrum Professional (CSP)",
			   issuedBy: "Scrum Alliance",
			   completed: "May 2014"
			},
			 { certificate: "Project Management Professional (PMP)",
			   issuedBy: "Project Management Institute (PMI)",
			   completed: "December 2002"
			}
		] // close certifications array
    },   // close education

    projects: {
    	projects: [
	       { img: "images/197x148.gif",
	         name: "Front End Portfolio",
	         dates: "October 15, 2015 - present",
	         description: "JavaScript, Bootstrap, Backbone"},
	       { img: "images/197x148.gif",
	         name: "Full Stack Projects",
	         dates: "July 2015 - present",
	         description: "Python"},
	       { img: "images/197x148.gif",
	         name: "Data Science Projects",
	         dates: "October 3, 2015 - Present",
	         description: "Using R"}
	    ]
	 },
    locations: {
    	locations:[
    		"Syracuse, NY, USA", 
    		"San Francisco, CA, USA", 
    		"San Diego, CA, USA", 
    		"Riyadh, Saudi Arabia", 
    		"Kuching, Sarawak, Malaysia"
    	]
    }
}; //close model


/*
 * Control
*/
var control = {
	init: function() {
		view.init();
	},
	getBio: function() {
		return model.bio;
	},
	getAgileSkills: function(){
		return model.bio.agileSkills;
	},
	getWebSkills: function(){
		return model.bio.webSkills;
	},
	getDevSkills: function(){
		return model.bio.devSkills;
	},
	getDataSkills: function(){
		return model.bio.dataSkills;
	},
	getDirectorSkills: function(){
		return model.bio.directorPDSkills;
	},
	getWork: function(){
		return model.work;
	},
	getProjects: function() {
		return model.projects.projects;
	},
	getSchools: function() {
		return model.education.schools;
	}, 
	getOnlineCourses: function() {
		return model.education.onlineCourses;
	},
	getCertifications: function() {
		return model.education.certifications;
	},
	getLocations: function() {
		return model.locations.locations;
	}

}; // close control

/*
 * View
*/
var view = {
	helpers: {
		HTMLheaderName: '<h1 id="name">%data%</h1>',
		HTMLheaderRole: '<span>%data%</span><hr/>',

		HTMLcontactGeneric: '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
		HTMLmobile: '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
		HTMLemail: '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
		HTMLtwitter: '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
		HTMLgithub: '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
		HTMLblog: '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
		HTMLlocation: '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',

		HTMLbioPic: '<img src="%data%" class="biopic">',
		HTMLwelcomeMsg: '<span class="welcome-message">%data%</span>',

		HTMLskillsStart: '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
		HTMLskills: '<li class="flex-item"><span class="white-text">%data%</span></li>',

		HTMLworkStart: '<div class="work-entry"></div>',
		HTMLworkEmployer: '<a href="#">%data%',
		HTMLworkTitle: ' - %data%</a>',
		HTMLworkDates: '<div class="date-text">%data%</div>',
		HTMLworkLocation: '<div class="location-text">%data%</div>',
		HTMLworkDescription: '<p><br>%data%</p>',

		HTMLprojectStart: '<div class="project-entry"></div>',
		HTMLprojectTitle: '<a href="#">%data%</a>',
		HTMLprojectDates: '<div class="date-text">%data%</div>',
		HTMLprojectDescription: '<p><br>%data%</p>',
		HTMLprojectImage: '<img src="%data%">',

		HTMLschoolStart: '<div class="education-entry"></div>',
		HTMLschoolName: '<a href="#">%data%',
		HTMLschoolDegree: ' -- %data%</a>',
		HTMLschoolDates: '<div class="date-text">%data%</div>',
		HTMLschoolLocation: '<div class="location-text">%data%</div>',
		HTMLschoolMajor: '<em><br>Major: %data%</em>',

		HTMLonlineClasses: '<h3>Online Classes</h3>',
		HTMLonlineSchool: '<a href="#">%data%',
		HTMLonlineCourse: ' -- %data%</a>',
		HTMLonlineDates: '<div class="date-text">%data%</div>',
		// //var HTMLonlineURL = '<br><a href="#">%data%</a>',
		HTMLonlineType: '<em><br>Certification: %data%</em>',

		HTMLcertifications: '<h3>Professional Certifications</h3>',
		HTMLcertificationCertificate: '<a href="#">%data%',
		HTMLcertificationIssuer: ' -- %data%</a>',
		HTMLcertificationDate: '<div class="date-text">%data%</div>',
		HTMLcertificationIssuer: '<em><br>Issued By: %data%</em>',

		internationalizeButton: '<button>Internationalize</button>',
		googleMap: '<div id="map"></div>',
	},

	init: function() {
		/*
		These are HTML strings. As part of the course, you'll be using JavaScript functions
		replace the %data% placeholder text you see in them.
		*/
		console.log("Initializing view...");
		this.render();
	}, // close init
	render: function() {
		// get data from model and create local variables by calling control 'getter' functions
		var bio = control.getBio();
		var work = control.getWork();
		var projects = control.getProjects();
		var schools = control.getSchools();
		var onlineCourses = control.getOnlineCourses();
		var certifications = control.getCertifications();

		// header and bio section
		$("#header").prepend(view.helpers.HTMLheaderName.replace("%data%",bio.name));
		$("#header").append(view.helpers.HTMLbioPic.replace("%data%", bio.bioPic));
		$("#topContacts").append(view.helpers.HTMLmobile.replace("%data%", bio.contact.mobile));
		$("#topContacts").append(view.helpers.HTMLemail.replace("%data%", bio.contact.email));
		$("#topContacts").append(view.helpers.HTMLtwitter.replace("%data%", bio.contact.twitter));
		$("#topContacts").append(view.helpers.HTMLgithub.replace("%data%", bio.contact.github));
		$("#topContacts").append(view.helpers.HTMLlocation.replace("%data%", bio.contact.location));
		$("#header").append(view.helpers.HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(view.helpers.HTMLskillsStart);

		if(bio.role === "Web Developer") skills = control.getWebSkills();
		else if(bio.role === "Agile Change Agent") skills = control.getAgileSkills();
		else if(bio.role === "Full Stack Developer") skills = control.getDevSkills();
		else if(bio.role === "Data Scientist") skills = control.getDataSkills();
		else skills = control.getDirectorSkills();
		for(skill in skills) $("#skills").append(view.helpers.HTMLskills.replace("%data%", skills[skill]));

		//Work Section 
		for(j in work.jobs) {
			$("#workExperience").append(view.helpers.HTMLworkStart);
			var job = view.helpers.HTMLworkEmployer.replace("%data%", work.jobs[j].company);
			job = job + "       " + work.jobs[j].position;
			$(".work-entry:last").append(job);
			$(".work-entry:last").append(view.helpers.HTMLworkLocation.replace("%data%", work.jobs[j].location));
			$(".work-entry:last").append(view.helpers.HTMLworkDates.replace("%data%", work.jobs[j].tenure));
			$(".work-entry:last").append(view.helpers.HTMLworkDescription.replace("%data%", work.jobs[j].description));
		};

		// Projects Section
		for(p in projects) {
			$("#projects").append(view.helpers.HTMLprojectStart);
			$(".project-entry:last").append(view.helpers.HTMLprojectTitle.replace("%data%", projects[p].name));
			$(".project-entry:last").append(view.helpers.HTMLprojectDates.replace("%data%", projects[p].dates));
			$(".project-entry:last").append(view.helpers.HTMLprojectDescription.replace("%data%", projects[p].description));
			$(".project-entry:last").append(view.helpers.HTMLprojectImage.replace("%data%", projects[p].img));
		}; // close projects for loop	

		// Education Section
		for(s in schools){
			$("#education").append(view.helpers.HTMLschoolStart);
			$(".education-entry:last").append(view.helpers.HTMLschoolName.replace("%data%",schools[s].name));
			$(".education-entry:last").append(view.helpers.HTMLschoolLocation.replace("%data%", schools[s].location));			
			$(".education-entry:last").append(view.helpers.HTMLschoolDates.replace("%data%", schools[s].graduation));
			$(".education-entry:last").append(view.helpers.HTMLschoolMajor.replace("%data%", schools[s].major));
			$(".education-entry:last").append(view.helpers.HTMLschoolDegree.replace("%data%", schools[s].degree));
		}; // close schools for loop

		$("#education").append(view.helpers.HTMLonlineClasses);
		for(ol in onlineCourses) {
			console.log("online courses for loop");
			$("#education").append(view.helpers.HTMLschoolStart);
			$(".education-entry:last").append(view.helpers.HTMLonlineSchool.replace("%data%",onlineCourses[ol].school));
			$(".education-entry:last").append(view.helpers.HTMLonlineDates.replace("%data%", onlineCourses[ol].completed));
			$(".education-entry:last").append(view.helpers.HTMLonlineType.replace("%data%", onlineCourses[ol].certification));
			$(".education-entry:last").append(view.helpers.HTMLonlineCourse.replace("%data%", onlineCourses[ol].name));
		}; // close online courses for loop
		
		$("#education").append(view.helpers.HTMLcertifications);
		for(c in certifications) {
			$("#education").append(view.helpers.HTMLschoolStart);
			$(".education-entry:last").append(view.helpers.HTMLcertificationCertificate.replace("%data%", certifications[c].certificate));
			$(".education-entry:last").append(view.helpers.HTMLcertificationDate.replace("%data%", certifications[c].completed));
			$(".education-entry:last").append(view.helpers.HTMLcertificationIssuer.replace("%data%", certifications[c].issuedBy));

		}; // close certifications for loop

	}// close render
}; //close view

control.init();




$("#")
$(document).click(function(loc) {
	var x=loc.pageX;
	var y=loc.pageY;
    console.log("x-coordinate = ", x, " y-coordinate = ", y);
	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " +name[1];
}

$("#main").append(view.helpers.internationalizeButton);



// Add map of places I've lived and worked
$("#mapDiv").append(view.helpers.googleMap);
// initializeMap();