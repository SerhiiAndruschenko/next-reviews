import { CACHE_TAG_REVIEWS } from "@/lib/reviews";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
    console.log('payload:', payload);
    if(payload.model === 'review') {
        revalidateTag(CACHE_TAG_REVIEWS);
    }
    return new Response(null, { status: 204 })
}