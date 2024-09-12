// Unit tests for: Header

import Footer from "../Footer";

// Footer.test.js

// Footer.test.js
describe("Header() Header method", () => {
  describe("Happy Path", () => {
    it("should return the correct footer HTML string", () => {
      // Test to ensure the function returns the expected static HTML string
      const expectedOutput = `<footer>
          <h2>Footer</h2>
      </footer>`;
      expect(Footer()).toBe(expectedOutput);
    });
  });

  describe("Edge Cases", () => {
    it("should return a string", () => {
      // Test to ensure the function returns a string
      const result = Footer();
      expect(typeof result).toBe("string");
    });

    // Since the function is static and does not take any input, there are no other edge cases to test.
  });
});

// End of unit tests for: Header
