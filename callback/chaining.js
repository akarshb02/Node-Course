geocode("bangalore", (error, data) => {
      console.log("Error", error)
      console.log("data", data)
      forecast("bangalore", (error, foredata) => {
          console.log('Error', error)
          console.log('Data', foredata)
      })
  })
