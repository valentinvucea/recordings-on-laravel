import { useEffect, FormEventHandler } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Layout from '@/Layouts/BarePageLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Layout>
            <Head title="Log in" />
            <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">

                <nav className="bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <h3 className="font-semibold text-xl text-gray-700 dark:text-gray-100 leading-tight">Music Catalog</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="flex flex-col flex-1 sm:justify-center items-center pt-6 sm:pt-0 ">
                    <div className="w-full sm:max-w-md px-6 py-4 bg-black dark:bg-gray-100 shadow-md overflow-hidden sm:rounded-lg">
                        <h3 className="font-semibold text-md text-white dark:text-gray-100 leading-tight">Sign In</h3>
                    </div>

                    <div className="w-full sm:max-w-md mt-4 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                        {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="flex items-center mt-5">
                                <PrimaryButton disabled={processing}>
                                    Sign in
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </Layout>
    );
}
