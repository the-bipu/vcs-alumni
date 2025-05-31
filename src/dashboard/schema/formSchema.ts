import { z } from "zod";

const formSchema = z.object({
    fullName: z.string()
        .trim()
        .min(2, { message: "Full Name must be at least 2 characters." })
        .max(50, { message: "Full Name must not exceed 50 characters." }),

    phone: z.string()
        .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits." }),

    profile: z.string({ message: "Profile must be a valid URL." }).optional(),

    gender: z.enum(["Male", "Female", "Other"], { message: "Invalid gender option." }),

    dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format. Use YYYY-MM-DD." }),

    bio: z.string()
        .max(200, { message: "Bio must not exceed 200 characters." })
        .optional(),

    joiningYear: z.string()
        .regex(/^\d{4}$/, { message: "Joining Year must be a 4-digit year." }),

    passingYear: z.string()
        .regex(/^\d{4}$/, { message: "Passing Year must be a 4-digit year." }),

    accountType: z.string(),

    position: z.string()
        .trim()
        .optional(),

    instagram: z.string()
        .trim()
        .optional(),

    linkedIn: z.string()
        .trim()
        .optional(),

    snapchat: z.string()
        .trim()
        .optional(),
});

export { formSchema };