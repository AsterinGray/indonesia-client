import { SubdistrictType } from "@/types/model";
import { apiSlice } from "..";
import { ModifySubdistrict } from "@/types/request";

export const subdistrictSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getSubdistrict: query<SubdistrictType[], void>({
      query: () => "subdistrict",
    }),
    getSubdistrictById: query<SubdistrictType, number>({
      query: (id) => `subdistrict/${id}`,
    }),
    createSubdistrict: mutation<SubdistrictType, ModifySubdistrict>({
      query: (body) => ({
        url: `subdistrict`,
        method: "POST",
        body: {
          name: body.name,
          regencyId: Number(body.regencyId),
          provinceId: Number(body.provinceId),
        },
      }),
    }),
    editSubdistrict: mutation<
      SubdistrictType,
      Partial<ModifySubdistrict> & Pick<SubdistrictType, "id">
    >({
      query: (body) => ({
        url: `subdistrict/${body.id}`,
        method: "PATCH",
        body: {
          name: body.name,
          regencyId: Number(body.regencyId),
          provinceId: Number(body.provinceId),
        },
      }),
    }),
    deleteSubdistrict: mutation<SubdistrictType, number>({
      query: (id) => {
        return {
          url: `subdistrict/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetSubdistrictQuery,
  useGetSubdistrictByIdQuery,
  useCreateSubdistrictMutation,
  useDeleteSubdistrictMutation,
  useEditSubdistrictMutation,
} = subdistrictSlice;
