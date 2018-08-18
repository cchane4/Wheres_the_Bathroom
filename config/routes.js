module.exports = function(router){
// this route renders the homepage: home.handlebars
  router.get("/", function(req, res){
      res.render("home");
  });
}