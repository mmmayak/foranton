import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {});

$("#myModal").on("shown.bs.modal", function() {
  $("#myButton").trigger("focus");
});
