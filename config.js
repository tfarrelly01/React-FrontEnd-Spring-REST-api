

module.exports = {
  ROUTE: 'http://localhost:8080'
};

axios.get('http://localhost:8080/buildings')
      .then(res => {
        console.log(res.data)

      });
