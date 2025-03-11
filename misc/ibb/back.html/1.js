$(document).ready(function () {
  setTimeout(function () {
    /************************************************** DONE BY A.F **************************************************/

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
      let allpayments = $(
        "#paymentModal > div.modal-dialog.modal-full.ng-tns-c2969145032-1 > div > div > div > div.col-sm-7.flex-col.ng-tns-c2969145032-1 > div > div.payment-methods-scroll.ng-tns-c2969145032-1 > div.payment-item-input-group.ng-tns-c2969145032-1.ng-star-inserted > button"
      );

      allpayments.each(function () {
        $(this).trigger("click");
      });
    }
    function stopPayment() {
      $("#payamount_cash").val("0").trigger("change");
      alert("Payment can't be selected by a salesman.");
    }

    // hidePayment();
    $("#payamount_cash").val("0");
    $("#payamount_cash").on("input", stopPayment);
    $(".payment-modal--calculation").css("pointer-events", "none");

    /************************************************** DONE BY MOMEN **************************************************/
    // styling and alert CDN
    $("body").append(
      `<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css" />
          <style>
          .mat-mdc-form-field,
          .mat-mdc-standard-chip .mdc-evolution-chip__text-label {
          font-family: inherit !important;
          }
          </style>
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>    
          `
    );

    // add id to delete button
    $(
      "#pos-wrapper > div.pos-content > app-invoice > div > div.calc-wrapper.ng-tns-c2487589423-0 > div > div.subwindow-container-fix.pads.ng-tns-c2487589423-0 > section > button.mat-mdc-tooltip-trigger.btn.btn-md.m-0.ng-tns-c2487589423-0.text-danger.btn-light.ng-star-inserted"
    ).attr("id", "delete_btn");

    // apply alert on click item
    window.addEventListener(
      "message",
      (event) => {
        if (event.data.event == "product_add") {
          let proId = event.data.event_data.product_id;
          $.get(`/v2/api/entity/product/${proId}`).then((proData) => {
            if (!proData.stock_balance) {
              // show alert
              Toastify({
                text: "لا يوجد كمية متاحة لهذا المنتج",
                duration: 1500,
                newWindow: true,
                className: location.search.includes("lang=ar") ? "_ar" : "",
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  color: "#fff",
                  background: "#fc5f7d",
                  border: "#fc5f7d",
                  fontFamily: !location.search.includes("lang=ar")
                    ? "RB-Bold,Tahoma,sans-serif"
                    : "",
                },
              }).showToast();

              // delete added item
              $("#delete_btn").click();
            }
          });
        }
      },
      false
    );
    /****************************************************************************************************************/
  }, 500);
});
