const chai = require("chai");

chai.config.truncateThreshold = 0;
const {assert} = chai;

// These example test cases are editable, feel free to add
// your own tests to debug your code.

describe("sayHello", () => {
  it("should say hello", () => {
    assert.equal(sayHello("Qualified"), "Hello, Qualified!");
  });
});