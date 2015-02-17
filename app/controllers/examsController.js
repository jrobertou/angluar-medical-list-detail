ciapp.controller('examsListController', ['$scope', '$location', 'apiExams', function($scope, $location, apiExams) {
  apiExams.all(function (data) {
    $scope.patients = data;
  });
}]);

ciapp.controller('examDetailsController', ['$scope', '$routeParams', 'apiExams', function($scope, $routeParams, apiExams) {
	$scope.examId = $routeParams.idExam;

	apiExams.all(function (data) {
		var patient = (_.where(data, {id: parseInt($routeParams.idPatient)}))[0]
		,	exam = (_.where(patient.examsList, {id: parseInt($routeParams.idExam)}))[0];
		
	  $scope.patient = patient;
	  $scope.exam = exam;
	  $scope.hospital = exam.hospital;
	  $scope.reportPath = 'public/reports/13_SIT.pdf';
	});
}]);