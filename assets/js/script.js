$(document).ready(function () {
  let darkMode = false;

  // DARK MODE TOGGLE
  $("#control-panel__btn-dark").click(function () {
    darkMode = !darkMode;
    $("body").toggleClass("dark-mode");
    $("#control-panel__btn-i").removeClass();

    if (darkMode) {
      $("#control-panel__btn-i").addClass("fa-solid fa-sun-bright");
    } else {
      $("#control-panel__btn-i").addClass("fa-solid fa-moon-stars");
    }
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
