app.factory('ZookeeperFact', function($http){
  console.log("here's the zookeeper factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/keepers`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    add: function(newZookeeper) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/addKeeper`, newZookeeper)
          .then((data) => {
            console.log("data", data)
            resolve(data.data.zookeepers)
          })
        })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/keepers/${id}`)
          .then((data) => {
            resolve()
          })
      })
    }
  }
})
