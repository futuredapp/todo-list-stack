import { Boolean, String } from 'src/graphql/scalars'
import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from 'vue'

export type Maybe<T> = T;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: String['input']; output: String['output']; }
  Boolean: { input: Boolean['input']; output: Boolean['output']; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type IQuery = {
  __typename: 'Query';
  hello: Scalars['String']['output'];
};

export type IHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type IHelloQuery = { __typename: 'Query', hello: String['output'] };


export const HelloDocument = gql`
  query Hello {
    hello
  }
`

/**
 * __useHelloQuery__
 *
 * To run a query within a Vue component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useHelloQuery();
 */
export function useHelloQuery (options: VueApolloComposable.UseQueryOptions<IHelloQuery, IHelloQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<IHelloQuery, IHelloQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<IHelloQuery, IHelloQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<IHelloQuery, IHelloQueryVariables>(HelloDocument, {}, options)
}

export function useHelloLazyQuery (options: VueApolloComposable.UseQueryOptions<IHelloQuery, IHelloQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<IHelloQuery, IHelloQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<IHelloQuery, IHelloQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<IHelloQuery, IHelloQueryVariables>(HelloDocument, {}, options)
}

export type HelloQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<IHelloQuery, IHelloQueryVariables>;
