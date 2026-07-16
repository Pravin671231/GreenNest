import { describe, expect, it } from "vitest";
import { plants } from "../../.velite";

describe("Velite plant schema", () => {
  it("compiles the sample plant with the expected shape", () => {
    const monstera = plants.find(
      (plant) => plant.slug === "monstera-deliciosa",
    );

    expect(monstera).toMatchObject({
      name: "Monstera Deliciosa",
      category: "indoor",
      price: 999999,
    });
    expect(monstera?.images.length).toBeGreaterThan(0);
  });

  it("only allows the schema's enum values for light, water, and size", () => {
    for (const plant of plants) {
      expect(["Low", "Medium", "High"]).toContain(plant.light);
      expect(["Low", "Medium", "High"]).toContain(plant.water);
      expect(["Small", "Medium", "Large"]).toContain(plant.size);
      expect(["Easy", "Moderate", "Difficult"]).toContain(plant.difficulty);
    }
  });
});
