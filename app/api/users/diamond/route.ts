import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/mongodb.js';
import { User } from '@/models/User.js';

export async function GET(request: NextRequest) {
    try {
        await connectMongo();

        const alumni = await User.find({ joiningYear: "2008" });

        if (!alumni.length) {
            return NextResponse.json({ message: 'No alumni found for joiningYear 2008' }, { status: 404 });
        }

        return NextResponse.json(alumni, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}