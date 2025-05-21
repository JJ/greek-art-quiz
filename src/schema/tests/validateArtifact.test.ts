// src/schema/tests/validateArtifact.test.ts

import { validateFile } from "../validateArtifact";


describe("Cycladic artifact schema validation", () => {
  it("should validate example1.json without errors", () => {
    expect(validateFile("data/example1.json")).toBe(true);
  });

  it("should validate example2.json without errors", () => {
    expect(validateFile("data/example2.json")).toBe(true);
  });
});
