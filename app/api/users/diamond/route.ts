import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb.js';
import { User } from '@/models/User.js';

export async function GET() {
    try {
        await connectMongo();

        const alumni = await User.find({ userType: "alumni", verified: true });

        if (!alumni.length) {
            return NextResponse.json({ message: 'No verified alumni found' }, { status: 404 });
        }

        return NextResponse.json(alumni, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}