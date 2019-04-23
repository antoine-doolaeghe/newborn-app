import { isTooltipOpen, returnTooltipTitle } from "../newbornList_helpers";

describe("NewbornList Helpers", () => {
  describe("returnTooltipTitle", () => {
    it("returns the correct instruction title according to the selected newborn list", () => {
      const MOCK_SELECTED_NEWBORN = ["1", "2"];
      expect(returnTooltipTitle(MOCK_SELECTED_NEWBORN)).toEqual(
        "Select a partner card to filter the childs"
      );
      MOCK_SELECTED_NEWBORN.pop();
      expect(returnTooltipTitle(MOCK_SELECTED_NEWBORN)).toEqual(
        "Select a partner card to filter the childs"
      );
      MOCK_SELECTED_NEWBORN.pop();
      expect(returnTooltipTitle(MOCK_SELECTED_NEWBORN)).toEqual(
        "Select a newborn card to filter the partners"
      );
    });
  });

  describe("isTooltipOpen", () => {
    it("returns the correct tooltip open value", () => {
      const MOCK_SELECTED_NEWBORN = ["1", "2"];
      expect(isTooltipOpen(MOCK_SELECTED_NEWBORN, true)).toBe(false);
      MOCK_SELECTED_NEWBORN.pop();
      expect(isTooltipOpen(MOCK_SELECTED_NEWBORN, true)).toBe(true);
    });
  });
});
