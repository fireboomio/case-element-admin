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
import type { Post__CreateOnePostInput,Post__CreateOnePostResponse,            Post__CreateOnePostResponseData,Post__DeleteManyPostInput,Post__DeleteManyPostResponse,            Post__DeleteManyPostResponseData,Post__DeleteOnePostInput,Post__DeleteOnePostResponse,            Post__DeleteOnePostResponseData,Post__GetOnePostInput,Post__GetOnePostResponse,            Post__GetOnePostResponseData,Post__GetPostListInput,Post__GetPostListResponse,            Post__GetPostListResponseData,Post__UpdateOnePostInput,Post__UpdateOnePostResponse,            Post__UpdateOnePostResponseData,System__BindRoleApisInput,System__BindRoleApisResponse,            System__BindRoleApisResponseData,System__GetRoleBindApisInput,System__GetRoleBindApisResponse,            System__GetRoleBindApisResponseData,User__CreateOneInput,User__CreateOneResponse,            User__CreateOneResponseData,User__GetOneInput,User__GetOneResponse,            User__GetOneResponseData,User__MeResponse,            User__MeResponseData, } from './models'

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
    applicationHash: "4811014d",
    baseURL: "http://localhost:9991",
    sdkVersion: "",
    customFetch: fetch,
}

export const operationMetadata: OperationMetadata = {
    "Post/CreateOnePost": {
        requiresAuthentication: true
		}
    ,
    "Post/DeleteManyPost": {
        requiresAuthentication: false
		}
    ,
    "Post/DeleteOnePost": {
        requiresAuthentication: false
		}
    ,
    "Post/GetOnePost": {
        requiresAuthentication: false
		}
    ,
    "Post/GetPostList": {
        requiresAuthentication: false
		}
    ,
    "Post/UpdateOnePost": {
        requiresAuthentication: false
		}
    ,
    "System/BindRoleApis": {
        requiresAuthentication: false
		}
    ,
    "System/GetRoleBindApis": {
        requiresAuthentication: false
		}
    ,
    "User/CreateOne": {
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
    'Post/GetOnePost': {
        input: Post__GetOnePostInput
        data: Post__GetOnePostResponseData
        requiresAuthentication: false
        
    }
    'Post/GetPostList': {
        input: Post__GetPostListInput
        data: Post__GetPostListResponseData
        requiresAuthentication: false
        
    }
    'System/GetRoleBindApis': {
        input: System__GetRoleBindApisInput
        data: System__GetRoleBindApisResponseData
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
    'Post/CreateOnePost': {
        input: Post__CreateOnePostInput
        data: Post__CreateOnePostResponseData
        requiresAuthentication: true
    }
    'Post/DeleteManyPost': {
        input: Post__DeleteManyPostInput
        data: Post__DeleteManyPostResponseData
        requiresAuthentication: false
    }
    'Post/DeleteOnePost': {
        input: Post__DeleteOnePostInput
        data: Post__DeleteOnePostResponseData
        requiresAuthentication: false
    }
    'Post/UpdateOnePost': {
        input: Post__UpdateOnePostInput
        data: Post__UpdateOnePostResponseData
        requiresAuthentication: false
    }
    'System/BindRoleApis': {
        input: System__BindRoleApisInput
        data: System__BindRoleApisResponseData
        requiresAuthentication: false
    }
    'User/CreateOne': {
        input: User__CreateOneInput
        data: User__CreateOneResponseData
        requiresAuthentication: false
    }
}

export type Subscriptions = {
}

export type LiveQueries = {
}

export interface Operations extends OperationsDefinition<Queries, Mutations, Subscriptions, Role,{},keyof typeof AuthProviderId> {}
