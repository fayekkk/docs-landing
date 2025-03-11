function createCol(prevTh, prevTd, colTitle, classTh, classTd, colInput) {
  var rowsNum = $("#listing_table tr").length;
  if (
    document.querySelectorAll("#listing_table tr:nth-child(1) th").length ==
      16 ||
    document.querySelectorAll("#listing_table tr:nth-child(1) th").length ==
      17
  ) {
    // Clone TH and attach change event listener
    $(prevTh).after(
      $("th#label_item_discount")
        .clone()
        .wrap("<p>")
        .parent()
        .html()
        .replace("discount", classTh)
        .replace("الوحدة <br> Unit", colTitle)
    );
    $(prevTd).after(
      $("td.discount")
        .clone()
        .wrap("<p>")
        .parent()
        .html()
        .replace("col-3", classTd)
        .replace("item_col_3", colInput)
    );
  } else {
    if (
      document.querySelectorAll("#listing_table tr:last-child td").length < 19
    ) {
      $(`#listing_table tr:last-child ${prevTd}`).after(
        $("#listing_table tr:last-child td.col-3")
          .clone()
          .wrap("<p>")
          .parent()
          .html()
          .replace("col-3", classTd)
          .replace("item_col_3", colInput)
      );
    }
  }
  $("." + colInput).attr("placeholder", "");
  $("." + colInput).attr("name", "");
  // $("#InvoiceLayout").triggerHandler("change", ["def"]);
}
// adding the columns when screen is loaded
createCol(
  "th#label_item_discount",
  "td.discount",
  "رقم الكتالوج",
  "late_th",
  "late_td",
  "late_input"
);
createCol(
  "th#label_item_discount",
  "td.discount",
  "رقم الكتالوج",
  "late1_th",
  "late1_td",
  "late1_input"
);
