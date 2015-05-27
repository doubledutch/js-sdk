// Copyright © DoubleDutch 2015
// DD Events SDK Emulator
var sessionToken = "87a66c38-f1b6-45d6-a758-01fbfaa4c351";
var currentUser = {
  FirstName: "Jean",
  LastName: "Valjean",
  Title: "Character",
  Company: "Les Misérables",
  ImageUrl: "http://images.amcnetworks.com/bbcamerica.com/wp-content/blogs.dir/55/files/2012/12/Hugh-Jackman-Les-Miserables.jpg",
  UserIdentifierId: "24601"
};
$(function () {
  DD.Events.getCurrentUserImplementation = function () {
    this.getCurrentUserCallback(currentUser);
  };

  DD.Events.getCurrentEventImplementation = function () {
    DD.Events.getSignedAPIAsync("admin/applications/current", "", function (signedUrl) {
      $.get(signedUrl, function (event) {
        DD.Events.getCurrentEventCallback(event.Value[0]);
      });
    });
  };

  DD.Events.setTitleImplementation = function () {
    console.log("Not implemented");
  };

  DD.Events.getSignedAPIImplementation = function (apiFragment, postBody) {
    var joinOperator = apiFragment.indexOf("?") > 0 ? "&" : "?";
    var signature = "sessionToken=" + sessionToken;
    var signedUrl = "https://api.doubledutch.me/v2/" + apiFragment + joinOperator + signature + "&sdk=true";
    DD.Events.getSignedAPICallback(signedUrl);
  };
});
