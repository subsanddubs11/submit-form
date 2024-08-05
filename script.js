document.getElementById('phone_number').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, ''); // Remove all non-numeric characters

  // Format the phone number
  if (value.length > 10) value = value.slice(0, 10); // Limit to 10 digits
  let formattedValue = '';
  if (value.length > 6) {
      formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  } else if (value.length > 3) {
      formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  } else if (value.length > 0) {
      formattedValue = `(${value}`;
  }
  e.target.value = formattedValue;
});