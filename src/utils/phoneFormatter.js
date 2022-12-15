const phone_format = /^(\d{0,3})(\d{0,3})(\d{0,4})$/;
const phone_format_11digit = /^1(\d{3})(\d{3})(\d{4})$/;
const phone_11digit = /^1(\d{10})$/;
const clear_phone = /\D/g;

export const getClearPhone = (tragetPhone = '') => {
  return tragetPhone.replace(clear_phone, '').trim();
};

export const getFormattedPhone = (tragetPhone = '') => {
  let serializedPhone = tragetPhone.trim().replace(clear_phone, '');
  if (serializedPhone.length === 11 && phone_11digit.test(serializedPhone)) {
    return serializedPhone.replace(phone_format_11digit, '1 $1 $2 $3');
  }
  return serializedPhone.replace(phone_format, '$1 $2 $3').trim();
};
