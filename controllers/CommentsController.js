hackedNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, ArticlesFactory, UtilitiesFactory) {
  $scope.article = UtilitiesFactory.findById(ArticlesFactory.articles, $stateParams.id);
});


// courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory ) {
//   $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
//   $scope.addStudent = function() {
//     $scope.course.students.push({ name: $scope.studentName });
//     $scope.studentName = null;
//   }
// });
