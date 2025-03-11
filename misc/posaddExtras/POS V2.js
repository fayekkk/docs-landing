$(document).ready( function () {
  /********************************************** add style **********************************************/
  $("body").append(`
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    ._ar {font-family: RB-Regular,Poppins,sans-serif!important}
    
    *:not(i, .fa, .fas, .sortable-arrows a),
    input,
    textarea,
    select,
    table,
    th,
    td,
    ::placeholder,
    .calendars-rtl.calendars a,
    .calendars-rtl .calendars-month span {
        font-family: RB-Regular,Poppins,sans-serif!important;
    }
    
    #addNoteModal .modal-header .modal-title {
        font-weight: 900!important;
    }

    #addNoteModal button {
        transition: 0.3s all ease
    }

    #addNoteModal .modal-footer,
    #addNoteModal .modal-body {
        padding-left: 25px;        
        padding-right: 25px;
    }

    #addNoteModal .modal-header {
        border-bottom: 0;
        padding: 0.5rem 0 0 0;
        position: relative;
    }

    #addNoteModal .modal-footer {
        border-top: 0;
        padding-bottom: 25px;
    }

    #addNoteModal .modal-body {
        padding-top: 25px;
    }

    #item-note {
        padding: 0.8rem;
        height: auto;
    }

    .modal-footer button {
        padding: 0.5rem 1rem;
        font-weight: 700;
    }

    .badge-dark {
        background-color: #343a40;
    }

    .badge {
        padding: 0.3rem 0.5rem;
    }

    .modal-header .close {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        opacity:1;
        color: #fff!important;
        background-color: #000;
        border-radius: 50%;
        width: 30px;
        aspect-ratio: 1;
        height: 30px;
    }
    </style>
    `);

  /********************************************** Get Extras Services **********************************************/
 async function fetchItemOptions() {
    return await fetch('/v2/api/entity/item_category/list/1?filter[category.name]=extras&per_page=50')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

// Async method to create HTML from fetched options
async function createItemSelect() {
    try {
        const data = await fetchItemOptions();
        // Create the dropdown options
        const options = data.data.map(item => {
            return `<option value="${item.item.id}">${item.item.name}</option>`;
        }).join('');
        return options;
    } catch (error) {
        console.error('API call failed: ', error);
    }    
}
/********************************************** updating DOM **********************************************/
async function CreateModel(){
  const options = await createItemSelect();
  const noteModal = `
  <!-- Modal -->
  <div class="modal fade _ar" data-product="" id="addNoteModal" tabindex="-1" role="dialog" aria-labelledby="addNoteModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-end border-bottom-0">
          <button type="button" class="close btn btn-dark" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label style="font-weight: 900;" for="item-note" class="h3">طلب إضافي</label>
                       <input style="margin-top: 1.5rem" type="text" class="form-control" id="item-note" placeholder="أدخل ملاحظة على هذا الصنف" />
                      <select class="form-control" id="item-select" style="margin-top: 1.5rem;">
                          <option value="-1">اختر صنفاً</option>
                          ${options}  </select>
            </div>
          </form>
        </div>
        <div class="modal-footer text-left border-top-0">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">إغلاق</button>
          <button type="button" id="save-note" class="btn btn-info">إضافة</button>
        </div>
      </div>
    </div>
  </div>
  `;
  
  $("body").append(noteModal);
}
CreateModel()

  let partPayBtn, fullPayBtn;

  let checkPartPayButton = setInterval(() => {
    console.log("No part pay btn yet");
    if ($(".pos-rel .dropdown-menu button").length) {
      clearInterval(checkPartPayButton);
      $(".pos-rel .dropdown-menu button").attr("id", "part_pay-btn");
      partPayBtn = $("#part_pay-btn");
    }
  }, 10);

  let checkFullPayButton = setInterval(() => {
    console.log("No full pay btn yet");
    if ($(".pay").length) {
      clearInterval(checkFullPayButton);
      $(".pay").attr("id", "full_pay-btn");
      fullPayBtn = $("#full_pay-btn");
    }
  }, 10);

  /********************************************** check if item was added before **********************************************/
  function checkIfItemAdded(item) {
    var productExists =
      $(".unit_price").filter(function () {
        return $(this).attr("data_proid") === item;
      }).length > 0;

    return productExists;
  }

  /********************************************** create badges for order item **********************************************/
  function createBadgesForOrderItem(orderItem, notes) {
    const notesContainer = orderItem.find(".notes-container");
    // notesContainer.empty(); // Clear existing badges

    if (notes) {
      notes.split("/n").forEach((note) => {
        if (note.trim()) {
          notesContainer.append(`
          <div class="note-badge badge badge-dark">
            <div class="d-flex align-items-center justify-content-between">
              <span style="margin-left: 0.25rem">${note.trim()}</span>
              <i class="remove-badge fa fa-times"></i>
            </div>
          </div>
        `);
        }
      });
    }
  }

  /********************************************** new function to update invItems and data-items attribute **********************************************/
  function updateInvItemsAndDataAttribute(productId, notes) {
    const $orderItem = $(`.orders-list .unit_price[data_proid=${productId}]`).closest(".order-item");

    // find the item in invItems array by productId
    const itemIndex = invItems.findIndex((item) => item.product.id === productId);
    console.log("invItems", invItems);
    console.log("itemIndex", itemIndex);

    if (itemIndex !== -1) {
      // update invItems
      invItems[itemIndex].notes = notes;

      // update the data-notes attribute of the order-item
      $orderItem.attr("data-notes", notes);

      // update the data-items attribute of the active .orders-tab
      const $activeTab = $(".orders-tab.active");
      $activeTab.attr("data-items", JSON.stringify(invItems));
      console.log("Updated active tab data-items:", JSON.parse($activeTab.attr("data-items")));
    } else {
      console.error(`Product with ID ${productId} not found in invItems array.`);
    }
  }

  /********************************************** new function to update invItems and data-items attribute on click pay buttons **********************************************/
  function updateInvItemsBeforePayment() {
    const $activeTab = $(".orders-tab.active");
    const $orderItems = $(".orders-list .order-item");

    // update invItems array
    invItems = $orderItems
      .map(function () {
        const $item = $(this);
        const productId = $item.find(".unit_price").attr("data_proid");
        const notes = $item.attr("data-notes") || "";

        // find the existing item in invItems
        const existingItem = invItems.find((item) => item.product.id == productId);

        if (existingItem) {
          return {
            ...existingItem,
            notes: notes,
          };
        } else {
          console.error(`Product with ID ${productId} not found in invItems array.`);
          return null;
        }
      })
      .get()
      .filter((item) => item !== null);

    // update data-items attribute on active order-tab
    $activeTab.attr("data-items", JSON.stringify(invItems));
    console.log("Updated active tab data-items before payment:", JSON.parse($activeTab.attr("data-items")));
  }

  /********************************************** save note functionality **********************************************/
  $(document).on("click", "#save-note", function (e) {
    e.preventDefault();

    const selectedProductId = $("#addNoteModal").attr("data-product");
    let itemNotes = "";
    let noteVal = $("#item-note").val();

    if (!$(`.orders-list .unit_price[data_proid=${selectedProductId}]`).closest(".order-item").attr("data-notes")) {
      itemNotes = $("#item-note").val();
    } else {
      itemNotes = $(`.orders-list .unit_price[data_proid=${selectedProductId}]`).closest(".order-item").attr("data-notes") + "/n" + noteVal;
    }

    $(`.orders-list .unit_price[data_proid=${selectedProductId}]`).closest(".order-item").attr("data-notes", itemNotes);
    $(`.orders-list .unit_price[data_proid=${selectedProductId}]`)
      .siblings(".notes-container")
      .attr("data-item", selectedProductId).append(`<div class="note-badge badge badge-dark">
        <div class="d-flex align-items-center justify-content-between">
          <span style="margin-left: 0.25rem">${noteVal}</span>
          <i class="remove-badge fa fa-times"></i>
        </div>
        </div>`);

    setTimeout(() => {
      $("#addNoteModal").modal("hide");
    }, 100);

    // update invItems and data-items attribute
    updateInvItemsAndDataAttribute(selectedProductId, itemNotes);


    const inputArray = angularComponentRef.getCurrentInvoice().invoiceItems

    // // Transform the input array
    const outputArray = inputArray.map(item => ({
      item_id: item.product.id,
      item_qty: item.count, // Assuming count represents quantity here
      item_price: item.price,
      discount: item.discount,
      discount_type: item.discountType,
      product_name: item.product.title // Assuming you want the product title as the name
    }));
    
    console.log(outputArray);
    angularComponentRef.arryAddItemToInvoice(outputArray)

  });
// arryAddItemToInvoice  angularComponentRef.getCurrentInvoice().invoiceItems



  /********************************************** remove badge functionality **********************************************/
  $(document).on("click", ".remove-badge", function (e) {
    const $badge = $(this).closest(".note-badge");
    const $orderItem = $badge.closest(".order-item");
    const noteToRemove = $badge.find("span").text().trim();

    $badge.remove();

    // update the data-notes attribute
    let currentNotes = $orderItem.attr("data-notes");
    let updatedNotes = currentNotes
      .split("/n")
      .filter((note) => note.trim() !== noteToRemove)
      .join("/n");
    $orderItem.attr("data-notes", updatedNotes);

    // update invItems and data-items attribute
    updateInvItemsAndDataAttribute($orderItem.find(".unit_price").attr("data_proid"), updatedNotes);
  });

  // add click event listeners to the payment buttons
  $(document).on("click", "#part_pay-btn, #full_pay-btn", function (e) {
    updateInvItemsBeforePayment();
  });

  /********************************************** this code is working when i go from one tab to another tab **********************************************/
  let myUl = document.querySelector(".orders-list");
  let previousUl = myUl.cloneNode(true);

  /********************************************** on click functionality on the icon **********************************************/
  $(document).on("click", ".add_note-btn", function () {
    let proId = $(this).parent().attr("data_proid");
    $("#addNoteModal").attr("data-product", proId);
    $("#item-note").val("");
    $("#addNoteModal").modal("show");
  });

  /********************************************** on add new item event listener **********************************************/
  let invItems = [];
  const observer = new MutationObserver((mutations) => {
    console.log("MMUTATION EVENT", mutations);
    if (mutations[0].type === "childList" && mutations[0].target === myUl && myUl.innerHTML !== previousUl.innerHTML) {
      console.log("mutation happened");
      const ordersList = $(".orders-list");
      if (ordersList && ordersList.children().length > 0) {
        let currentTabData = angularComponentRef.getCurrentInvoice();
        let currentTabItems = currentTabData.invoiceItems;
        console.log("currentTabItems", currentTabItems);

        // clear the invItems array before adding new items
        invItems = [];

        currentTabItems.forEach((item, i) => {
          console.log(item.product.id);
          const $orderItem = ordersList.find(`li .unit_price[data_proid="${item.product.id}"]`).closest(".order-item");
          const itemNotes = $orderItem.attr("data-notes") || "";

          // push the item along with its notes into invItems
          invItems.push({
            ...item,
            notes: itemNotes,
          });

          if (!checkIfItemAdded(item.product.id)) {
            ordersList
              .find("li .unit_price")
              .eq(i)
              .attr("data_proid", item.product.id)
              .css("position", "relative")
              .append(
                `
              <span style="position: absolute; left: 0;" _ngcontent-ng-c2487589423="" tabindex="0" mattooltipposition="below" class="add_note-btn add-tab" aria-describedby="cdk-describedby-message-ng-1-21" cdk-describedby-host="ng-1"><mat-icon _ngcontent-ng-c2487589423="" role="img" svgicon="plus-thick" matlisticon="" class="mat-icon notranslate ng-tns-c2487589423-0 mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="plus-thick"><svg viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z"></path></svg></mat-icon></span>
              `
              );

            ordersList
              .find("li .unit_price")
              .eq(i)
              .after(`<div style="gap: 0.5rem; padding-top: 0.2rem" class="notes-container d-flex flex-wrap"></div>`);

            // Create badges for existing notes
            createBadgesForOrderItem($orderItem, itemNotes);
          }
        });

        // update the data-items attribute of the active .orders-tab
        // const $activeTab = $(".orders-tab.active");
        // $activeTab.attr("data-items", JSON.stringify(invItems));
        // console.log("Updated active tab data-items:", JSON.parse($activeTab.attr("data-items")));
      }
    }
  });

  observer.observe(myUl, { childList: true });

  /********************************************** click on payment functionality **********************************************/
  $(document).on("click", "#paymentSubmitBtn", function (e) {
    e.preventDefault();
    console.log("ckick payment");
  });

  /********************************************** click on order tab functionality **********************************************/
  $(document).on("click", ".orders-tab", function () {
    const $activeTab = $(this);
    const dataItems = JSON.parse($activeTab.attr("data-items") || "[]");

    $(".orders-list .order-item").each(function () {
      const $orderItem = $(this);
      const productId = $orderItem.find(".unit_price").attr("data_proid");
      const item = dataItems.find((item) => item.product.id == productId);

      if (item && item.notes) {
        $orderItem.attr("data-notes", item.notes);
        createBadgesForOrderItem($orderItem, item.notes);
      } else {
        $orderItem.attr("data-notes", "");
        $orderItem.find(".notes-container").empty();
      }
    });
  });

  /********************************************** change invoice items description **********************************************/
  window.addEventListener(
    "message",
    (event) => {
      let invoiceId;
      let invItemsIds = [];

      if (event.data.event == "invoice_submit") {
        invoiceId = event.data.event_data.invoice_id;
        $.get(`/v2/api/entity/invoice/${invoiceId}`).then((invData) => {
          let invoiceItems = invData.invoice_item;
          let updatePromises = [];

          for (const item of invoiceItems) {
            invItemsIds.push({ product_id: item.product_id, inv_item_id: item.id });

            // Find the corresponding item in the invItems array
            const invItem = invItems.find((invItem) => invItem.product.id == item.product_id);

            if (invItem && invItem.notes) {
              let updateInvItem = {
                description: invItem.notes,
              };

              let updatePromise = $.ajax({
                type: "POST",
                contentType: "application/json",
                url: `/v2/api/entity/invoice_item/${item.id}/fields`,
                headers: { accept: "application/json" },
                data: JSON.stringify(updateInvItem),
              })
                .then((res) => {
                  console.log(`Invoice item updated successfully with notes: ${invItem.notes}`);
                })
                .fail((r) => {
                  console.log(`Error Code ${r.status} has happened, Res: ${JSON.stringify(r)}`);
                  throw new Error(`Failed to update invoice item ${item.id}`);
                });

              updatePromises.push(updatePromise);
            } else {
              console.log(`No notes found for product ID: ${item.product_id}`);
            }
          }

          // Wait for all updates to complete before printing
          Promise.all(updatePromises)
            .then(() => {
              console.log("All invoice items updated successfully");

              // Trigger the print function
              setTimeout(() => {
                // console.log($("#invoice-preview").attr("data-src"));
                $(".print-invoice-btn").trigger("click");
                // $("#invoice-preview").get(0).contentWindow.print();
              }, 1500);
            })
            .catch((error) => {
              console.error("Error updating invoice items:", error);
            });
        });
      }
    },
    false
  );
});
