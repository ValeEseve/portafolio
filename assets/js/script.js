$(document).ready(function() {

  // DARK MODE TOGGLE
  $("#control-panel__btn-dark").click(function() {
    $("body").toggleClass("dark-mode");
  });



//   LANGUAGE TOGGLE
 $("#control-panel__btn-en").click(function () {
    $(".i18n").each(function () {
      const texto = $(this).data("en");
      if (texto) {
        $(this).text(texto);
      }
    });
  });

  $("#control-panel__btn-es").click(function () {
    $(".i18n").each(function () {
      const texto = $(this).data("es");
      if (texto) {
        $(this).text(texto);
      }
    });
  });



});