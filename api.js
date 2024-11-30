exports.ConnReq = {
  fee: "number",
  feePaidBySender: "bool",
  pk: "strp",
};

exports.emptyConnReq = () => ({
  fee: "",
  feePaidBySender: "",
  pk: "",
});

exports.onConnReq = (listener) => {
  setInterval(() => {
    listener({
      fee: 0,
    });
  }, 5000);
};

exports.acceptConnReq = (connReq) => {
  connReq && console.log(`Accepted connReq ${connReq.pk}`);
};
