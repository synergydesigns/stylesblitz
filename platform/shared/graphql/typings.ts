import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Timestamp: any,
};


export type Address = {
   __typename?: 'Address',
  ID: Scalars['ID'],
  country?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  zipcode?: Maybe<Scalars['Int']>,
  street?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['Float']>,
  latitude?: Maybe<Scalars['Float']>,
};

export type Asset = {
   __typename?: 'Asset',
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  caption?: Maybe<Scalars['String']>,
  alt?: Maybe<Scalars['String']>,
  mediaType: Scalars['String'],
  mimeType: Scalars['String'],
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  filename: Scalars['String'],
  size?: Maybe<Scalars['Int']>,
};

export type AssetInput = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  alt?: Maybe<Scalars['String']>,
  mediaType: Scalars['String'],
  mimeType: Scalars['String'],
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  filename: Scalars['String'],
  size: Scalars['Int'],
};

export enum AssetOwner {
  Vendor = 'VENDOR',
  User = 'USER',
  Service = 'SERVICE',
  Category = 'CATEGORY'
}

export type AssetUploadOutput = {
   __typename?: 'AssetUploadOutput',
  ID: Scalars['String'],
  uploadUrl: Scalars['String'],
  assetURL: Scalars['String'],
};

export type Autocomplete = {
   __typename?: 'Autocomplete',
  type?: Maybe<Scalars['String']>,
  query?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type Cart = {
   __typename?: 'Cart',
  id: Scalars['ID'],
  userId?: Maybe<Scalars['String']>,
  vendorID?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Timestamp']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
  cartType?: Maybe<CartType>,
  type?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
};

export type CartInput = {
  vendorID: Scalars['String'],
  quantity: Scalars['Int'],
  type: Scalars['String'],
  typeID: Scalars['String'],
};

export type CartType = {
   __typename?: 'CartType',
  product?: Maybe<Product>,
  service?: Maybe<Service>,
};

export type CartUpdateInput = {
  cartID: Scalars['String'],
  quantity: Scalars['Int'],
  type: Scalars['String'],
  typeID: Scalars['String'],
};

export enum DurationType {
  Days = 'days',
  Hours = 'hours',
  Mins = 'mins'
}

export type Mutation = {
   __typename?: 'Mutation',
  createAccount?: Maybe<Asset>,
  login?: Maybe<Scalars['String']>,
  createPresignedURL?: Maybe<Array<Maybe<AssetUploadOutput>>>,
  createCart?: Maybe<Cart>,
  updateCart?: Maybe<Cart>,
  deleteCart?: Maybe<Scalars['Boolean']>,
  createVendorCategory?: Maybe<VendorCategory>,
  updateVendorCategory?: Maybe<VendorCategory>,
  deleteVendorCategory?: Maybe<Scalars['Boolean']>,
  createProduct?: Maybe<Product>,
  createService?: Maybe<Service>,
  updateService?: Maybe<Service>,
  deleteService?: Maybe<Scalars['Boolean']>,
};


export type MutationCreateAccountArgs = {
  name?: Maybe<Scalars['String']>
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationCreatePresignedUrlArgs = {
  input: Array<Maybe<AssetInput>>,
  owner: AssetOwner,
  id?: Maybe<Scalars['String']>
};


export type MutationCreateCartArgs = {
  input: CartInput
};


export type MutationUpdateCartArgs = {
  input: CartUpdateInput
};


export type MutationDeleteCartArgs = {
  cart_id: Scalars['ID']
};


export type MutationCreateVendorCategoryArgs = {
  input: VendorCategoryInput
};


export type MutationUpdateVendorCategoryArgs = {
  input: VendorCategoryInputUpdate,
  categoryId: Scalars['Int']
};


export type MutationDeleteVendorCategoryArgs = {
  categoryId: Scalars['Int']
};


export type MutationCreateProductArgs = {
  input: ProductInput
};


export type MutationCreateServiceArgs = {
  input: ServiceInput
};


export type MutationUpdateServiceArgs = {
  input: ServiceInputUpdate,
  serviceId: Scalars['Int']
};


export type MutationDeleteServiceArgs = {
  serviceId: Scalars['Int']
};

export type Product = {
   __typename?: 'Product',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['String']>,
  vendorId?: Maybe<Scalars['String']>,
  available?: Maybe<Scalars['Int']>,
  hot?: Maybe<Scalars['Boolean']>,
  brandId?: Maybe<Scalars['String']>,
};

export type ProductInput = {
  Name: Scalars['String'],
  Available: Scalars['Int'],
  VendorID?: Maybe<Scalars['String']>,
  CategoryID?: Maybe<Scalars['String']>,
  BrandID?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  user?: Maybe<User>,
  getAsset?: Maybe<Asset>,
  getSuggestions?: Maybe<Array<Maybe<Autocomplete>>>,
  getAllCarts?: Maybe<Array<Maybe<Cart>>>,
  getAllCategories?: Maybe<Array<Maybe<VendorCategory>>>,
  getProductsByVendor?: Maybe<Array<Maybe<Product>>>,
  getAllVendorService?: Maybe<Array<Maybe<Service>>>,
  searchServices?: Maybe<Array<Maybe<Service>>>,
};


export type QueryUserArgs = {
  id: Scalars['String']
};


export type QueryGetAssetArgs = {
  id: Scalars['String']
};


export type QueryGetSuggestionsArgs = {
  query: Scalars['String']
};


export type QueryGetAllCartsArgs = {
  user_id?: Maybe<Scalars['ID']>
};


export type QueryGetAllCategoriesArgs = {
  vendorId?: Maybe<Scalars['String']>
};


export type QueryGetProductsByVendorArgs = {
  vendorID: Scalars['String']
};


export type QueryGetAllVendorServiceArgs = {
  vendorId: Scalars['String']
};


export type QuerySearchServicesArgs = {
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  rating?: Maybe<SortRating>,
  price?: Maybe<SortPrice>
};

export type Service = {
   __typename?: 'Service',
  ID: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  durationType?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  Trending?: Maybe<Scalars['Boolean']>,
  VendorId?: Maybe<Scalars['ID']>,
  CategoryId?: Maybe<Scalars['ID']>,
};

export type ServiceInput = {
  name: Scalars['String'],
  Duration: Scalars['Int'],
  DurationType: DurationType,
  price?: Maybe<Scalars['Float']>,
  trending?: Maybe<Scalars['Boolean']>,
  VendorId: Scalars['String'],
  CategoryId: Scalars['Int'],
};

export type ServiceInputUpdate = {
  name?: Maybe<Scalars['String']>,
  Duration?: Maybe<Scalars['Int']>,
  DurationType?: Maybe<DurationType>,
  price?: Maybe<Scalars['Float']>,
  trending?: Maybe<Scalars['Boolean']>,
  CategoryId?: Maybe<Scalars['Int']>,
};

export type Shop = {
   __typename?: 'Shop',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  vendorId?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['Timestamp']>,
  updatedAt?: Maybe<Scalars['Timestamp']>,
};

export enum SortPrice {
  Highest = 'HIGHEST',
  Lowest = 'LOWEST'
}

export enum SortRating {
  Highest = 'HIGHEST',
  Lowest = 'LOWEST'
}


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email?: Maybe<Scalars['String']>,
  firstname?: Maybe<Scalars['String']>,
  lastname?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  ProfileImage?: Maybe<Scalars['String']>,
  WallImage?: Maybe<Scalars['String']>,
  Bio?: Maybe<Scalars['String']>,
  CreatedAt: Scalars['Timestamp'],
  UpdatedAt: Scalars['Timestamp'],
};

export type Vendor = {
   __typename?: 'Vendor',
  ID: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  addresses?: Maybe<Array<Maybe<Address>>>,
  services?: Maybe<Array<Maybe<Service>>>,
};

export type VendorCategory = {
   __typename?: 'VendorCategory',
  ID: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type VendorCategoryInput = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  vendorId: Scalars['String'],
};

export type VendorCategoryInputUpdate = {
  vendorId: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type SuggestionsQueryVariables = {
  query: Scalars['String']
};


export type SuggestionsQuery = (
  { __typename?: 'Query' }
  & { getSuggestions: Maybe<Array<Maybe<(
    { __typename?: 'Autocomplete' }
    & Pick<Autocomplete, 'type' | 'query' | 'url'>
  )>>> }
);

export type SearchServicesQueryVariables = {
  name: Scalars['String']
};


export type SearchServicesQuery = (
  { __typename?: 'Query' }
  & { searchServices: Maybe<Array<Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'ID' | 'price' | 'name'>
  )>>> }
);

export type UserDataQueryVariables = {
  id: Scalars['String']
};


export type UserDataQuery = (
  { __typename?: 'Query' }
  & { user: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'lastname' | 'firstname' | 'email'>
  )> }
);


export const SuggestionsDocument = gql`
    query suggestions($query: String!) {
  getSuggestions(query: $query) {
    type
    query
    url
  }
}
    `;

/**
 * __useSuggestionsQuery__
 *
 * To run a query within a React component, call `useSuggestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuggestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuggestionsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSuggestionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SuggestionsQuery, SuggestionsQueryVariables>) {
        return ApolloReactHooks.useQuery<SuggestionsQuery, SuggestionsQueryVariables>(SuggestionsDocument, baseOptions);
      }
export function useSuggestionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SuggestionsQuery, SuggestionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SuggestionsQuery, SuggestionsQueryVariables>(SuggestionsDocument, baseOptions);
        }
export type SuggestionsQueryHookResult = ReturnType<typeof useSuggestionsQuery>;
export type SuggestionsLazyQueryHookResult = ReturnType<typeof useSuggestionsLazyQuery>;
export type SuggestionsQueryResult = ApolloReactCommon.QueryResult<SuggestionsQuery, SuggestionsQueryVariables>;
export const SearchServicesDocument = gql`
    query searchServices($name: String!) {
  searchServices(name: $name) {
    ID
    price
    name
  }
}
    `;

/**
 * __useSearchServicesQuery__
 *
 * To run a query within a React component, call `useSearchServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchServicesQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSearchServicesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchServicesQuery, SearchServicesQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchServicesQuery, SearchServicesQueryVariables>(SearchServicesDocument, baseOptions);
      }
export function useSearchServicesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchServicesQuery, SearchServicesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchServicesQuery, SearchServicesQueryVariables>(SearchServicesDocument, baseOptions);
        }
export type SearchServicesQueryHookResult = ReturnType<typeof useSearchServicesQuery>;
export type SearchServicesLazyQueryHookResult = ReturnType<typeof useSearchServicesLazyQuery>;
export type SearchServicesQueryResult = ApolloReactCommon.QueryResult<SearchServicesQuery, SearchServicesQueryVariables>;
export const UserDataDocument = gql`
    query userData($id: String!) {
  user(id: $id) {
    lastname
    firstname
    email
  }
}
    `;

/**
 * __useUserDataQuery__
 *
 * To run a query within a React component, call `useUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
        return ApolloReactHooks.useQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, baseOptions);
      }
export function useUserDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, baseOptions);
        }
export type UserDataQueryHookResult = ReturnType<typeof useUserDataQuery>;
export type UserDataLazyQueryHookResult = ReturnType<typeof useUserDataLazyQuery>;
export type UserDataQueryResult = ApolloReactCommon.QueryResult<UserDataQuery, UserDataQueryVariables>;