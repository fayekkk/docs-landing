fetch(`/v2/api/entity/staff/1/fields`, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({language_code:"7"}),
})
  .then((response) => {
    if (!response.ok) {
      return response.json().then((errorRes) => {
        console.error("Error:", errorRes);
        alert(
          `Error ${response.status}: ${
            errorRes.message || "An error occurred."
          }`
        );
      });
    }
    return response.json().then(async (res) => {
      console.log("Success:", res);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
    alert("An unexpected error occurred. Please try again.");
  });