const privacy = {
  api: "https://api.api-ninjas.com/v1/quotes",
  apiKey: "aTEWbGcvUwKM/mEStgaGAQ==uGjZMK8qxR81SBTC",
  get header() {
    return { "X-Api-Key": this.apiKey };
  },
};
// console.log(privacy.header);
export default privacy;
