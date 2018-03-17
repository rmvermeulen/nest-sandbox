export function createTypedFromFn<T0, T1, T2, T3, T4, T5, T6, T7, R>(
  fn: (a0: T0, a1: T1, a2: T2, a3: T3, a4: T4, a5: T5, a6: T6, a7: T7) => R,
) {
  return {
    Args: {} as [T0, T1, T2, T3, T4, T5, T6, T7, R],
    Return: {} as R,
  }
}
