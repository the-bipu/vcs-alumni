'use client';

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { UserContext } from '@/context/userContext';
import { CrossIcon } from 'lucide-react';
import { useRouter } from 'next/router';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { FaUpload } from 'react-icons/fa';
import { formSchema } from '../../schema/formSchema';

const EditProfile = ({ setIsEditing, isEditing }: any) => {
    const router = useRouter();
    const [publicId, setPublicId] = useState("");

    const { setActiveTab, userData, authenticated } = useContext(UserContext);

    const profileLink = `${userData?.profile}`;
    const formattedDate = userData?.dob?.split("T")[0];

    useEffect(() => {
        setActiveTab('account');

        if (!authenticated) {
            router.push('/auth/login')
        }
    }, [setActiveTab, authenticated]);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: userData?.fullName || "",
            phone: userData?.phone ? String(userData.phone) : '',
            profile: profileLink || publicId,
            gender: userData?.gender || "",
            dob: formattedDate || "",
            bio: userData?.bio || "",
            joiningYear: userData?.joiningYear || "",
            passingYear: userData?.passingYear || "",
            accountType: userData?.accountType || "",
            position: userData?.position || "",
            instagram: userData?.instagram || "",
            linkedIn: userData?.linkedIn || "",
            snapchat: userData?.snapchat || "",
        },
    });

    const { setValue, reset } = form;
    useEffect(() => {
        if (!userData?.profile) {
            setValue("profile", publicId);
        }
    }, [publicId, userData]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch(`/api/users/update?email=${userData?.email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to update user");
            }

            const updatedUser = await response.json();
            setIsEditing(!isEditing);
            reset();

        } catch (error: any) {
            console.error("Error updating user:", error.message);
        }
    }

    return (
        <div className='w-full h-auto flex flex-col items-start justify-start bg-white p-4'>
            <div className='flex flex-col w-full gap-4'>

                <div className='flex w-full flex-row items-center justify-between border-b border-b-[#acacac] pb-3'>
                    <h2 className='md:text-lg text-base font-semibold text-[#353535] px-3'>Edit Profile</h2>
                </div>

                <div className='min-w-64 flex flex-col gap-4 mb-4'>
                    {publicId ? (
                        <CldImage src={publicId} alt={publicId} width={384} height={384} />
                    ) : (
                        <Image
                            src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_URL}${userData?.profile}.png`}
                            alt='profile'
                            width={384}
                            height={384}
                            priority={true}
                            className='w-64 h-64 object-cover border-4 border-white shadow'
                        />
                    )}
                    <CldUploadWidget uploadPreset="r79meffi" onSuccess={({ event, info }) => {
                        if (event === 'success' && typeof info === "object" && info !== null) {
                            setPublicId(info?.public_id);
                        }
                    }}>
                        {({ open }) => {
                            return (
                                <Button onClick={() => open()} className='w-64'>
                                    <FaUpload /> Upload an Image
                                </Button>
                            );
                        }}
                    </CldUploadWidget>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Bipanshu Kumar" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+91 XXXXX XXXXX" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This phone number will not be shared publicly.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="profile"
                            render={({ field }) => (
                                <FormItem className='hidden'>
                                    <FormLabel>Profile Picture</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Upload your image..." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is a public field.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Gender</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Male" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is a public field.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Date of Birth</FormLabel>
                                        <FormControl>
                                            <Input placeholder="DD-MM-YYYY" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This Date of Birth will not be shared publicly.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Your bio here..." className='h-40' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public bio.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>

                            <FormField
                                control={form.control}
                                name="joiningYear"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Joining Year</FormLabel>
                                        <FormControl>
                                            <Input placeholder="2008" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="passingYear"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Joining Year</FormLabel>
                                        <FormControl>
                                            <Input placeholder="2012" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>

                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>

                            <FormField
                                control={form.control}
                                name="accountType"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Account Type</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Private" {...field} className='capitalize' />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="position"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Current Position</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Software Engineer" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This field is public.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <div className='text-lg font-semibold'>Socials</div>
                            <Separator className='h-[0.5px]' />
                        </div>

                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>

                            <FormField
                                control={form.control}
                                name="instagram"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>Instagram</FormLabel>
                                        <FormControl>
                                            <Input placeholder="instagram" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="linkedIn"
                                render={({ field }) => (
                                    <FormItem className='md:w-[49%] w-full'>
                                        <FormLabel>LinkedIn</FormLabel>
                                        <FormControl>
                                            <Input placeholder="LinkedIn" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="snapchat"
                            render={({ field }) => (
                                <FormItem className='md:w-[49%] w-full'>
                                    <FormLabel>Snapchat</FormLabel>
                                    <FormControl>
                                        <Input placeholder="snapchat" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default EditProfile