export type ModifyProvince = {
  name: string;
};

export type ModifyRegency = {
  name: string;
  provinceId: number;
};

export type ModifySubdistrict = {
  name: string;
  regencyId: number;
  provinceId: number;
};
