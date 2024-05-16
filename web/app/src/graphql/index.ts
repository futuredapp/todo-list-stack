import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
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
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type IMutation = {
  __typename: 'Mutation';
  createTask: ITodo;
  deleteTask?: Maybe<Scalars['Boolean']['output']>;
  toggleCompleted?: Maybe<ITodo>;
};


export type IMutationCreateTaskArgs = {
  input: ITaskCreateInput;
};


export type IMutationDeleteTaskArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationToggleCompletedArgs = {
  id: Scalars['ID']['input'];
};

export type IQuery = {
  __typename: 'Query';
  task?: Maybe<ITodo>;
  tasks: Array<Maybe<ITodo>>;
};


export type IQueryTaskArgs = {
  id: Scalars['ID']['input'];
};

export type ITaskCreateInput = {
  content: Scalars['String']['input'];
};

export type ITodo = {
  __typename: 'Todo';
  completed: Scalars['Boolean']['output'];
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ITasksQueryVariables = Exact<{ [key: string]: never; }>;


export type ITasksQuery = { __typename: 'Query', tasks: Array<{ __typename: 'Todo', id: string, content: string, completed: boolean }> };

export type ITaskQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ITaskQuery = { __typename: 'Query', task?: { __typename: 'Todo', id: string, content: string, completed: boolean } };

export type ICreateTaskMutationVariables = Exact<{
  input: ITaskCreateInput;
}>;


export type ICreateTaskMutation = { __typename: 'Mutation', createTask: { __typename: 'Todo', id: string, content: string, completed: boolean } };

export type IDeleteTaskMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type IDeleteTaskMutation = { __typename: 'Mutation', deleteTask?: boolean };

export type IToggleCompletedMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type IToggleCompletedMutation = { __typename: 'Mutation', toggleCompleted?: { __typename: 'Todo', id: string } };


export const TasksDocument = gql`
    query Tasks {
  tasks {
    id
    content
    completed
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a Vue component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTasksQuery();
 */
export function useTasksQuery(options: VueApolloComposable.UseQueryOptions<ITasksQuery, ITasksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ITasksQuery, ITasksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ITasksQuery, ITasksQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ITasksQuery, ITasksQueryVariables>(TasksDocument, {}, options);
}
export function useTasksLazyQuery(options: VueApolloComposable.UseQueryOptions<ITasksQuery, ITasksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ITasksQuery, ITasksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ITasksQuery, ITasksQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ITasksQuery, ITasksQueryVariables>(TasksDocument, {}, options);
}
export type TasksQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ITasksQuery, ITasksQueryVariables>;
export const TaskDocument = gql`
    query Task($id: ID!) {
  task(id: $id) {
    id
    content
    completed
  }
}
    `;

/**
 * __useTaskQuery__
 *
 * To run a query within a Vue component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTaskQuery({
 *   id: // value for 'id'
 * });
 */
export function useTaskQuery(variables: ITaskQueryVariables | VueCompositionApi.Ref<ITaskQueryVariables> | ReactiveFunction<ITaskQueryVariables>, options: VueApolloComposable.UseQueryOptions<ITaskQuery, ITaskQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ITaskQuery, ITaskQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ITaskQuery, ITaskQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ITaskQuery, ITaskQueryVariables>(TaskDocument, variables, options);
}
export function useTaskLazyQuery(variables?: ITaskQueryVariables | VueCompositionApi.Ref<ITaskQueryVariables> | ReactiveFunction<ITaskQueryVariables>, options: VueApolloComposable.UseQueryOptions<ITaskQuery, ITaskQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ITaskQuery, ITaskQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ITaskQuery, ITaskQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<ITaskQuery, ITaskQueryVariables>(TaskDocument, variables, options);
}
export type TaskQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ITaskQuery, ITaskQueryVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($input: TaskCreateInput!) {
  createTask(input: $input) {
    id
    content
    completed
  }
}
    `;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateTaskMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(options: VueApolloComposable.UseMutationOptions<ICreateTaskMutation, ICreateTaskMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ICreateTaskMutation, ICreateTaskMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ICreateTaskMutation, ICreateTaskMutationVariables>(CreateTaskDocument, options);
}
export type CreateTaskMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ICreateTaskMutation, ICreateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: ID!) {
  deleteTask(id: $id)
}
    `;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteTaskMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(options: VueApolloComposable.UseMutationOptions<IDeleteTaskMutation, IDeleteTaskMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<IDeleteTaskMutation, IDeleteTaskMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<IDeleteTaskMutation, IDeleteTaskMutationVariables>(DeleteTaskDocument, options);
}
export type DeleteTaskMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<IDeleteTaskMutation, IDeleteTaskMutationVariables>;
export const ToggleCompletedDocument = gql`
    mutation ToggleCompleted($id: ID!) {
  toggleCompleted(id: $id) {
    id
  }
}
    `;

/**
 * __useToggleCompletedMutation__
 *
 * To run a mutation, you first call `useToggleCompletedMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useToggleCompletedMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useToggleCompletedMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useToggleCompletedMutation(options: VueApolloComposable.UseMutationOptions<IToggleCompletedMutation, IToggleCompletedMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<IToggleCompletedMutation, IToggleCompletedMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<IToggleCompletedMutation, IToggleCompletedMutationVariables>(ToggleCompletedDocument, options);
}
export type ToggleCompletedMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<IToggleCompletedMutation, IToggleCompletedMutationVariables>;