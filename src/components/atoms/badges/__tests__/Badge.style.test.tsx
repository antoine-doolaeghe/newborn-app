import { StyledBadge } from "../style/badge.style";

describe("Badge Component Style", () => {
  it("matches the component style snapshots", () => {
    expect(StyledBadge).toMatchSnapshot();
  });
});
