import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserContext } from '@/context/userContext';
import { useSession } from 'next-auth/react';
import React, { useContext, useState } from 'react';
import bcrypt from 'bcryptjs';
import Loader from '@/components/common/Loader/Loader';

const UpdatePass = () => {
    const { userData } = useContext(UserContext);
    const { data: session } = useSession();
    const [loading, setLoading] = useState(false);
    const [hasPassword, setHasPassword] = useState(!!userData?.password);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== repeatPassword) {
            console.error('New password and repeat password do not match');
            return;
        }

        if (hasPassword) {
            // Validate current password
            const isMatch = await bcrypt.compare(currentPassword, userData?.password || '');
            if (!isMatch) {
                console.error('Current password is incorrect');
                return;
            }
        }

        setLoading(true);

        try {
            const response = await fetch('/api/users/password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: session?.user?.email,
                    currentPassword: hasPassword ? currentPassword : undefined,
                    newPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
                setCurrentPassword('');
                setNewPassword('');
                setRepeatPassword('');
            } else {
                console.error(data.message || 'Failed to update password');
            }
        } catch (error) {
            console.error('Error updating password:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-full h-auto flex flex-col items-start justify-start bg-white shadowBorder rounded p-4'>
            <div className='flex flex-col w-full gap-4'>

                <div className='flex w-full flex-row items-center justify-between border-b border-b-[#acacac] pb-3'>
                    <h2 className='md:text-lg text-base font-semibold text-[#353535] px-3'>Update Password</h2>
                </div>

                <div>
                    Update your password to keep your account secure. Make sure to choose a strong
                    password that you haven't used before.
                </div>

                {loading && <Loader />}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white md:px-4 px-0 rounded w-full max-w-md"
                >
                    {hasPassword && (
                        <>
                            <label
                                htmlFor="currentPassword"
                                className="block mb-2 text-sm font-medium"
                            >
                                Current Password
                            </label>
                            <Input
                                type="password"
                                id="currentPassword"
                                placeholder='Current Password'
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                                className="mb-4"
                            />
                        </>
                    )}

                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium">
                        New Password
                    </label>
                    <Input
                        type="password"
                        id="newPassword"
                        placeholder='New Password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="mb-4"
                    />

                    <label htmlFor="repeatPassword" className="block mb-2 text-sm font-medium">
                        Repeat New Password
                    </label>
                    <Input
                        type="password"
                        id="repeatPassword"
                        placeholder='New Password'
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                        className="mb-4"
                    />

                    <Button type="submit" className="w-full">
                        Update Password
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePass;