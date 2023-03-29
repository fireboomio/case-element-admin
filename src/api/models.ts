export interface Post__CreateOnePostInput {
     publishedAt?: string
                 title: string
                 poster?: string
            
}
export interface InternalPost__CreateOnePostInput {
      publishedAt?: string
      title: string
      userId?: string
      poster?: string
}
export interface InjectedPost__CreateOnePostInput {
     poster?: string
         publishedAt?: string
         title: string
         userId: string
    
}


    
export interface Post__CreateOnePostResponse {
    data?: Post__CreateOnePostResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__CreateOnePostResponseData {
    data?: {
      User?: {
          avatarUrl?: string
          id?: string
          name?: string
      },
        authorId?: string
        id?: number
        poster?: string
        publishedAt?: string
        title?: string
    },
}export interface Post__DeleteManyPostInput {
   ids: {
   }[],
            
}
export interface InternalPost__DeleteManyPostInput {
    ids: {
    }[],
}
export interface InjectedPost__DeleteManyPostInput {
   ids: {
   }[],
    
}


    
export interface Post__DeleteManyPostResponse {
    data?: Post__DeleteManyPostResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__DeleteManyPostResponseData {
    data?: {
        count?: number
    },
}export interface Post__DeleteOnePostInput {
     id: number
            
}
export interface InternalPost__DeleteOnePostInput {
      id: number
}
export interface InjectedPost__DeleteOnePostInput {
     id: number
    
}


    
export interface Post__DeleteOnePostResponse {
    data?: Post__DeleteOnePostResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__DeleteOnePostResponseData {
    data?: {
        id?: number
    },
}export interface Post__GetOnePostInput {
     id: number
            
}
export interface InternalPost__GetOnePostInput {
      id: number
}
export interface InjectedPost__GetOnePostInput {
     id: number
    
}


    
export interface Post__GetOnePostResponse {
    data?: Post__GetOnePostResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__GetOnePostResponseData {
    data?: {
        title?: string
      User?: {
          avatarUrl?: string
          id?: string
          name?: string
      },
        authorId?: string
        id?: number
        poster?: string
        publishedAt?: string
    },
}export interface Post__GetPostListInput {
   orderBy?: {
   }[],
                             skip?: number
                 take?: number
            
}
export interface InternalPost__GetPostListInput {
    orderBy?: {
    }[],
      skip?: number
      take?: number
}
export interface main_NestedDateTimeFilter {
     lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
            
}
export interface main_NestedDateTimeNullableFilter {
   in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
            
}
export interface main_NestedIntFilter {
   notIn?: {
   }[],
                 equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                        
}
export interface main_PostOrderByWithRelationInput {
     poster?: string
                 publishedAt?: string
                 title?: string
                             authorId?: string
                 id?: string
            
}
export interface main_PostWhereInput {
                                                                                       OR?: {
   }[],
                        
}
export interface main_RoleOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_UserListRelationFilter {
                                    
}
export interface main_UserRelationFilter {
                        
}
export interface main_MenuWhereInput {
                                                                                                                                                   OR?: {
   }[],
            
}
export interface main_NestedIntNullableFilter {
     gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
            
}
export interface main_NestedStringNullableFilter {
     endsWith?: string
                 equals?: string
                 gt?: string
               in?: {
   }[],
                 startsWith?: string
               notIn?: {
   }[],
                 contains?: string
                 gte?: string
                 lt?: string
                 lte?: string
                        
}
export interface main_UserWhereInput {
                                                   OR?: {
   }[],
                                                            
}
export interface main_IntNullableFilter {
   notIn?: {
   }[],
                 equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                        
}
export interface main_MenuListRelationFilter {
                                    
}
export interface main_PostOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_MenuRelationFilter {
                        
}
export interface main_NestedStringFilter {
     lt?: string
                 endsWith?: string
                 gt?: string
               in?: {
   }[],
                 lte?: string
                           notIn?: {
   }[],
                 startsWith?: string
                 contains?: string
                 equals?: string
                 gte?: string
            
}
export interface main_PostListRelationFilter {
                                    
}
export interface main_RoleListRelationFilter {
                                    
}
export interface main_RoleWhereInput {
                                                               OR?: {
   }[],
                                    
}
export interface main_DateTimeFilter {
     equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
            
}
export interface main_DateTimeNullableFilter {
     lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
            
}
export interface main_IntFilter {
   in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
                 gt?: number
                 gte?: number
            
}
export interface main_StringFilter {
     contains?: string
                 equals?: string
                 lte?: string
               in?: {
   }[],
                 lt?: string
                           notIn?: {
   }[],
                 startsWith?: string
                 endsWith?: string
                 gt?: string
                 gte?: string
            
}
export interface main_StringNullableFilter {
     gt?: string
                 gte?: string
               in?: {
   }[],
                 startsWith?: string
                 endsWith?: string
                 equals?: string
                 lte?: string
                           notIn?: {
   }[],
                 contains?: string
                 lt?: string
            
}
export interface main_UserOrderByWithRelationInput {
                 avatarUrl?: string
                 createdAt?: string
                 id?: string
                 name?: string
                        
}
export interface InjectedPost__GetPostListInput {
   orderBy?: {
   }[],
             skip?: number
         take?: number
    
}


    
export interface Post__GetPostListResponse {
    data?: Post__GetPostListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__GetPostListResponseData {
    data?: {
        id?: number
        poster?: string
        publishedAt?: string
        title?: string
      User?: {
          avatarUrl?: string
          name?: string
      },
        authorId?: string
    }[],
      total?: number
}export interface Post__UpdateOnePostInput {
     title?: string
                             id: number
                 poster?: string
                 publishedAt?: string
            
}
export interface InternalPost__UpdateOnePostInput {
      id: number
      poster?: string
      publishedAt?: string
      title?: string
}
export interface main_PostUpsertWithWhereUniqueWithoutUserInput {
                                    
}
export interface main_RoleScalarWhereInput {
                           OR?: {
   }[],
                                                
}
export interface main_MenuCreateNestedOneWithoutOther_MenuInput {
                                    
}
export interface main_MenuCreateWithoutRoleInput {
     path?: string
                 sort?: number
                             icon?: string
                 label?: string
                 level?: number
                        
}
export interface main_PostUpdateManyWithWhereWithoutUserInput {
                        
}
export interface main_PostUpdateWithWhereUniqueWithoutUserInput {
                        
}
export interface main_MenuCreateOrConnectWithoutOther_MenuInput {
                        
}
export interface main_RoleCreateNestedManyWithoutUserInput {
                                    
}
export interface main_RoleUpdateWithoutUserInput {
                                    
}
export interface main_RoleCreateOrConnectWithoutMenuInput {
                        
}
export interface main_UserUpdateWithWhereUniqueWithoutRoleInput {
                        
}
export interface main_UserWhereUniqueInput {
     id: string
            
}
export interface main_IntNullableFilter {
   notIn?: {
   }[],
                 equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                        
}
export interface main_MenuUpdateManyWithoutRoleNestedInput {
                                                                                                                        
}
export interface main_MenuUpsertWithWhereUniqueWithoutMenuMenuToMenuInput {
                                    
}
export interface main_MenuWhereUniqueInput {
     id: number
            
}
export interface main_RoleUpdateWithoutMenuInput {
                                    
}
export interface main_RoleUpsertWithWhereUniqueWithoutUserInput {
                                    
}
export interface main_StringNullableFilter {
     endsWith?: string
                 gte?: string
                 lte?: string
                           notIn?: {
   }[],
                 startsWith?: string
                 contains?: string
                 equals?: string
                 gt?: string
               in?: {
   }[],
                 lt?: string
            
}
export interface main_UserCreateNestedManyWithoutRoleInput {
                                    
}
export interface main_IntFieldUpdateOperationsInput {
     multiply?: number
                 set?: number
                 decrement?: number
                 divide?: number
                 increment?: number
            
}
export interface main_MenuUpdateWithWhereUniqueWithoutMenuMenuToMenuInput {
                        
}
export interface main_MenuUpdateWithoutOther_MenuInput {
                                                                                    
}
export interface main_RoleUpdateManyWithWhereWithoutMenuInput {
                        
}
export interface main_UserCreateOrConnectWithoutPostInput {
                        
}
export interface main_UserScalarWhereInput {
                           OR?: {
   }[],
                                                            
}
export interface main_UserUpdateWithoutRoleInput {
                                                            
}
export interface main_MenuUpdateManyWithWhereWithoutRoleInput {
                        
}
export interface main_MenuUpdateWithoutRoleInput {
                                                                                    
}
export interface main_RoleUpdateManyWithoutMenuNestedInput {
                                                                                                                        
}
export interface main_StringFilter {
     gte?: string
               in?: {
   }[],
                 lt?: string
               notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 lte?: string
                             startsWith?: string
                 contains?: string
                 endsWith?: string
            
}
export interface main_UserCreateWithoutPostInput {
                 avatarUrl?: string
                 createdAt?: string
                 id: string
                 name?: string
            
}
export interface main_MenuUpdateManyWithoutMenuMenuToMenuNestedInput {
                                                                                                                        
}
export interface main_NestedIntFilter {
     equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
            
}
export interface main_RoleUpdateManyWithoutUserNestedInput {
                                                                                                                        
}
export interface main_RoleUpdateWithWhereUniqueWithoutUserInput {
                        
}
export interface main_MenuUpdateManyMutationInput {
                                                            
}
export interface main_NullableStringFieldUpdateOperationsInput {
     set?: string
            
}
export interface main_PostCreateWithoutUserInput {
     poster?: string
                 publishedAt?: string
                 title?: string
            
}
export interface main_PostScalarWhereInput {
                                                                           OR?: {
   }[],
                        
}
export interface main_IntFilter {
     equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
            
}
export interface main_MenuCreateNestedManyWithoutRoleInput {
                                    
}
export interface main_MenuCreateOrConnectWithoutMenuMenuToMenuInput {
                        
}
export interface main_MenuScalarWhereInput {
                                                                                                   OR?: {
   }[],
                        
}
export interface main_RoleUpdateManyWithWhereWithoutUserInput {
                        
}
export interface main_MenuUpdateOneWithoutOther_MenuNestedInput {
                                                                                    
}
export interface main_NullableDateTimeFieldUpdateOperationsInput {
     set?: string
            
}
export interface main_PostUpdateManyWithoutUserNestedInput {
                                                                                                                        
}
export interface main_PostUpdateWithoutUserInput {
                                    
}
export interface main_NestedStringFilter {
     contains?: string
                 gt?: string
               in?: {
   }[],
                             startsWith?: string
                 endsWith?: string
                 equals?: string
                 gte?: string
                 lt?: string
                 lte?: string
               notIn?: {
   }[],
            
}
export interface main_UserCreateWithoutRoleInput {
     id: string
                 name?: string
                             avatarUrl?: string
                 createdAt?: string
            
}
export interface main_UserUpdateWithoutPostInput {
                                                            
}
export interface main_DateTimeFieldUpdateOperationsInput {
     set?: string
            
}
export interface main_MenuCreateWithoutOther_MenuInput {
                             icon?: string
                 label?: string
                 level?: number
                 path?: string
                 sort?: number
            
}
export interface main_RoleCreateNestedManyWithoutMenuInput {
                                    
}
export interface main_RoleUpsertWithWhereUniqueWithoutMenuInput {
                                    
}
export interface main_MenuCreateOrConnectWithoutRoleInput {
                        
}
export interface main_NestedIntNullableFilter {
     lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
            
}
export interface main_RoleCreateOrConnectWithoutUserInput {
                        
}
export interface main_PostCreateOrConnectWithoutUserInput {
                        
}
export interface main_UserCreateOrConnectWithoutRoleInput {
                        
}
export interface main_RoleCreateWithoutUserInput {
                 code?: string
                 desc?: string
            
}
export interface main_RoleWhereUniqueInput {
     code?: string
                 id: number
            
}
export interface main_UserUpdateManyMutationInput {
                                                
}
export interface main_UserUpdateManyWithoutRoleNestedInput {
                                                                                                                        
}
export interface main_MenuUpdateManyWithWhereWithoutMenuMenuToMenuInput {
                        
}
export interface main_MenuUpdateWithWhereUniqueWithoutRoleInput {
                        
}
export interface main_MenuUpdateWithoutMenuMenuToMenuInput {
                                                                                    
}
export interface main_PostUpdateManyMutationInput {
                                    
}
export interface main_UserUpdateOneRequiredWithoutPostNestedInput {
                                                            
}
export interface main_UserUpdateManyWithWhereWithoutRoleInput {
                        
}
export interface main_UserUpsertWithWhereUniqueWithoutRoleInput {
                                    
}
export interface main_DateTimeNullableFilter {
               notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
            
}
export interface main_NestedDateTimeNullableFilter {
               notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
            
}
export interface main_PostWhereUniqueInput {
     id: number
            
}
export interface main_RoleUpdateManyMutationInput {
                        
}
export interface main_NestedDateTimeFilter {
   in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
            
}
export interface main_NestedStringNullableFilter {
   notIn?: {
   }[],
                 startsWith?: string
                 endsWith?: string
                 equals?: string
                 gt?: string
               in?: {
   }[],
                             contains?: string
                 gte?: string
                 lt?: string
                 lte?: string
            
}
export interface main_PostCreateNestedManyWithoutUserInput {
                                    
}
export interface main_RoleCreateWithoutMenuInput {
     desc?: string
                             code?: string
            
}
export interface main_DateTimeFilter {
     lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
            
}
export interface main_MenuCreateWithoutMenuMenuToMenuInput {
     label?: string
                 level?: number
                             path?: string
                 sort?: number
                             icon?: string
            
}
export interface main_MenuUpsertWithWhereUniqueWithoutRoleInput {
                                    
}
export interface main_MenuUpsertWithoutOther_MenuInput {
                        
}
export interface main_StringFieldUpdateOperationsInput {
     set?: string
            
}
export interface main_UserUpsertWithoutPostInput {
                        
}
export interface main_MenuCreateNestedManyWithoutMenuMenuToMenuInput {
                                    
}
export interface main_RoleUpdateWithWhereUniqueWithoutMenuInput {
                        
}
export interface InjectedPost__UpdateOnePostInput {
         id: number
         poster?: string
         publishedAt?: string
         title?: string
    
}


    
export interface Post__UpdateOnePostResponse {
    data?: Post__UpdateOnePostResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__UpdateOnePostResponseData {
    data?: {
        authorId?: string
        id?: number
        poster?: string
        publishedAt?: string
        title?: string
      User?: {
          id?: string
          name?: string
          avatarUrl?: string
      },
    },
}export interface System__BindRoleApisInput {
   allRoles: {
   }[],
               apis: {
   }[],
                 roleCode: string
            
}
export interface InternalSystem__BindRoleApisInput {
      roleCode: string
    allRoles: {
    }[],
    apis: {
    }[],
}
export interface InjectedSystem__BindRoleApisInput {
   allRoles: {
   }[],
       apis: {
   }[],
         roleCode: string
    
}


    
export interface System__BindRoleApisResponse {
    data?: System__BindRoleApisResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface System__BindRoleApisResponseData {
    data?: {
        count?: number
    },
}export interface System__GetRoleBindApisInput {
     code: string
            
}
export interface InternalSystem__GetRoleBindApisInput {
      code: string
}
export interface InjectedSystem__GetRoleBindApisInput {
     code: string
    
}


    
export interface System__GetRoleBindApisResponse {
    data?: System__GetRoleBindApisResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface System__GetRoleBindApisResponseData {
    data?: {
        restUrl?: string
        createTime?: string
        id?: number
        method?: string
        remark?: string
        roles?: string
        deleteTime?: string
        operationType?: string
        roleType?: string
        title?: string
        updateTime?: string
        content?: string
    }[],
}export interface User__CreateOneInput {
     avatarUrl?: string
                 id: string
                 name: string
            
}
export interface InternalUser__CreateOneInput {
      avatarUrl?: string
      id: string
      name: string
}
export interface InjectedUser__CreateOneInput {
     avatarUrl?: string
         id: string
         name: string
    
}


    
export interface User__CreateOneResponse {
    data?: User__CreateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__CreateOneResponseData {
    data?: {
        id?: string
    },
}export interface User__GetOneInput {
     id: string
            
}
export interface InternalUser__GetOneInput {
      id: string
}
export interface InjectedUser__GetOneInput {
     id: string
    
}


    
export interface User__GetOneResponse {
    data?: User__GetOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__GetOneResponseData {
    data?: {
        id?: string
    },
}export interface InternalUser__MeInput {
      equals?: string
}
export interface InjectedUser__MeInput {
     equals: string
    
}


    
export interface User__MeResponse {
    data?: User__MeResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__MeResponseData {
    data?: {
        id?: string
        name?: string
        avatarUrl?: string
    },
}
export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}
