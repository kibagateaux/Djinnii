// only checks for length because int. numbers come in many formats and this is good enough for America at the moment
export const checkPhoneNumberLength = (n) => n.match(/\d/g).length === 10;