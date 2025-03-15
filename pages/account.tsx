'use client';

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { UserContext } from '@/context/userContext';
import { CrossIcon, PenBoxIcon } from 'lucide-react';
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
import Navbar from '@/src/common/Navbar';
import Footer from '@/src/common/Footer';

const formSchema = z.object({
    fullName: z.string().min(2).max(50),
    phone: z.string().min(10).max(15),
    profile: z.string().optional(),
    gender: z.enum(["Male", "Female", "Other"]),
    dob: z.string(),
    bio: z.string().max(200).optional(),
    joiningYear: z.string(),
    passingYear: z.string(),
    accountType: z.string(),
    position: z.string().optional(),
    instagram: z.string().url().optional(),
    linkedIn: z.string().url().optional(),
    snapchat: z.string().optional(),
});

export default function Account() {
    const router = useRouter();
    const [publicId, setPublicId] = useState("");

    const { setActiveTab, userData, authenticated } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);

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
            phone: userData?.phone || "",
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
        console.log("Submitting:", values);

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
            console.log("User updated:", updatedUser);
            reset();

        } catch (error: any) {
            console.error("Error updating user:", error.message);
        }
    }

    return (
        <div className='bg-white'>

            <Head>
                <link rel="icon" href="/favicon.ico" type="image/ico" sizes="70x70" />
                <title>Account | Vaishali Central School Alumni</title>
                <meta name="description" content="Log in to your Vaishali Central School alumni account to stay connected, update your profile, and engage with the alumni community." />
                <meta name="keywords" content="Vaishali Central School login, alumni login, student portal, sign in, school alumni network" />
                <meta name="author" content="vcs-alumni.vercel.app" />

                <meta property="og:title" content="Login | Vaishali Central School" />
                <meta property="og:description" content="Access your Vaishali Central School alumni account. Log in to connect with batchmates, manage your profile, and stay updated on alumni events." />
                <meta property="og:image" content="/logo/og-vcs.png" />
                <meta property="og:url" content="https://vcs-alumni.vercel.app/account" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Login | Vaishali Central School" />
                <meta name="twitter:description" content="Sign in to your Vaishali Central School alumni account and stay connected with your school community." />
                <meta name="twitter:image" content="/logo/og-vcs.png" />
            </Head>

            <Navbar />

            <div className='w-full h-auto flex flex-col gap-6 items-center justify-center'>

                <div className='w-full h-auto flex flex-col items-center justify-center border-b border-b-[#acacac]'>

                    <div className='flex flex-col gap-8 w-full h-auto items-center justify-center py-20'>
                        <div className='md:w-10/12 w-11/12 h-auto flex md:flex-row flex-col items-center justify-center gap-8'>

                            {isEditing ? (
                                <div className='w-full h-auto flex md:flex-row flex-col gap-10 md:items-start items-center justify-start'>

                                    <div className='min-w-96 flex flex-col gap-4'>
                                        {publicId ? (
                                            <CldImage src={publicId} alt={publicId} width={384} height={384} />
                                        ) : (
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_URL}${userData?.profile}.png`}
                                                alt='profile'
                                                width={384}
                                                height={384}
                                                priority={true}
                                                className='w-96 h-96 object-cover border-4 border-white shadow'
                                            />
                                        )}
                                        <CldUploadWidget uploadPreset="r79meffi" onSuccess={({ event, info }) => {
                                            if (event === 'success' && typeof info === "object" && info !== null) {
                                                setPublicId(info?.public_id);
                                            }
                                        }}>
                                            {({ open }) => {
                                                return (
                                                    <Button onClick={() => open()}>
                                                        <FaUpload /> Upload an Image
                                                    </Button>
                                                );
                                            }}
                                        </CldUploadWidget>
                                    </div>

                                    <div className='flex flex-col w-full'>
                                        <div className='flex w-full flex-row items-center justify-between mb-4'>
                                            <h2 className='md:text-4xl text-xl font-bold text-[#353535]'>Update Account</h2>
                                            <CrossIcon onClick={() => setIsEditing(!isEditing)} className='cursor-pointer rotate-45' />
                                        </div>

                                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Email</Label>
                                                <Input defaultValue={userData?.email} disabled />
                                            </div>

                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>User Type</Label>
                                                <Input defaultValue={userData?.userType} className='capitalize' disabled />
                                            </div>
                                        </div>

                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">

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
                                                        <FormItem>
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
                            ) : (
                                <div className='w-full h-auto flex md:flex-row flex-col gap-10 items-start justify-start'>
                                    <div className='flex flex-col gap-4 md:min-w-96 min-w-full'>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_URL}${userData?.profile}.png`}
                                            alt='profile'
                                            width={384}
                                            height={384}
                                            priority={true}
                                            className='w-96 h-96 object-cover border-4 border-white shadow'
                                        />
                                        <div className='w-full md:flex hidden flex-col items-center justify-between gap-4'>
                                            <div className='flex flex-col gap-2 w-full'>
                                                <Label className='text-base'>Full Name</Label>
                                                <Input defaultValue={userData?.fullName} disabled />
                                            </div>

                                            <div className='flex flex-col gap-2 w-full'>
                                                <Label className='text-base'>Phone Number</Label>
                                                <Input defaultValue={userData?.phone} className='capitalize' disabled />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-full gap-4'>
                                        <div className='flex w-full flex-row items-center justify-between mb-2'>
                                            <h2 className='md:text-4xl text-xl font-bold text-[#353535]'>Account Details</h2>
                                            <PenBoxIcon onClick={() => setIsEditing(!isEditing)} className='cursor-pointer' />
                                        </div>
                                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Email</Label>
                                                <Input defaultValue={userData?.email} disabled />
                                            </div>

                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>User Type</Label>
                                                <Input defaultValue={userData?.userType} className='capitalize' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full md:hidden flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Full Name</Label>
                                                <Input defaultValue={userData?.fullName} disabled />
                                            </div>

                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Phone Number</Label>
                                                <Input defaultValue={userData?.phone} className='capitalize' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Gender</Label>
                                                <Input defaultValue={userData?.gender} disabled />
                                            </div>

                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Date of Birth</Label>
                                                <Input defaultValue={formattedDate} className='capitalize' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Joining Year</Label>
                                                <Input defaultValue={userData?.joiningYear} disabled />
                                            </div>

                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Passing Year</Label>
                                                <Input defaultValue={userData?.passingYear} className='capitalize' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Account Type</Label>
                                                <Input defaultValue={userData?.accountType} disabled />
                                            </div>

                                            <div className='flex flex-col gap-2 md:w-[49%] w-full'>
                                                <Label className='text-base'>Position</Label>
                                                <Input defaultValue={userData?.position} className='capitalize' disabled />
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-row flex-wrap items-center justify-between md:gap-0 gap-4'>
                                            <div className='flex flex-col gap-2 w-full'>
                                                <Label className='text-base'>Bio</Label>
                                                <Textarea defaultValue={userData?.bio} className='min-h-32' disabled />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    );
}