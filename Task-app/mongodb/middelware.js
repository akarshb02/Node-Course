app.use((req, res, next) => {
     console.log(req.method, req.path);
     next()
     if (req.method == 'GET') {
        res.send("Get requests are disabled");
     } else {
         next()
     }
    res.status(503).send("System under maintenance")


})
