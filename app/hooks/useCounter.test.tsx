import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { act } from "react-dom/test-utils";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accepted and rendered the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 11 },
    });
    expect(result.current.count).toBe(11);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 1 },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 2 },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(1);
  });
});
