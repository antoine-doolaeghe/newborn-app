import { StyledChip } from "../style/chip.style";

describe("Chip Component Style", () => {
  it("matches the component style snapshots", () => {
    expect(StyledChip).toMatchSnapshot();
  });
});
