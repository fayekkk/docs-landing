var $serialsField = $("#PurchaseOrderItem0Description");
$serialsField.on("change", function (e) {
  var serials = $serialsField.val().split("\n");
  for (var i = 0; i < serials.length; i++) {
    var $inputField = $("#PurchaseOrderItem0Serial > div > input[type=text]");
    $inputField.focus();
    $inputField.val(serials[i]).change();
    $inputField.trigger(jQuery.Event("keydown", { which: 13, keyCode: 13 }));
    $inputField.trigger(jQuery.Event("keyup", { which: 13, keyCode: 13 }));
  }
});
