class ItemsMock {
  constructor(id, cnpjRoot, paymentType, cardBrand, channel, status) {
    this.id = id;
    this.cnpjRoot = cnpjRoot;
    this.paymentType = paymentType;
    this.cardBrand = cardBrand;
    this.channel = channel;
    this.status = status;
  }
}

module.exports = ItemsMock;