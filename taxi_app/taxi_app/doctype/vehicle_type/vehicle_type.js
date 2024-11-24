// Copyright (c) 2024, Faris Alsolmi and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Vehicle Type", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Vehicle Type', {
    make: function(frm) {
        frm.set_value('model', ''); // Clear the model field when make changes
        frm.set_query('model', function() {
            return {
                filters: {
                    'parent': frm.doc.make // Filter models based on the selected make
                }
            };
        });
    }
});