// Copyright (c) 2024, Faris Alsolmi and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Reserve Trip", {
// 	refresh(frm) {


// 	},
// });



// to convert to 12hrs
// frappe.ui.form.on('Reserve Trip', {
//     refresh: function(frm) {
        
       

//         frm.add_custom_button('AM', () => setAmPm(frm, 'AM'));
//         frm.add_custom_button('PM', () => setAmPm(frm, 'PM'));

//         frm.set_df_property("time", "placeholder", "hh:mm AM/PM");

//         // Set initial AM/PM value (you might need logic to determine this)
//         setAmPm(frm, 'AM'); 
//     },
//     time: (frm) => {
//         // When the time field changes, ensure AM/PM is preserved (optional)
//         const timeValue = frm.doc.time; // Get time in 24-hour format
//         const amPm = frm.doc.time_ampm || 'AM'; // Get AM/PM
//         frm.set_value("time", formatTime12Hr(timeValue, amPm));
//     }
// });

// function setAmPm(frm, amPm) {
//     frm.set_value('time_ampm', amPm);
//     // Trigger a change event to update the displayed time
//     frm.set_value('time', frm.doc.time); 
// }

// function formatTime12Hr(timeValue, amPm) {
//     if (!timeValue) return "";
//     let [hours, minutes] = timeValue.split(":").map(Number);
//     hours = hours % 12 || 12; // Convert to 12-hour
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${amPm}`;
// }