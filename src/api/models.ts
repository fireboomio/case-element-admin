export interface Post__CreateOneInput {
     poster?: string
                 publishedAt?: string
                 title: string
                 content?: string
            
}
export interface InternalPost__CreateOneInput {
      publishedAt?: string
      title: string
      userId?: string
      content?: string
      poster?: string
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
      skip?: number
      take?: number
    orderBy?: {
    }[],
}
export interface main_NestedStringFilter {
     equals?: string
                 gt?: string
                 lte?: string
                             startsWith?: string
                 contains?: string
                 endsWith?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
               notIn?: {
   }[],
            
}
export interface main_PostOrderByWithRelationInput {
                 authorId?: string
                 content?: string
                 id?: string
                 poster?: string
                 publishedAt?: string
                 title?: string
            
}
export interface main_RoleWhereInput {
                                                   OR?: {
   }[],
                                                
}
export interface main_StringNullableFilter {
   notIn?: {
   }[],
                 startsWith?: string
                 gt?: string
                 gte?: string
                 lt?: string
               in?: {
   }[],
                 lte?: string
                             contains?: string
                 endsWith?: string
                 equals?: string
            
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
export interface main_IntNullableFilter {
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
export interface main_PostListRelationFilter {
                                    
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
export interface main_NestedIntFilter {
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
export interface main_RoleListRelationFilter {
                                    
}
export interface main_UserListRelationFilter {
                                    
}
export interface main_UserOrderByWithRelationInput {
                 avatarUrl?: string
                 createdAt?: string
                 id?: string
                 name?: string
                        
}
export interface main_UserRelationFilter {
                        
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
export interface main_NestedDateTimeNullableFilter {
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
export interface main_PostWhereInput {
                                                                                                   OR?: {
   }[],
                        
}
export interface main_NestedStringNullableFilter {
               notIn?: {
   }[],
                 endsWith?: string
                 gt?: string
                 lt?: string
                 lte?: string
                 startsWith?: string
                 contains?: string
                 equals?: string
                 gte?: string
               in?: {
   }[],
            
}
export interface main_PostOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_RoleOrderByRelationAggregateInput {
     _count?: string
            
}
export interface main_StringFilter {
     startsWith?: string
                 equals?: string
               in?: {
   }[],
                 lt?: string
               notIn?: {
   }[],
                 lte?: string
                             contains?: string
                 endsWith?: string
                 gt?: string
                 gte?: string
            
}
export interface main_UserWhereInput {
               OR?: {
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
export interface main_MenuListRelationFilter {
                                    
}
export interface main_MenuWhereInput {
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
        publishedAt?: string
        title?: string
      User?: {
          avatarUrl?: string
          name?: string
      },
        authorId?: string
        content?: string
        id?: number
        poster?: string
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
        poster?: string
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
    },
}

    
export interface Statistics__MonthlySalesResponse {
    data?: Statistics__MonthlySalesResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Statistics__MonthlySalesResponseData {
    data?: {
        months?: string
    }[],
}

    
export interface Statistics__SaleTypePercentResponse {
    data?: Statistics__SaleTypePercentResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Statistics__SaleTypePercentResponseData {
    data?: {
        typeId?: number
        typeName?: string
    }[],
}

    
export interface Statistics__SalesTop10Response {
    data?: Statistics__SalesTop10ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Statistics__SalesTop10ResponseData {
    data?: {
        shopName?: string
    }[],
}

    
export interface Statistics__VisitTrendingResponse {
    data?: Statistics__VisitTrendingResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Statistics__VisitTrendingResponseData {
    data?: {
        count?: number
        days?: string
    }[],
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
        method?: string
        operationType?: string
        roleType?: string
        content?: string
        deleteTime?: string
        remark?: string
        roles?: string
        title?: string
        updateTime?: string
        createTime?: string
        id?: number
        restUrl?: string
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
     role?: string
                 avatarUrl?: string
                 id: string
                 name: string
            
}
export interface InternalUser__CreateOneInput {
      avatarUrl?: string
      id: string
      name: string
      role?: string
}
export interface InjectedUser__CreateOneInput {
     avatarUrl?: string
         id: string
         name: string
         role?: string
    
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
        name?: string
      roles?: {
          code?: string
      }[],
        avatarUrl?: string
        id?: string
    },
}
export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}