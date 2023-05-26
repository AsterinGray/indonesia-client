export type ProvinceType = {
  id: number;
  name: string;
  // capital: string;
};

export type RegencyType = {
  id: number;
  name: string;
  // isCapital: boolean;
  province: string;
};

export type SubdistrictType = {
  id: number;
  name: string;
  regency: string;
  province: string;
};
