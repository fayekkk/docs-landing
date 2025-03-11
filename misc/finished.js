let dataaaa = {
  status: "generated",
  staff_id: 4,
  posting_date: "2024-10-09",

  //   designation_name: "مسئول مبيعات",
  //   department_name: null,
  //   branch_name: "Main Branch",
  //   attendance_sheet_id: null,
  //   expense_id: null,
  start_date: "2024-11-01",
  end_date: "2024-11-31",
  //   gross_pay: 3600,
  //   total_deduction: 1050,
  //   net_pay: 2550,
  //   created_at: null,
  //   updated_at: null,
  //   deleted_at: null,
  //   payrun_id: 45,
  //   payment_id: null,
  //   contract_id: 2,
  //   notes: null,
  //   attachment: null,
  //   currency_code: null,

  payslip_components: [
    {
      id: 164,
      payslip_id: 50,
      salary_component_id: 1,
      amount: 3000,
      formula: null,
      order: -1,
      source_id: null,
    },
    {
      id: 165,
      payslip_id: 50,
      salary_component_id: 11,
      amount: 600,
      formula:
        "@[{{$salary_component_1.amount}}](placeholder:{{$salary_component_1.amount}}) *0.2",
      order: 1,
      source_id: null,
    },
    {
      id: 166,
      payslip_id: 50,
      salary_component_id: 10,
      amount: 100,
      formula: null,
      order: 1,
      source_id: null,
    },
    {
      id: 167,
      payslip_id: 50,
      salary_component_id: 19,
      amount: 250,
      formula: null,
      order: 2,
      source_id: null,
    },
    {
      id: 168,
      payslip_id: 50,
      salary_component_id: 2,
      amount: 500,
      formula: null,
      order: -1,
      source_id: 9,
    },
    {
      id: 169,
      payslip_id: 50,
      salary_component_id: 2,
      amount: 200,
      formula: null,
      order: -1,
      source_id: 10,
    },
  ],
};
fetch(`/v2/api/entity/payslip`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dataaaa),
})
  .then((res) => res.json())
  .then((Invresponse) => {
    console.log(Invresponse);
  })
  .catch((err) => {
    console.log(err);
    alert("حدث خطأ    ");
    window.location.reload();
  });
