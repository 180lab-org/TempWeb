$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      email: $("#email").val()
    };

    $.ajax({
      type: "POST",
      url: "https://script.google.com/macros/s/AKfycbyZN467ksmMC5qJJOIzbeWaw0eZR-ymOlQTYe2F6Y3WA7_oWRDTIBAi0z6gOP6Sew0qpQ/exec",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
  });
});