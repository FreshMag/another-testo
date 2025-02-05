import {use_feature} from "./api_feat";
import { describe, expect, test } from "@jest/globals";

describe("formatDate from API", () => {
    test("should format date correctly with api added", () => {
        const formattedDate = use_feature();
        expect(formattedDate).toBe("5 ottobre 2025 from api");
    });
});
