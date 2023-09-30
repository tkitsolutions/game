import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UserAsset, User } from 'utils/types/user.type';
import { client } from './api-client';

export const useUpdateAssets = () => {
    const queryClient = useQueryClient();
    return useMutation<UserAsset[], Error, UserAsset[]>(
        data =>
            client('assets/updateAssets', {
                data,
            }),
        {
            onSuccess() {
                queryClient.invalidateQueries(['userProfile']);
            },
        },
    );
};

export const useGetProfile = () =>
    useQuery<User, Error>(['userProfile'], () => client(`users/profile`));
