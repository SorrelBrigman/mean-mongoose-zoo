app.factory('AnimalFact', function($http) {

  return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/animals`)
            .then((data) => {
              console.log(data.data)
              resolve(data.data)
            })
        })
      },
    add: function(newAnimal) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/addAnimal`, newAnimal)
          .then((data) => {
            resolve(data)
          })
        })
    },

    remove: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`http://localhost:3000/animals/${id}`)
          .then((data) => {
            resolve()
          })
      })
    },

    update: (id, updateInfo) => {
      return new Promise((resolve, reject) => {
        $http.patch(`http://localhost:3000/animals/${id}`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
    }
  }
});
