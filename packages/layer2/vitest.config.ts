import { defineVitestProject } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestProject({
  test: {
    name: "layer2",
    // without this layer1 tests are run as well what we don't want to include
    exclude: [...configDefaults.exclude, "packages/!(layer2)/**"],
  },
});
