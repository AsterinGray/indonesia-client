import { RegencyType } from "@/types/model";
import { apiSlice } from "..";
import { ModifyRegency } from "@/types/request";

export const provinceSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getRegency: query<RegencyType[], void>({
      query: () => "regency",
    }),
    getRegencyById: query<RegencyType, number>({
      query: (id) => `regency/${id}`,
    }),
    getCapitals: query<RegencyType[], void>({
      query: () => `regency/capital`,
    }),
    createRegency: mutation<RegencyType, ModifyRegency>({
      query: (body) => ({
        url: `regency`,
        method: "POST",
        body: {
          name: body.name,
          provinceId: Number(body.provinceId),
        },
      }),
    }),
    editRegency: mutation<
      RegencyType,
      Partial<ModifyRegency> & Pick<RegencyType, "id">
    >({
      query: (body) => ({
        url: `regency/${body.id}`,
        method: "PATCH",
        body: {
          name: body.name,
          provinceId: Number(body.provinceId),
        },
      }),
    }),
    deleteRegency: mutation<RegencyType, number>({
      query: (id) => {
        return {
          url: `regency/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetRegencyQuery,
  useGetRegencyByIdQuery,
  useGetCapitalsQuery,
  useCreateRegencyMutation,
  useDeleteRegencyMutation,
  useEditRegencyMutation,
} = provinceSlice;
