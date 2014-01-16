$(function () {
  $("#text").text("init");
  DD.Events.onReady(function () {

    // Set a custom title on the page.
    DD.Events.setTitleAsync("Custom Title");

    // Get the current user in the app.
    DD.Events.getCurrentUserAsync(function (user) {
      $("#user-firstName").text(user.FirstName);
      $("#user-lastName").text(user.LastName);
      $("#user-company").text(user.Company);
      $("#user-title").text(user.Title);
      $("#user-image").attr("src", user.ImageUrl);
    });

    //DD.Events.getSignedAPIAsync("users/?so=Score&sd=Descending&count=5", "", function (signedUrl) {
    //  $("#text").text(signedUrl);
    //  $.get(signedUrl, function (data) {
    //    $("#text").text(JSON.stringify(data));
    //  });
    //});
  });
});