// Sample API response
var apiResponse = [
    {
        "item_number11": "2025",
        "extraction_item11": "تأسيس كهرباء",
        "unit11": "M2",
        "price11": 10,
        "ttlqty11": "500",
        "current_process11": 10,
        "prev_process11": "30",
        "remain_process11": "60",
        "ta3lyattlqty1": null,
        "prev_ta3lya_per1": null,
        "curr_ta3lya_per1": null,
        "remain_ta3lya_per1": null,
        "id": 57,
        "reference_id": 53,
        "taxes": "1",
        "taxper": "15"
    }
];


var itemsarr = apiResponse.map(function(item) {
    // Calculate quantity if current_process11 is not null
    var quantity = item.current_process11 !== null ? item.ttlqty11 * item.current_process11 / 100 : 0;

    return {
        item: `مسلخلص عميل رقم ${clientId} `,
        description: item.unit11,
        unit_price: item.price11,
        quantity: quantity,
        col_3: item.item_number11,
        col_4: item.current_process11,
        col_5: item.ttlqty11,
        tax1: item.taxes,
        tax2: 0
    };
});

// Output the result
console.log(itemsarr);