var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
	$scope.obj = ob.properties;
    $scope.float = {};
	$scope.current = 0;
    Object.keys($scope.obj).forEach(key => {
		$scope.float[key] = $scope.obj[key]; 
	});
    $scope.counter = function charcountupdate(str,ml) {
		let lng = document.getElementById(str).value;
		str = str + 'count';
		document.getElementById(str).innerHTML = lng.length +'/' + ml;
	}
    $scope.requiredField = function lookForField(keyy,required){
		if(required != undefined && required.find(k => k == keyy))
			{
				return true
			}
		else
			{
				return false
			}
	}
	$scope.submitted =  function sub(){
		let form = document.getElementById('myForm');
		let valid = form.checkValidity();
		let ob = {};
		let prop = {};
		let candidate = document.getElementById('candidateName').value;
		if(valid){
		for(let i in  $scope.float){
			for(let j in $scope.float[i].properties){
				prop[j] = document.getElementById(j).value;
				ob[i] = prop;
			}
			prop = {};
		}
		console.log(candidate,ob);
		}
		else{
			console.log('Form is not Valid');
		}
	}	 
});

let ob = {
   "$schema": "http://json-schema.org/draft-07/schema#",
   "metaSchema": "https://static.ongrid.in/jschema/meta/0-0-1.json",
   "type": "object",
   "properties": {
      "generalImpression": {
         "type": "object",
         "title": "General Impression",
         "properties": {
            "candidateKnownDuration": {
               "type": "string",
               "title": "How long have you known the candidate?",
               "maxLength": 50
            },
            "candidateWorkedInCapacity": {
               "type": "string",
               "title": "In what capacity did the candidate work with you?",
               "maxLength": 50
            },
            "candidateRole": {
               "type": "string",
               "title": "What were the candidates roles and responsibilities?",
               "maxLength": 200
            },
            "candidateStrengths": {
               "type": "string",
               "title": "What according to you, are the candidates professional strengths?",
               "maxLength": 200
            },
            "areasOfImprovment": {
               "type": "string",
               "title": "Areas of improvement/concerns, if any?",
               "maxLength": 200
            },
            "reasonForLeavingCompany": {
               "type": "string",
               "title": "Why did he/she leave the company?",
               "maxLength": 100
            },
            "rehirePossibility": {
               "type": "string",
               "title": "If you were putting together a team, would you rehire the candidate? If yes, in what capacity?",
               "maxLength": 100
            },
         },
         "required": ["areasOfImprovment", "candidateStrengths"]
      },
      "achievements": {
         "type": "object",
         "title": "Achievements",
         "properties": {
            "candidateKeyContributions": {
               "type": "string",
               "title": "What are his/her biggest accomplishments or key contributions to the organization (examples)?",
               "maxLength": 200
            },
            "candidateRelativeStanding": {
               "type": "string",
               "title": "How does this person compare with other executives in similar positions in your organization or comparable organizations?",
               "maxLength": 200
            }
         },
         "required": ["candidateKeyContributions", "candidateRelativeStanding"]
      },
      "personalAttributes": {
         "type": "object",
         "title": "Personal Attributes",
         "properties": {
            "candidatePersonalQualities": {
               "type": "string",
               "title": "What kinds of personal qualities come to mind when you think of him/her?",
               "maxLength": 200
            },
            "candidateMotivation": {
               "type": "string",
               "title": "What motivates the candidate?",
               "maxLength": 200
            },
            "candidateCommSkills": {
               "type": "integer",
               "minimum": 1,
               "maximum": 5,
               "title": "How would you rate the candidates communication skills - verbal and written on a scale of 1 to 5, 5 being the best?"
            }
         },
         "required": ["candidateMotivation"]
      },
      "assessmentOnValues": {
         "type": "object",
         "title": "Assessment on Values (1 - Does not meet expectations, 2 - Meets some expectations, 3 - Meets expectations, 4 - Exceeds expectations sometimes, 5. Consistently exceeds expectations)",
         "properties": {
            "commitment": {
               "type": "integer",
               "minimum": 1,
               "maximum": 5,
               "title": "Commitment"
            },
            "passion": {
               "type": "integer",
               "minimum": 1,
               "maximum": 5,
               "title": "Passion"
            },
            "integrity": {
               "type": "integer",
               "minimum": 1,
               "maximum": 5,
               "title": "Integrity"
            }
         }
      }
   }
};    