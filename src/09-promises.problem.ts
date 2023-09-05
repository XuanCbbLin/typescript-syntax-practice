interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// 解法1: 使用型別斷言
export const fetchLukeSkywalker = async () => {
  const data = (await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  })) as LukeSkywalker;

  return data;
};

// 解法2: 使用 Promise<T>
// export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
//   const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

//   return data;
// };

// 解法3
// export const fetchLukeSkywalker = async () => {
//   const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

//   return data;
// };
