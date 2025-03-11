const newReq = {
  client_id: 6,
  number: {
    generated: "1",
    code: "1",
  },
  title: "عقد تسليم معدات",
  start_date: "2024-07-23",
  description: null,
  delivery_date: null,
  delivery_appointment_id: null,
  follow_up_status_id: null,
  status: 1,
  created: "2024-07-23",
  modified: "2024-07-23",
  staff_id: 0,
  client_data: null,
  extra_details: null,
  workflow_type_id: 3,
  budget: {
    currency: "SAR",
  },

  workflow_type: {
    id: 3,
    entity_key: "le_workflow-type-entity-3",
  },
};
console.log(newReq);
const response = await fetch("/v2/api/entity/le_workflow-type-entity-3", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "apikey":"0436dfbae6ee7f0f8cd5be2a4b1966d6cecb1eef"
  },
  body: JSON.stringify(newReq),
});
const rez = await response.json();
console.log(rez);
$(".loader").addClass("hide");
$(".container-bg-custom").addClass("hide");
alert(" تم اضافة عقد تسليم بنجاح ");
