var r6 = require("../lib/r6.js").R6;

describe("A suite", function() {

	var descriptor = Object.getOwnPropertyDescriptor(r6, "version");

  	it("contains a version", function() {
    	expect(r6.version).toBe("0.1.0");
  	});

  	it("that isn't enumerable", function() {
  		expect(Object.propertyIsEnumerable(r6.version)).toBe(false);
  		expect(descriptor.enumerable).toBe(false);
  	});

  	it("and isn't configurable", function() {
  		expect(descriptor.configurable).toBe(false);
  	});

  	it("and isn't writable", function(){
  		expect(descriptor.writable).toBe(false);
  	});
});