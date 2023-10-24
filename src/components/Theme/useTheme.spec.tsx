import { act, renderHook } from "@testing-library/react";

import { Theme, useTheme } from "./ThemeContext";

describe("useTheme hook", () => {
  it("should change values properly", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe(null);

    act(() => {
      result.current.setDark();
    });

    expect(result.current.theme).toBe(Theme.DARK);
  });
});
