import { Role__GetAllResponseData, User__GetListResponseData } from "@/api/models";

export type User = NonNullable<User__GetListResponseData['data']>[number];

export type Role = NonNullable<Role__GetAllResponseData['data']>[number];
