import CryptoJS, { AES } from "crypto-js";

export const decrypt = (data: string): string => {
  return AES.decrypt(data, process.env.ENCRYPTION_KEY!).toString(CryptoJS.enc.Utf8);
};

export const encrypt = (data: string): string => {
  return AES.encrypt(data, process.env.ENCRYPTION_KEY!).toString();
};
