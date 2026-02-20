import backend from "@Assistant-to-the-Regional-Matter/backend/package.json" with {
  type: "json",
};
import common from "@Assistant-to-the-Regional-Matter/common/package.json" with {
  type: "json",
};
import { mapValues, pickBy } from "lodash-es";
import { describe, expect, it } from "vitest";
import own from "../package.json" with { type: "json" };

describe("Assistant-to-the-Regional-Matter", () => {
  it("should include all necessary dependencies", () => {
    const expected = pickBy(
      { ...backend.dependencies, ...common.dependencies },
      (_, key) => !key.startsWith("@Assistant-to-the-Regional-Matter/"),
    );
    expect(own.dependencies).toEqual(expected);
  });

  it("should pin all dependencies", () => {
    const expected = mapValues(own.dependencies, (value) =>
      value.replace(/^\D+/, ""),
    );
    expect(own.dependencies).toEqual(expected);
  });
});
