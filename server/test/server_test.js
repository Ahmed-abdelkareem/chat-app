const assert = require("assert");
const generateMessage = require("../utils/message");

describe("test the server stuff", () => {
  it("test the message generator function", done => {
    const message = generateMessage(
      "admin",
      "thats a message to test the function"
    );
    assert(message.from === "admin");
    assert(message.text === "thats a message to test the function");
    done();
  });
});
