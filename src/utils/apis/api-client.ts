import { QueryCache } from '@tanstack/react-query';
import { showToast } from 'utils/helper';
// import * as auth from 'auth-provider'
const apiURL = process.env.REACT_APP_API_URL || 'https://wavesonline-backend.vercel.app/api';

const queryCache = new QueryCache({
    onError: error => {
        console.log(error);
    },
    onSuccess: data => {
        console.log(data);
    },
});

async function client(
    endpoint: string,
    {
        data,
        headers: customHeaders,
        ...customConfig
    }: Partial<RequestInit> & { data?: unknown } = {},
) {
    const token = localStorage.getItem('token');
    const config: RequestInit = {
        method: data ? 'POST' : 'GET',
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data || customConfig?.method === 'PUT' ? 'application/json' : '',
            ...customHeaders,
        },
        ...customConfig,
    };

    return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
        const data = await response.json();

        if (response.status === 401) {
            queryCache.clear();
            // await auth.logout()
            // refresh the page for them
            showToast('error', data?.message);
            localStorage.removeItem('token');
            window.location.href = window.location.origin + '/login';
            return Promise.reject({ message: 'Please re-authenticate.' });
        }
        if (response.ok) {
            return data;
        } else {
            showToast('error', data?.message);
            return Promise.reject(data);
        }
    });
}

export { client };
