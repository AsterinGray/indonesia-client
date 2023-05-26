import { ProvinceType } from "@/types/model";
import { apiSlice } from "..";
import { ModifyProvince } from "@/types/request";

export const provinceSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getProvinces: query<ProvinceType[], void>({
      query: () => "province",
    }),
    getProvinceById: query<ProvinceType, string | number>({
      query: (id) => `province/${id}`,
    }),
    createProvince: mutation<ProvinceType, ModifyProvince>({
      query: (body) => ({
        url: `province`,
        method: "POST",
        body,
      }),
    }),
    editProvince: mutation<
      ProvinceType,
      Partial<ModifyProvince> & Pick<ProvinceType, "id">
    >({
      query: (body) => ({
        url: `province/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteProvince: mutation<ProvinceType, number>({
      query: (id) => {
        return {
          url: `province/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetProvincesQuery,
  useGetProvinceByIdQuery,
  useCreateProvinceMutation,
  useDeleteProvinceMutation,
  useEditProvinceMutation,
} = provinceSlice;
