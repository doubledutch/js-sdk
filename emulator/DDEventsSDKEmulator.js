// Copyright © DoubleDutch 2014
// DD Events SDK Emulator
var sessionToken = "87a66c38-f1b6-45d6-a758-01fbfaa4c351";
var currentUser = { FirstName: "Adam", LastName: "Liechty", Title: "Minion", Company: "DoubleDutch", ImageUrl: "https://s.gravatar.com/avatar/d3169d2b713b97c21d864ed1734d6852?s=160" };
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
