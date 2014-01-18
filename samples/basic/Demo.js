$(function () {
  $("#text").text("init");
  DD.Events.onReady(function () {

    // Set a custom title on the page.
    DD.Events.setTitleAsync("Custom Title");

    // Get the current user in the app.
    DD.Events.getCurrentUserAsync(function (user) {
      $("#user .image").attr("src", user.ImageUrl);
      $("#user-firstName").text(user.FirstName);
      $("#user-lastName").text(user.LastName);
      $("#user-company").text(user.Company);
      $("#user-title").text(user.Title);
    });

    // Get the current event in the app.
    DD.Events.getCurrentEventAsync(function (event) {
      $("#event .image").attr("src", event.Icon);
      $("#event-name").text(event.Name);
      $("#event-desc").text(event.Description);
      $("#event-start").text(new Date(event.StartDate).toDateString());
      $("#event-end").text(new Date(event.EndDate).toDateString());
    });

    //DD.Events.getSignedAPIAsync("users/?so=Score&sd=Descending&count=5", "", function (signedUrl) {
    //  $("#text").text(signedUrl);
    //  $.get(signedUrl, function (data) {
    //    $("#text").text(JSON.stringify(data));
    //  });
    //});
  });
});
