$(document).ready(function() {
    // Method to fetch item categories and return options

            // Create the HTML string to append
            const htmlString = `
                <div class="form-group">
                    <label style="font-weight: 900;" for="item-note" class="h3">طلب إضافي</label>
                    <input style="margin-top: 1.5rem" type="text" class="form-control" id="item-note" placeholder="أدخل ملاحظة على هذا الصنف" />
                    <select class="form-control" id="item-select" style="margin-top: 1.5rem;">
                        <option value="">اختر صنفاً</option>
                        ${options}
                    </select>
                </div>
            `;

     


    // Call the async method to create the item select
    createItemSelect();
});