import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, source = "landing_page" } = await request.json();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscription = await prisma.subscription.findUnique({
      where: { email },
    });

    if (existingSubscription) {
      if (existingSubscription.status === "unsubscribed") {
        // If they're resubscribing, update their status
        await prisma.subscription.update({
          where: { email },
          data: { status: "active" },
        });
        
        return NextResponse.json(
          { message: "Email subscription renewed" },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 200 }
      );
    }

    // Create new subscription
    await prisma.subscription.create({
      data: {
        email,
        status: "active",
        source,
      },
    });

    // TODO: In a real app, you would send a welcome email here
    // using your preferred email service (SendGrid, Mailchimp, etc.)

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
} 