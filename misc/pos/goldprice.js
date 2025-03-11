$(document).ready(function () {
  setTimeout(() => {
    console.log("start");
    // ThisIs for onselectElement
    function onselectElement() {
      $(document).ready(function (e) {
        $(document).on("click", ".product", function (e) {
          e.preventDefault();
          console.log("click on product", $(this).attr("data-product"));
          var myHeaders = new Headers();
          myHeaders.append("x-access-token", "goldapi-vbiimslw5dbel7-io");
          myHeaders.append("Content-Type", "application/json");
          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };
          let productId = $(this).attr("data-product");
          fetch("https://www.goldapi.io/api/XAU/SAR", requestOptions)
            .then((response) => response.text())
            .then((results) => {
              let result = JSON.parse(`${results}`);
              console.log(result);
              $.get(
                `/v2/api/entity/product_item_barcode/list/1?filter[product_id]=${productId}`
              ).then((product) => {
                console.log(product);
                let category =
                  product.data[0].product_item_barcode_product.brand;
                console.log(category);
                let itemprice = -1;
                console.log(category);
                switch (category) {
                  case "24k":
                    itemprice = result.price_gram_24k;
                    break;
                  case "22k":
                    itemprice = result.price_gram_22k;
                    break;
                  case "21k":
                    itemprice = result.price_gram_21k;
                    break;
                  case "20k":
                    itemprice = result.price_gram_20k;
                    break;
                  case "18k":
                    itemprice = result.price_gram_18k;
                    break;
                  case "16k":
                    itemprice = result.price_gram_16k;
                    break;
                  case "14k":
                    itemprice = result.price_gram_14k;
                    break;
                  case "10k":
                    itemprice = result.price_gram_10k;
                    break;
                }
                if (itemprice != -1) {
                  let price = product.data[0].unit_price + itemprice;
                  let itemsData = {
                    item_id: product.data[0].product_id,
                    item_qty: product.data[0].quantity,
                    item_price: price,
                    discount: 0,
                    discount_type: "",
                    product_name: "",
                  };
                  console.log(itemsData);
                  $(`#pos-wrapper > div.pos-content > app-invoice > div >
                    div.calc-wrapper > div > div.subwindow-container-fix.pads >
                    section.content-numpad >
                    button.btn.btn-md.m-0.ng-tns-c1-0.text-danger.btn-light.ng-star-inserted`).click();
                  angularComponentRef.arryAddItemToInvoice([itemsData]);
                } else {
                  alert("ther's an error");
                }
              });
            })
            .catch((error) => console.log("error", error));
        });
      });
    }
    onselectElement(); // This is for onReceiveBarCode
    onReceiveBarCode = function () {
      let code = "";
      $(document).on("keydown", function (event) {
        if (event.keyCode === 13) {
          console.log("done");
          console.log(code);
          var myHeaders = new Headers();
          myHeaders.append("x-access-token", "goldapi-vbiimslw5dbel7-io");
          myHeaders.append("Content-Type", "application/json");
          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };
          fetch("https://www.goldapi.io/api/XAU/SAR", requestOptions)
            .then((response) => response.text())
            .then((results) => {
              let result = JSON.parse(`${results}`);
              console.log(result);
              console.log(code);
              $.get(
                `/v2/api/entity/product_item_barcode/list/1?filter[barcode]=${code}`
              ).then((product) => {
                console.log(product);
                let category =
                  product.data[0].product_item_barcode_product.brand;
                console.log(category);
                let itemprice = -1;
                console.log(category);
                switch (category) {
                  case "24k":
                    itemprice = result.price_gram_24k;
                    break;
                  case "22k":
                    itemprice = result.price_gram_22k;
                    break;
                  case "21k":
                    itemprice = result.price_gram_21k;
                    break;
                  case "20k":
                    itemprice = result.price_gram_20k;
                    break;
                  case "18k":
                    itemprice = result.price_gram_18k;
                    break;
                  case "16k":
                    itemprice = result.price_gram_16k;
                    break;
                  case "14k":
                    itemprice = result.price_gram_14k;
                    break;
                  case "10k":
                    itemprice = result.price_gram_10k;
                    break;
                }
                if (itemprice != -1) {
                  let price = product.data[0].unit_price + itemprice;
                  let itemsData = {
                    item_id: product.data[0].product_id,
                    item_qty: product.data[0].quantity,
                    item_price: price,
                    discount: 0,
                    discount_type: "",
                    product_name: "",
                  };
                  console.log(itemsData);
                  $(`#pos-wrapper > div.pos-content > app-invoice > div >
div.calc-wrapper > div > div.subwindow-container-fix.pads >
section.content-numpad >
button.btn.btn-md.m-0.ng-tns-c1-0.text-danger.btn-light.ng-star-inserted`).click();
                  angularComponentRef.arryAddItemToInvoice([itemsData]);
                } else {
                  alert("ther's an error");
                }
              });
            })
            .catch((error) => console.log("error", error));
          code = "";
        } else {
          console.log(code);
          code += event.key;
        }
      });
    };
    onReceiveBarCode();
  }, 600);
});
$(document).ready(function () {
  setTimeout(() => {
    console.log("start");
    // This Is for onselectElement
    function onselectElement() {
      $(document).ready(function (e) {
        $(document).on("click", ".product", function (e) {
          e.preventDefault();
          console.log("click on product", $(this).attr("data-product"));
          var myHeaders = new Headers();
          myHeaders.append("x-access-token", "goldapi-vbiimslw5dbel7-io");
          myHeaders.append("Content-Type", "application/json");

          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };
          let productId = $(this).attr("data-product");
          fetch("https://www.goldapi.io/api/XAU/SAR", requestOptions)
            .then((response) => response.text())
            .then((results) => {
              let result = JSON.parse(`${results}`);
              console.log(result);
              $.get(
                `/v2/api/entity/product_item_barcode/list/1?filter[product_id]=${productId}`
              ).then((product) => {
                console.log(product);
                let category =
                  product.data[0].product_item_barcode_product.brand;
                console.log(category);
                let itemprice = -1;
                console.log(category);
                switch (category) {
                  case "24k":
                    itemprice = result.price_gram_24k;
                    break;
                  case "22k":
                    itemprice = result.price_gram_22k;
                    break;
                  case "21k":
                    itemprice = result.price_gram_21k;
                    break;
                  case "20k":
                    itemprice = result.price_gram_20k;
                    break;
                  case "18k":
                    itemprice = result.price_gram_18k;
                    break;
                  case "16k":
                    itemprice = result.price_gram_16k;
                    break;
                  case "14k":
                    itemprice = result.price_gram_14k;
                    break;
                  case "10k":
                    itemprice = result.price_gram_10k;
                    break;
                }
                if (itemprice != -1) {
                  let price = product.data[0].unit_price + itemprice;
                  let itemsData = {
                    item_id: product.data[0].product_id,
                    item_qty: product.data[0].quantity,
                    item_price: price,
                    discount: 0,
                    discount_type: "",
                    product_name: "",
                  };
                  console.log(itemsData);
                  $(
                    `#pos-wrapper > div.pos-content > app-invoice > div 
                        > div.calc-wrapper > div > div.subwindow-container-fix.pads >
                         section.content-numpad >
                         button.btn.btn-md.m-0.ng-tns-c1-0.text-danger.btn-light.ng-star-inserted`
                  ).click();
                  angularComponentRef.arryAddItemToInvoice([itemsData]);
                } else {
                  alert("ther's an error");
                }
              });
            })
            .catch((error) => console.log("error", error));
        });
      });
    }
    onselectElement();
    // This is for onReceiveBarCode
    onReceiveBarCode = function () {
      let code = "";
      $(document).on("keydown", function (event) {
        if (event.keyCode === 13) {
          console.log("done");
          console.log(code);

          var myHeaders = new Headers();
          myHeaders.append("x-access-token", "goldapi-vbiimslw5dbel7-io");
          myHeaders.append("Content-Type", "application/json");

          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };

          fetch("https://www.goldapi.io/api/XAU/SAR", requestOptions)
            .then((response) => response.text())
            .then((results) => {
              let result = JSON.parse(`${results}`);
              console.log(result);
              console.log(code);
              $.get(
                `/v2/api/entity/product_item_barcode/list/1?filter[barcode]=${code}`
              ).then((product) => {
                console.log(product);
                let category =
                  product.data[0].product_item_barcode_product.brand;
                console.log(category);
                let itemprice = -1;
                console.log(category);
                switch (category) {
                  case "24k":
                    itemprice = result.price_gram_24k;
                    break;
                  case "22k":
                    itemprice = result.price_gram_22k;
                    break;
                  case "21k":
                    itemprice = result.price_gram_21k;
                    break;
                  case "20k":
                    itemprice = result.price_gram_20k;
                    break;
                  case "18k":
                    itemprice = result.price_gram_18k;
                    break;
                  case "16k":
                    itemprice = result.price_gram_16k;
                    break;
                  case "14k":
                    itemprice = result.price_gram_14k;
                    break;
                  case "10k":
                    itemprice = result.price_gram_10k;
                    break;
                }
                if (itemprice != -1) {
                  let price = product.data[0].unit_price + itemprice;
                  let itemsData = {
                    item_id: product.data[0].product_id,
                    item_qty: product.data[0].quantity,
                    item_price: price,
                    discount: 0,
                    discount_type: "",
                    product_name: "",
                  };
                  console.log(itemsData);
                  $(
                    `#pos-wrapper > div.pos-content > app-invoice > div 
                        > div.calc-wrapper > div > div.subwindow-container-fix.pads >
                         section.content-numpad >
                         button.btn.btn-md.m-0.ng-tns-c1-0.text-danger.btn-light.ng-star-inserted`
                  ).click();
                  angularComponentRef.arryAddItemToInvoice([itemsData]);
                } else {
                  alert("ther's an error");
                }
              });
            })
            .catch((error) => console.log("error", error));
          code = "";
        } else {
          console.log(code);
          code += event.key;
        }
      });
    };
    onReceiveBarCode();
  }, 600);
});
