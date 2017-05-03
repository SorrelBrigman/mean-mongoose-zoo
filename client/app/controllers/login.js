app.controller('LoginCtrl', function($scope, userFact, $location){
  console.log('login controller')
  $scope.login = () => {
    console.log("you cliked the login button")
    userFact.login($scope.loginUser)
    .then(() => {
      console.log("logged in from front endz")
      //redirect here
      console.log("$", $location.url())
      $location.url("/")
      $scope.$apply()
      console.log("after $location")
    })
  }

  $scope.register = () => {
    userFact.register($scope.loginUser)
    .then(() => {
      console.log("registered")
      //redirect here
      $location.url("/")
    })
  }
})
