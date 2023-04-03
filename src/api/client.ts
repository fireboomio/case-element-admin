import {
	Client,
	ClientConfig,
	CreateClientConfig,
	User,
	UploadRequestOptions,
	OperationMetadata,
	OperationsDefinition,
	OperationRequestOptions,
	SubscriptionRequestOptions,
	SubscriptionEventHandler,
	FetchUserRequestOptions,
	UploadValidationOptions,
    ExtractProfileName,
    ExtractMeta
} from "fireboom-wundersdk/client";

import type { CustomClaims, Role } from './claims'
import type { Post__CreateOneInput,Post__CreateOneResponse,            Post__CreateOneResponseData,Post__DeleteManyInput,Post__DeleteManyResponse,            Post__DeleteManyResponseData,Post__DeleteOneInput,Post__DeleteOneResponse,            Post__DeleteOneResponseData,Post__GetListInput,Post__GetListResponse,            Post__GetListResponseData,Post__GetOneInput,Post__GetOneResponse,            Post__GetOneResponseData,Post__UpdateOneInput,Post__UpdateOneResponse,            Post__UpdateOneResponseData,Role__GetAllResponse,            Role__GetAllResponseData,Statistics__MonthlySalesResponse,            Statistics__MonthlySalesResponseData,Statistics__SaleTypePercentResponse,            Statistics__SaleTypePercentResponseData,Statistics__SalesTop10Response,            Statistics__SalesTop10ResponseData,Statistics__VisitTrendingResponse,            Statistics__VisitTrendingResponseData,System__BindRoleApisInput,System__BindRoleApisResponse,            System__BindRoleApisResponseData,System__GetRoleBindApisInput,System__GetRoleBindApisResponse,            System__GetRoleBindApisResponseData,User__ConnectRoleInput,User__ConnectRoleResponse,            User__ConnectRoleResponseData,User__CountUsersResponse,            User__CountUsersResponseData,User__CreateOneInput,User__CreateOneResponse,            User__CreateOneResponseData,User__DisconnectRoleInput,User__DisconnectRoleResponse,            User__DisconnectRoleResponseData,User__GetListInput,User__GetListResponse,            User__GetListResponseData,User__GetOneInput,User__GetOneResponse,            User__GetOneResponseData,User__MeResponse,            User__MeResponseData, } from './models'

export const WUNDERGRAPH_S3_ENABLED = false
export const WUNDERGRAPH_AUTH_ENABLED = true


export enum AuthProviderId {
    "auth0" = "auth0",
}

export interface AuthProvider {
    id: AuthProviderId;
    login: (redirectURI?: string) => void;
}

export const defaultClientConfig: ClientConfig = {
    applicationHash: "03d181d7",
    baseURL: "http://localhost:9991",
    sdkVersion: "",
}

export const operationMetadata: OperationMetadata = {
    "Post/CreateOne": {
        requiresAuthentication: true
		}
    ,
    "Post/DeleteMany": {
        requiresAuthentication: false
		}
    ,
    "Post/DeleteOne": {
        requiresAuthentication: false
		}
    ,
    "Post/GetList": {
        requiresAuthentication: false
		}
    ,
    "Post/GetOne": {
        requiresAuthentication: false
		}
    ,
    "Post/UpdateOne": {
        requiresAuthentication: false
		}
    ,
    "Role/GetAll": {
        requiresAuthentication: false
		}
    ,
    "Statistics/MonthlySales": {
        requiresAuthentication: false
		}
    ,
    "Statistics/SaleTypePercent": {
        requiresAuthentication: false
		}
    ,
    "Statistics/SalesTop10": {
        requiresAuthentication: false
		}
    ,
    "Statistics/VisitTrending": {
        requiresAuthentication: false
		}
    ,
    "System/BindRoleApis": {
        requiresAuthentication: true
		}
    ,
    "System/GetRoleBindApis": {
        requiresAuthentication: true
		}
    ,
    "User/ConnectRole": {
        requiresAuthentication: false
		}
    ,
    "User/CountUsers": {
        requiresAuthentication: false
		}
    ,
    "User/CreateOne": {
        requiresAuthentication: false
		}
    ,
    "User/DisconnectRole": {
        requiresAuthentication: false
		}
    ,
    "User/GetList": {
        requiresAuthentication: false
		}
    ,
    "User/GetOne": {
        requiresAuthentication: false
		}
    ,
    "User/Me": {
        requiresAuthentication: true
		}
    
}

export class WunderGraphClient extends Client {
	query<
		OperationName extends Extract<keyof Operations['queries'], string>,
		Input extends Operations['queries'][OperationName]['input'] = Operations['queries'][OperationName]['input'],
		Data extends Operations['queries'][OperationName]['data'] = Operations['queries'][OperationName]['data']
	>(options: OperationName extends string ? OperationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.query<OperationRequestOptions, Data>(options);
	}
	mutate<
		OperationName extends Extract<keyof Operations['mutations'], string>,
		Input extends Operations['mutations'][OperationName]['input'] = Operations['mutations'][OperationName]['input'],
		Data extends Operations['mutations'][OperationName]['data'] = Operations['mutations'][OperationName]['data']
	>(options: OperationName extends string ? OperationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.mutate<OperationRequestOptions, Data>(options);
	}
	subscribe<
		OperationName extends Extract<keyof Operations['subscriptions'], string>,
		Input extends Operations['subscriptions'][OperationName]['input'] = Operations['subscriptions'][OperationName]['input'],
		Data extends Operations['subscriptions'][OperationName]['data'] = Operations['subscriptions'][OperationName]['data']
	>(
		options: OperationName extends string
			? SubscriptionRequestOptions<OperationName, Input>
			: SubscriptionRequestOptions,
		cb: SubscriptionEventHandler<Data>
	) {
		return super.subscribe(options, cb);
	}
	public login(authProviderID: Operations['authProvider'], redirectURI?: string) {
		return super.login(authProviderID, redirectURI);
	}
	public async fetchUser<TUser extends User = User<Role, CustomClaims>>(options?: FetchUserRequestOptions) {
		return super.fetchUser<TUser>(options);
	}
}

export const createClient = (config?: CreateClientConfig) => {
	return new WunderGraphClient({
		...defaultClientConfig,
		...config,
		operationMetadata,
		csrfEnabled: true,
	});
};

export type Queries = {
    'Post/GetList': {
        input: Post__GetListInput
        data: Post__GetListResponseData
        requiresAuthentication: false
        
    }
    'Post/GetOne': {
        input: Post__GetOneInput
        data: Post__GetOneResponseData
        requiresAuthentication: false
        
    }
    'Role/GetAll': {
        input?: undefined
        data: Role__GetAllResponseData
        requiresAuthentication: false
        
    }
    'Statistics/MonthlySales': {
        input?: undefined
        data: Statistics__MonthlySalesResponseData
        requiresAuthentication: false
        
    }
    'Statistics/SaleTypePercent': {
        input?: undefined
        data: Statistics__SaleTypePercentResponseData
        requiresAuthentication: false
        
    }
    'Statistics/SalesTop10': {
        input?: undefined
        data: Statistics__SalesTop10ResponseData
        requiresAuthentication: false
        
    }
    'Statistics/VisitTrending': {
        input?: undefined
        data: Statistics__VisitTrendingResponseData
        requiresAuthentication: false
        
    }
    'System/GetRoleBindApis': {
        input: System__GetRoleBindApisInput
        data: System__GetRoleBindApisResponseData
        requiresAuthentication: true
        
    }
    'User/CountUsers': {
        input?: undefined
        data: User__CountUsersResponseData
        requiresAuthentication: false
        
    }
    'User/GetList': {
        input: User__GetListInput
        data: User__GetListResponseData
        requiresAuthentication: false
        
    }
    'User/GetOne': {
        input: User__GetOneInput
        data: User__GetOneResponseData
        requiresAuthentication: false
        
    }
    'User/Me': {
        input?: undefined
        data: User__MeResponseData
        requiresAuthentication: true
        
    }
}

export type Mutations = {
    'Post/CreateOne': {
        input: Post__CreateOneInput
        data: Post__CreateOneResponseData
        requiresAuthentication: true
    }
    'Post/DeleteMany': {
        input: Post__DeleteManyInput
        data: Post__DeleteManyResponseData
        requiresAuthentication: false
    }
    'Post/DeleteOne': {
        input: Post__DeleteOneInput
        data: Post__DeleteOneResponseData
        requiresAuthentication: false
    }
    'Post/UpdateOne': {
        input: Post__UpdateOneInput
        data: Post__UpdateOneResponseData
        requiresAuthentication: false
    }
    'System/BindRoleApis': {
        input: System__BindRoleApisInput
        data: System__BindRoleApisResponseData
        requiresAuthentication: true
    }
    'User/ConnectRole': {
        input: User__ConnectRoleInput
        data: User__ConnectRoleResponseData
        requiresAuthentication: false
    }
    'User/CreateOne': {
        input: User__CreateOneInput
        data: User__CreateOneResponseData
        requiresAuthentication: false
    }
    'User/DisconnectRole': {
        input: User__DisconnectRoleInput
        data: User__DisconnectRoleResponseData
        requiresAuthentication: false
    }
}

export type Subscriptions = {
}

export type LiveQueries = {
}

export interface Operations extends OperationsDefinition<Queries, Mutations, Subscriptions, Role,{},keyof typeof AuthProviderId> {}
