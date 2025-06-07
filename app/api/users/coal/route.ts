import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb.js';
import { User } from '@/models/User.js';

export async function GET() {
    try {
        await connectMongo();

        const alumni = await User.find({ userType: "alumni", verified: false });

        if (!alumni.length) {
            return NextResponse.json({ message: 'No Unverified alumni found!' }, { status: 404 });
        }

        return NextResponse.json(alumni, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}