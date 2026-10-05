"use strict";

const generatePassword = (length, useSpecialSymbols) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    if(useSpecialSymbols){
      charset.concat("_-!$%&?=*+#€.:,;~'}][{()§°/");
    }
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

module.exports = generatePassword;
