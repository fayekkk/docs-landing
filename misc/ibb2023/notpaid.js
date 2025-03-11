$(document).ready(function () {
  setTimeout(function () {
    var $el1 = $(".dropup:eq(2) ul button");
    var $el2 = $(".dropup > .btn-success:first");
    $($el1).on("click", function () {
      setTimeout(() => {
        deletepayments();
      }, 200);
    });
    $($el2).on("click", function () {
      setTimeout(() => {
        deletepayments();
      }, 200);
    });
    function deletepayments() {
      let allpayments = $(".payment-item-input-group").eq(0).find("button");
      // let allpayments = $(
      //   "#paymentModal > div.modal-dialog.modal-full.ng-tns-c973832774-1 > div > div > div > div.col-sm-7.flex-col.ng-tns-c973832774-1 > div > div.payment-methods-scroll.ng-tns-c973832774-1 > div.payment-item-input-group.ng-tns-c973832774-1.ng-star-inserted > button"
      // );

      allpayments.each(function () {
        $(this).trigger("click");
      });
    }
    function stopPayment() {
      $("#payamount_cash").val("0").trigger("change");
      alert("Payment can't be selected by a salesman.");
    }

    $("#payamount_cash").val("0");
    $("#payamount_cash").on("input", stopPayment);
    $(".payment-modal--calculation").css("pointer-events", "none");
  }, 500);
});
