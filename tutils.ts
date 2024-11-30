export type r<T> = T extends object
  ? {
      readonly [K in keyof T]: r<T[K]>
    }
  : T extends Array<infer U>
  ? readonly U[]
  : T
