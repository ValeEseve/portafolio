$(document).ready(function() {
  $("#control-panel__btn-dark").click(function() {
    $("body").toggleClass("dark-mode");
  });



//   LANGUAGE TOOGLE
  $("#control-panel__btn-en").click(() => {
    $(".i18n").each(() => {
        const text = $(this).data("en")
        $(this).text(text)
    })
  })

  $("#control-panel__btn-es").click(() => {
    $(".i18n").each(() => {
        const text = $(this).data("es")
        $(this).text(text)
    })
  })



});