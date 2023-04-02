export interface Post__CreateOneInput {
     content?: string
                 poster?: string
                 publishedAt?: string
                 title: string
            
}
export interface InternalPost__CreateOneInput {
      content?: string
      poster?: string
      publishedAt?: string
      title: string
      userId?: string
}
export interface InjectedPost__CreateOneInput {
     publishedAt?: string
         title: string
         userId: string
         content?: string
         poster?: string
    
}


    
export interface Post__CreateOneResponse {
    data?: Post__CreateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__CreateOneResponseData {
    data?: {
        title?: string
      User?: {
          id?: string
          name?: string
          avatarUrl?: string
      },
        authorId?: string
        id?: number
        poster?: string
        publishedAt?: string
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
     take?: number
               orderBy?: {
   }[],
                             skip?: number
            
}
export interface InternalPost__GetListInput {
      skip?: number
      take?: number
    orderBy?: {
    }[],
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
export interface main_NestedStringFilter {
     gte?: string
               in?: {
   }[],
                 lte?: string
                           notIn?: {
   }[],
                 contains?: string
                 endsWith?: string
                 equals?: string
                 gt?: string
                 lt?: string
                 startsWith?: string
            
}
export interface main_RoleOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_RoleWhereInput {
                           OR?: {
   }[],
                                                                        
}
export interface main_StringFilter {
     startsWith?: string
                 endsWith?: string
                 gte?: string
               in?: {
   }[],
               notIn?: {
   }[],
                 lte?: string
                             contains?: string
                 equals?: string
                 gt?: string
                 lt?: string
            
}
export interface main_StringNullableFilter {
   in?: {
   }[],
                 lte?: string
                           notIn?: {
   }[],
                 endsWith?: string
                 equals?: string
                 gte?: string
                 startsWith?: string
                 contains?: string
                 gt?: string
                 lt?: string
            
}
export interface main_IntFilter {
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
export interface main_MenuRelationFilter {
                        
}
export interface main_NestedIntFilter {
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
export interface main_PostListRelationFilter {
                                    
}
export interface main_PostWhereInput {
                                                   OR?: {
   }[],
                                                                        
}
export interface main_UserOrderByWithRelationInput {
                             avatarUrl?: string
                 createdAt?: string
                 id?: string
                 name?: string
            
}
export interface main_UserWhereInput {
                                                                           OR?: {
   }[],
                                    
}
export interface main_IntNullableFilter {
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
export interface main_PostOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_RoleListRelationFilter {
                                    
}
export interface main_UserListRelationFilter {
                                    
}
export interface main_NestedStringNullableFilter {
     lte?: string
               notIn?: {
   }[],
                 startsWith?: string
                 contains?: string
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                             endsWith?: string
            
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
export interface main_MenuListRelationFilter {
                                    
}
export interface main_MenuWhereInput {
                                                                                       OR?: {
   }[],
                                                                        
}
export interface main_PostOrderByWithRelationInput {
     id?: string
                 poster?: string
                 publishedAt?: string
                 title?: string
                             authorId?: string
                 content?: string
            
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
        authorId?: string
        id?: number
        poster?: string
        publishedAt?: string
        title?: string
      User?: {
          avatarUrl?: string
          name?: string
      },
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
        id?: number
        poster?: string
        publishedAt?: string
        title?: string
    },
}export interface Post__UpdateOneInput {
     publishedAt?: string
                 title?: string
                 content?: string
                 id: number
                 poster?: string
            
}
export interface InternalPost__UpdateOneInput {
      publishedAt?: string
      title?: string
      content?: string
      id: number
      poster?: string
}
export interface InjectedPost__UpdateOneInput {
     publishedAt?: string
         title?: string
         content?: string
         id: number
         poster?: string
    
}


    
export interface Post__UpdateOneResponse {
    data?: Post__UpdateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Post__UpdateOneResponseData {
    data?: {
        poster?: string
        publishedAt?: string
        title?: string
      User?: {
          avatarUrl?: string
          id?: string
          name?: string
      },
        authorId?: string
        id?: number
    },
}export interface System__BindRoleApisInput {
   allRoles: {
   }[],
               apis: {
   }[],
                 roleCode: string
            
}
export interface InternalSystem__BindRoleApisInput {
    allRoles: {
    }[],
    apis: {
    }[],
      roleCode: string
}
export interface InjectedSystem__BindRoleApisInput {
   apis: {
   }[],
         roleCode: string
       allRoles: {
   }[],
    
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
        roles?: string
        restUrl?: string
        roleType?: string
        createTime?: string
        id?: number
        operationType?: string
        title?: string
        content?: string
        deleteTime?: string
        method?: string
        remark?: string
        updateTime?: string
    }[],
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
     avatarUrl?: string
                 id: string
                 name: string
                 role?: string
            
}
export interface InternalUser__CreateOneInput {
      name: string
      role?: string
      avatarUrl?: string
      id: string
}
export interface InjectedUser__CreateOneInput {
     id: string
         name: string
         role?: string
         avatarUrl?: string
    
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
