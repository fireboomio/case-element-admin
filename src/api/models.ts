export interface Post__CreateOneInput {
     poster?: string
                 publishedAt?: string
                 title: string
                 content?: string
            
}
export interface InternalPost__CreateOneInput {
      title: string
      userId?: string
      content?: string
      poster?: string
      publishedAt?: string
}
export interface InjectedPost__CreateOneInput {
     content?: string
         poster?: string
         publishedAt?: string
         title: string
         userId: string
    
}


    
export interface Post__CreateOneResponse {
    data?: Post__CreateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__CreateOneResponseData {
    data?: {
        id?: number
        poster?: string
        publishedAt?: string
        title?: string
      User?: {
          avatarUrl?: string
          id?: string
          name?: string
      },
        authorId?: string
    },
}export interface Post__DeleteManyInput {
   ids: {
   }[],
            
}
export interface InternalPost__DeleteManyInput {
    ids: {
    }[],
}
export interface InjectedPost__DeleteManyInput {
   ids: {
   }[],
    
}


    
export interface Post__DeleteManyResponse {
    data?: Post__DeleteManyResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__DeleteManyResponseData {
    data?: {
        count?: number
    },
}export interface Post__DeleteOneInput {
     id: number
            
}
export interface InternalPost__DeleteOneInput {
      id: number
}
export interface InjectedPost__DeleteOneInput {
     id: number
    
}


    
export interface Post__DeleteOneResponse {
    data?: Post__DeleteOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__DeleteOneResponseData {
    data?: {
        id?: number
    },
}export interface Post__GetListInput {
   orderBy?: {
   }[],
                             skip?: number
                 take?: number
            
}
export interface InternalPost__GetListInput {
    orderBy?: {
    }[],
      skip?: number
      take?: number
}
export interface main_PostWhereInput {
               OR?: {
   }[],
                                                                                                            
}
export interface main_RoleListRelationFilter {
                                    
}
export interface main_RoleWhereInput {
                                                                           OR?: {
   }[],
                        
}
export interface main_UserListRelationFilter {
                                    
}
export interface main_UserOrderByWithRelationInput {
                             avatarUrl?: string
                 createdAt?: string
                 id?: string
                 name?: string
            
}
export interface main_IntFilter {
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
export interface main_DateTimeNullableFilter {
     gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
            
}
export interface main_NestedIntFilter {
     gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
                 gt?: number
            
}
export interface main_NestedStringFilter {
     contains?: string
                 endsWith?: string
                 equals?: string
                 gte?: string
               in?: {
   }[],
                 lte?: string
                 gt?: string
                 lt?: string
                           notIn?: {
   }[],
                 startsWith?: string
            
}
export interface main_NestedStringNullableFilter {
     gte?: string
               in?: {
   }[],
               notIn?: {
   }[],
                 startsWith?: string
                             contains?: string
                 endsWith?: string
                 equals?: string
                 gt?: string
                 lt?: string
                 lte?: string
            
}
export interface main_PostListRelationFilter {
                                    
}
export interface main_DateTimeFilter {
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
export interface main_MenuWhereInput {
                                                               OR?: {
   }[],
                                                                                                
}
export interface main_NestedDateTimeNullableFilter {
     lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
            
}
export interface main_NestedIntNullableFilter {
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
export interface main_RoleOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_MenuListRelationFilter {
                                    
}
export interface main_MenuRelationFilter {
                        
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
export interface main_PostOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_PostOrderByWithRelationInput {
                 authorId?: string
                 content?: string
                 id?: string
                 poster?: string
                 publishedAt?: string
                 title?: string
            
}
export interface main_StringFilter {
     lte?: string
                 contains?: string
                 endsWith?: string
               in?: {
   }[],
                 lt?: string
               notIn?: {
   }[],
                 startsWith?: string
                 equals?: string
                 gt?: string
                 gte?: string
                        
}
export interface main_StringNullableFilter {
   notIn?: {
   }[],
                 contains?: string
                 endsWith?: string
                 equals?: string
                 gt?: string
               in?: {
   }[],
                 lte?: string
                             startsWith?: string
                 gte?: string
                 lt?: string
            
}
export interface main_UserRelationFilter {
                        
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
export interface main_UserWhereInput {
                                                   OR?: {
   }[],
                                                            
}
export interface InjectedPost__GetListInput {
   orderBy?: {
   }[],
             skip?: number
         take?: number
    
}


    
export interface Post__GetListResponse {
    data?: Post__GetListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__GetListResponseData {
    data?: {
        title?: string
      User?: {
          avatarUrl?: string
          name?: string
      },
        authorId?: string
        content?: string
        id?: number
        poster?: string
        publishedAt?: string
    }[],
      total?: number
}export interface Post__GetOneInput {
     id: number
            
}
export interface InternalPost__GetOneInput {
      id: number
}
export interface InjectedPost__GetOneInput {
     id: number
    
}


    
export interface Post__GetOneResponse {
    data?: Post__GetOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__GetOneResponseData {
    data?: {
      User?: {
          avatarUrl?: string
          id?: string
          name?: string
      },
        authorId?: string
        content?: string
        id?: number
        poster?: string
        publishedAt?: string
        title?: string
    },
}export interface Post__UpdateOneInput {
     content?: string
                 id: number
                 poster?: string
                 publishedAt?: string
                 title?: string
            
}
export interface InternalPost__UpdateOneInput {
      content?: string
      id: number
      poster?: string
      publishedAt?: string
      title?: string
}
export interface InjectedPost__UpdateOneInput {
     content?: string
         id: number
         poster?: string
         publishedAt?: string
         title?: string
    
}


    
export interface Post__UpdateOneResponse {
    data?: Post__UpdateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__UpdateOneResponseData {
    data?: {
        publishedAt?: string
        title?: string
      User?: {
          avatarUrl?: string
          id?: string
          name?: string
      },
        authorId?: string
        content?: string
        id?: number
        poster?: string
    },
}

    
export interface Role__GetAllResponse {
    data?: Role__GetAllResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Role__GetAllResponseData {
    data?: {
        code?: string
        remark?: string
    }[],
}export interface System__BindRoleApisInput {
   apis: {
   }[],
                 roleCode: string
               allRoles: {
   }[],
            
}
export interface InternalSystem__BindRoleApisInput {
    allRoles: {
    }[],
    apis: {
    }[],
      roleCode: string
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
        createTime?: string
        roleType?: string
        content?: string
        restUrl?: string
        roles?: string
        operationType?: string
        title?: string
        updateTime?: string
        deleteTime?: string
        id?: number
        method?: string
        remark?: string
    }[],
}export interface User__ConnectRoleInput {
     code: string
                 userId: string
            
}
export interface InternalUser__ConnectRoleInput {
      userId: string
      code: string
}
export interface InjectedUser__ConnectRoleInput {
     code: string
         userId: string
    
}


    
export interface User__ConnectRoleResponse {
    data?: User__ConnectRoleResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__ConnectRoleResponseData {
    data?: {
        avatarUrl?: string
        createdAt?: string
        id?: string
        name?: string
    },
}

    
export interface User__CountUsersResponse {
    data?: User__CountUsersResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__CountUsersResponseData {
    data?: {
      count?: {
          id?: number
      },
    },
}export interface User__CreateOneInput {
     id: string
                 name: string
                 role?: string
                 avatarUrl?: string
            
}
export interface InternalUser__CreateOneInput {
      avatarUrl?: string
      id: string
      name: string
      role?: string
}
export interface InjectedUser__CreateOneInput {
     name: string
         role?: string
         avatarUrl?: string
         id: string
    
}


    
export interface User__CreateOneResponse {
    data?: User__CreateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__CreateOneResponseData {
    data?: {
        id?: string
    },
}export interface User__DisconnectRoleInput {
     userId: string
                 code: string
            
}
export interface InternalUser__DisconnectRoleInput {
      code: string
      userId: string
}
export interface InjectedUser__DisconnectRoleInput {
     code: string
         userId: string
    
}


    
export interface User__DisconnectRoleResponse {
    data?: User__DisconnectRoleResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__DisconnectRoleResponseData {
    data?: {
        avatarUrl?: string
        createdAt?: string
        id?: string
        name?: string
    },
}export interface User__GetListInput {
                 skip: number
                 take: number
               orderBy?: {
   }[],
            
}
export interface InternalUser__GetListInput {
    orderBy?: {
    }[],
      skip: number
      take: number
}
export interface main_UserWhereInput {
   OR?: {
   }[],
                                                                                                            
}
export interface main_NestedDateTimeNullableFilter {
     gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
            
}
export interface main_NestedStringFilter {
     lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 startsWith?: string
                 equals?: string
               in?: {
   }[],
                 gt?: string
                 gte?: string
                 contains?: string
                 endsWith?: string
            
}
export interface main_RoleListRelationFilter {
                                    
}
export interface main_StringNullableFilter {
                 equals?: string
               in?: {
   }[],
                 gt?: string
                 gte?: string
                 lt?: string
                 lte?: string
               notIn?: {
   }[],
                 startsWith?: string
                 contains?: string
                 endsWith?: string
            
}
export interface main_UserOrderByWithRelationInput {
     avatarUrl?: string
                 createdAt?: string
                 id?: string
                 name?: string
                                    
}
export interface main_MenuListRelationFilter {
                                    
}
export interface main_MenuRelationFilter {
                        
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
export interface main_RoleOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_StringFilter {
     lte?: string
               notIn?: {
   }[],
                 endsWith?: string
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                             startsWith?: string
                 contains?: string
            
}
export interface main_PostWhereInput {
                                       OR?: {
   }[],
                                                                                    
}
export interface main_RoleWhereInput {
   OR?: {
   }[],
                                                                                                
}
export interface main_IntFilter {
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
export interface main_NestedIntFilter {
     gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
                 gt?: number
            
}
export interface main_NestedStringNullableFilter {
     equals?: string
                 gte?: string
               in?: {
   }[],
               notIn?: {
   }[],
                 contains?: string
                 endsWith?: string
                 gt?: string
                 lt?: string
                 lte?: string
                             startsWith?: string
            
}
export interface main_PostOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_UserListRelationFilter {
                                    
}
export interface main_UserRelationFilter {
                        
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
export interface main_DateTimeNullableFilter {
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
export interface main_MenuWhereInput {
                                                               OR?: {
   }[],
                                                                                                
}
export interface main_NestedIntNullableFilter {
     gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
                 gt?: number
            
}
export interface main_PostListRelationFilter {
                                    
}
export interface InjectedUser__GetListInput {
   orderBy?: {
   }[],
             skip: number
         take: number
    
}


    
export interface User__GetListResponse {
    data?: User__GetListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__GetListResponseData {
    data?: {
        avatarUrl?: string
        createdAt?: string
        id?: string
        name?: string
    }[],
      total?: number
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
}export interface User__GetUserRoleInput {
     userId: string
            
}
export interface InternalUser__GetUserRoleInput {
      userId: string
}
export interface InjectedUser__GetUserRoleInput {
     userId: string
    
}


    
export interface User__GetUserRoleResponse {
    data?: User__GetUserRoleResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__GetUserRoleResponseData {
    data?: {
      Role?: {
          code?: string
          remark?: string
      }[],
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
        avatarUrl?: string
        id?: string
        name?: string
      roles?: {
          code?: string
      }[],
    },
}
export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}