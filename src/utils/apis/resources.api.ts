import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { client } from './api-client';
import { UserResource, UserResourceDetail } from 'utils/types/resources.typs';

export const useGetResources = () =>
    useQuery<UserResource[], Error>(['resources'], () => client(`userResources`));

export const useGetResourceDetail = (id?: string) =>
    useQuery<UserResourceDetail, Error>(
        ['resourcesDetail', id],
        () => client(`userResources/${id}`),
        {
            enabled: !!id,
        },
    );

export const useUpdateResource = () => {
    const queryClient = useQueryClient();

    return useMutation<unknown, Error, string>(
        id => client(`userResources/${id}`, { method: 'PUT' }),
        {
            onSuccess(data, id) {
                Promise.all([
                    queryClient.invalidateQueries(['resources']),
                    queryClient.invalidateQueries(['userProfile']),
                    queryClient.invalidateQueries(['resourcesDetail', id]),
                ]);
            },
        },
    );
};
