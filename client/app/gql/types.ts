import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CatalogItemType = {
  __typename?: 'CatalogItemType';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type CreateInstance = {
  configDriver?: Scalars['Boolean'];
  flavorRef: Scalars['String'];
  imageRef: Scalars['String'];
  maxCount?: Scalars['Int'];
  minCount?: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  networks?: InputMaybe<Array<InstanceNetworkInput>>;
};

export type DomainType = {
  __typename?: 'DomainType';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type FlavorType = {
  __typename?: 'FlavorType';
  id: Scalars['String'];
  links: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type ImageType = {
  __typename?: 'ImageType';
  architecture?: Maybe<Scalars['String']>;
  checksum: Scalars['String'];
  containerFormat: Scalars['String'];
  createdAt: Scalars['String'];
  directUrl: Scalars['String'];
  diskFormat: Scalars['String'];
  distribution?: Maybe<Scalars['String']>;
  family?: Maybe<Scalars['String']>;
  file: Scalars['String'];
  hwRngModel?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  latest?: Maybe<Scalars['String']>;
  locations: Array<LocationType>;
  minDisk: Scalars['Int'];
  minRam: Scalars['Int'];
  name: Scalars['String'];
  osDistro?: Maybe<Scalars['String']>;
  osHashAlgo: Scalars['String'];
  osHashValue: Scalars['String'];
  osHidden: Scalars['Boolean'];
  osType?: Maybe<Scalars['String']>;
  osVersion?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  ownerSpecifiedOpenstackMd5?: Maybe<Scalars['String']>;
  ownerSpecifiedOpenstackObject?: Maybe<Scalars['String']>;
  ownerSpecifiedOpenstackSha256?: Maybe<Scalars['String']>;
  protected: Scalars['Boolean'];
  schema: Scalars['String'];
  self: Scalars['String'];
  size: Scalars['Int'];
  status: Scalars['String'];
  stores: Scalars['String'];
  tags: Array<Scalars['String']>;
  updatedAt: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  virtualSize: Scalars['Int'];
  visibility: Scalars['String'];
};

export type InstanceNetworkInput = {
  uuid: Scalars['String'];
};

export type LinkType = {
  __typename?: 'LinkType';
  href: Scalars['String'];
  rel: Scalars['String'];
};

export type LocationType = {
  __typename?: 'LocationType';
  metadata: MetadataType;
  url: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MetadataType = {
  __typename?: 'MetadataType';
  store: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createServer: Scalars['String'];
  login: TokenType;
};


export type MutationCreateServerArgs = {
  input: CreateInstance;
  token: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginUserInput;
};

export type NetworkType = {
  __typename?: 'NetworkType';
  adminStateUp: Scalars['Boolean'];
  availabilityZoneHints: Array<Scalars['String']>;
  availabilityZones: Array<Scalars['String']>;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  dnsDomain: Scalars['String'];
  id: Scalars['String'];
  ipv4AddressScope?: Maybe<Scalars['String']>;
  ipv6AddressScope?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  mtu: Scalars['Int'];
  name: Scalars['String'];
  portSecurityEnabled: Scalars['Boolean'];
  projectId: Scalars['String'];
  qosPolicyId?: Maybe<Scalars['String']>;
  revisionNumber: Scalars['Int'];
  routerExternal: Scalars['Boolean'];
  shared: Scalars['Boolean'];
  status: Scalars['String'];
  subnets: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  tenantId: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ProjectType = {
  __typename?: 'ProjectType';
  domain: DomainType;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  flavors: Array<FlavorType>;
  hello: Scalars['String'];
  images: Array<ImageType>;
  networks: Array<NetworkType>;
  servers: Array<ServerType>;
};


export type QueryFlavorsArgs = {
  token: Scalars['String'];
};


export type QueryImagesArgs = {
  token: Scalars['String'];
};


export type QueryNetworksArgs = {
  token: Scalars['String'];
};


export type QueryServersArgs = {
  token: Scalars['String'];
};

export type RoleType = {
  __typename?: 'RoleType';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ServerFlavorType = {
  __typename?: 'ServerFlavorType';
  id: Scalars['String'];
  links: Array<LinkType>;
};

export type ServerImageType = {
  __typename?: 'ServerImageType';
  id: Scalars['String'];
  links: Array<LinkType>;
};

export type ServerType = {
  __typename?: 'ServerType';
  accessIPv4: Scalars['String'];
  accessIPv6: Scalars['String'];
  created: Scalars['String'];
  flavor: ServerFlavorType;
  hostId: Scalars['String'];
  id: Scalars['String'];
  image: ServerImageType;
  metadata: SeverMetadataType;
  name: Scalars['String'];
  status: Scalars['String'];
  tenantId: Scalars['String'];
  updated: Scalars['String'];
  userId: Scalars['String'];
};

export type SeverMetadataType = {
  __typename?: 'SeverMetadataType';
  baremetal?: Maybe<Scalars['String']>;
  freezer?: Maybe<Scalars['String']>;
  isBootFromVolume?: Maybe<Scalars['String']>;
  sourceImage?: Maybe<Scalars['String']>;
};

export type TokenType = {
  __typename?: 'TokenType';
  auditIds: Array<Scalars['String']>;
  catalog: Array<CatalogItemType>;
  expiresAt: Scalars['String'];
  id: Scalars['String'];
  isDomain: Scalars['Boolean'];
  issuedAt: Scalars['String'];
  methods: Array<Scalars['String']>;
  project: ProjectType;
  roles: Array<RoleType>;
  user: UserType;
};

export type UserType = {
  __typename?: 'UserType';
  domain: DomainType;
  id: Scalars['String'];
  name: Scalars['String'];
  passwordExpiresAt: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'TokenType', id: string } };

export type GetNetworksQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetNetworksQuery = { __typename?: 'Query', networks: Array<{ __typename?: 'NetworkType', id: string, name: string, status: string }> };

export type GetFlavorsQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetFlavorsQuery = { __typename?: 'Query', flavors: Array<{ __typename?: 'FlavorType', id: string, name: string }> };

export type GetImagesQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetImagesQuery = { __typename?: 'Query', images: Array<{ __typename?: 'ImageType', id: string, name: string }> };

export type GetServersQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type GetServersQuery = { __typename?: 'Query', servers: Array<{ __typename?: 'ServerType', id: string, name: string, status: string, image: { __typename?: 'ServerImageType', id: string } }> };

export type CreateServerMutationVariables = Exact<{
  input: CreateInstance;
  token: Scalars['String'];
}>;


export type CreateServerMutation = { __typename?: 'Mutation', createServer: string };


export const LoginDocument = gql`
    mutation Login($input: LoginUserInput!) {
  login(input: $input) {
    id
  }
}
    `;
export const GetNetworksDocument = gql`
    query getNetworks($token: String!) {
  networks(token: $token) {
    id
    name
    status
  }
}
    `;
export const GetFlavorsDocument = gql`
    query getFlavors($token: String!) {
  flavors(token: $token) {
    id
    name
  }
}
    `;
export const GetImagesDocument = gql`
    query getImages($token: String!) {
  images(token: $token) {
    id
    name
  }
}
    `;
export const GetServersDocument = gql`
    query getServers($token: String!) {
  servers(token: $token) {
    id
    name
    status
    image {
      id
    }
  }
}
    `;
export const CreateServerDocument = gql`
    mutation createServer($input: CreateInstance!, $token: String!) {
  createServer(input: $input, token: $token)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const LoginDocumentString = print(LoginDocument);
const GetNetworksDocumentString = print(GetNetworksDocument);
const GetFlavorsDocumentString = print(GetFlavorsDocument);
const GetImagesDocumentString = print(GetImagesDocument);
const GetServersDocumentString = print(GetServersDocument);
const CreateServerDocumentString = print(CreateServerDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: LoginMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<LoginMutation>(LoginDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login', 'mutation');
    },
    getNetworks(variables: GetNetworksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetNetworksQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetNetworksQuery>(GetNetworksDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNetworks', 'query');
    },
    getFlavors(variables: GetFlavorsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetFlavorsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetFlavorsQuery>(GetFlavorsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFlavors', 'query');
    },
    getImages(variables: GetImagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetImagesQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetImagesQuery>(GetImagesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getImages', 'query');
    },
    getServers(variables: GetServersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetServersQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetServersQuery>(GetServersDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getServers', 'query');
    },
    createServer(variables: CreateServerMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: CreateServerMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateServerMutation>(CreateServerDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createServer', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;