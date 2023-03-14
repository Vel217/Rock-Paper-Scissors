import crypto from "node:crypto";

export default class Verifier {
  constructor() {
    this.token = this.generateRandomToken();
  }

  hash(option) {
    return crypto
      .createHash("sha3-256")
      .update([this.token, option].join(""))
      .digest("hex");
  }

  generateRandomToken(bytes = 32) {
    return crypto.randomBytes(bytes).toString("hex");
  }
}
