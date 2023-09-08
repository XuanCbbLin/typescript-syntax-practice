import { expect, it } from "vitest";


// Method 1: Use Interface and Index Signatures
interface Cache {
  [id:string]:string
} 

// Method 2: Use Type Alias and Index Signatures
type Cache2 = {
  [id:string]:string
}

// Method 3: Use Record
type Cache3 = Record<string, string>

const createCache = () => {
  const cache:Cache = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
