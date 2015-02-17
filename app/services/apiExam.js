ciapp.service('apiExams', ['$http', '$rootScope', 'ENDPOINT_URI', function ($http, $rootScope, ENDPOINT_URI) {
  var service = this;
  service.exams = null;

  service.addAgeForPatients = function(patients){
    for (var i = 0, imax = patients.length; i<imax; i++) {
      var ageDifMs = Date.now() - new Date(patients[i].dateOfBirth).getTime()
      , ageDate = new Date(ageDifMs);

      patients[i].age = Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return patients;
  };

  service.all = function (callback) {
  	if(service.exams == null){
			var url = ENDPOINT_URI + '/patients';
    	$http.get(url).then(function(response) {
    		callback(service.addAgeForPatients(response.data));
		  });
  	}
  	else {
  		callback(service.exams);
  	}
  };
}]);
