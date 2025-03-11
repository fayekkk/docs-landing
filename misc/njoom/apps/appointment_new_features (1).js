    function postNewLog(invoice_id,invoice_num, appointment_id_array, action, group, department, date_from, date_to,date_diff, period_from, period_to, notes){
        return new Promise((res)=>{
            let dataToSend = {
                "apt_invoice_id":invoice_id ,
                "apt_invoice_num":invoice_num,
                "action_choosen": action,
                "group_choosen": group,
                "department_choosen": department ,
                "apt_date_from": date_from,
                "apt_date_to": date_to,
                "apt_date_diff":date_diff,
                "apt_period_from": period_from,
                "apt_period_to": period_to,
                "apt_notes": notes,
                "le_appointments_log_le_appointments_log_appointment_id_list": appointment_id_array
               }
            $.ajax({
                url:`/v2/api/entity/le_appointments_log`,
                type:"POST",
                headers: {
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                data:JSON.stringify(dataToSend),
                success:(resp)=>{
                    res(resp)
                },
                error:(err)=>{
                    console.log(err)
                    res(err)
                }
            })
        })
    }