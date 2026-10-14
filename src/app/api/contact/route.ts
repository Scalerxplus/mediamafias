import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Insert the form data into the 'leads' table in Supabase if configured
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { error } = await supabaseAdmin
        .from('leads')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
            experience: data.experience,
            linkedin: data.linkedin,
            source: data.source || "Website Form",
            raw_data: data // Store all data in a JSONB column just in case fields change
          }
        ]);

      if (error) {
        console.error("Supabase Insertion Error:", error);
        throw new Error(error.message);
      }
    } else {
      console.log("Contact form submission received (Supabase not configured):", data);
    }

    return NextResponse.json({ success: true, message: "Transmission received and secured in database." }, { status: 200 });
  } catch (error) {
    console.error("Transmission failed:", error);
    return NextResponse.json({ success: false, error: "Transmission failed." }, { status: 500 });
  }
}
