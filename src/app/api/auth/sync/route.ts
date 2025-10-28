import APIResponseHandler from "@/library/APIResponseHandler";
import { prisma } from "@/library/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();
  // console.log("user:", user);

  // fields
  const clerkId = user?.id;
  const username = user?.username ?? null;
  const email = user?.primaryEmailAddress?.emailAddress ?? null;
  const firstName = user?.firstName ?? null;
  const lastName = user?.lastName ?? null;
  const fullName = user?.fullName ?? null;
  const imageUrl = user?.imageUrl ?? null;
  const provider = user?.externalAccounts?.[0]?.provider ?? null;
  const providerId = user?.externalAccounts?.[0]?.externalId ?? null;
  const lastSignIn = user?.lastSignInAt ? new Date(user.lastSignInAt) : null;

  // console.log("clerkId:", clerkId);
  // console.log("username:", username);
  // console.log("email:", email);
  // console.log("firstName:", firstName);
  // console.log("lastName:", lastName);
  // console.log("fullName:", fullName);
  // console.log("imageUrl:", imageUrl);
  // console.log("provider:", provider);
  // console.log("lastSignIn:", lastSignIn);

  if (!user || !email || !clerkId) {
    return APIResponseHandler.HTTP_404_NOT_FOUND(req, "User not found", null);
  }

  try {
    const dbUser = await prisma.user.upsert({
      where: { clerkId },
      update: {
        username,
        email,
        firstName,
        lastName,
        fullName,
        imageUrl,
        provider,
        providerId: providerId, 
        lastSignIn,
      },
      create: {
        clerkId,
        username,
        email,
        firstName,
        lastName,
        fullName,
        imageUrl,
        provider,
        providerId: providerId,
        lastSignIn,
      },
    });


    // console.log("dbUser:", dbUser);

    return APIResponseHandler.HTTP_200_OK(
      req,
      "User synced successfully",
      dbUser
    );
  } catch (error) {
    console.error("Sync error:", error);
    return APIResponseHandler.HTTP_500_INTERNAL_SERVER_ERROR(
      req,
      "Failed to sync user",
      null
    );
  }
}

export async function GET(req: NextRequest) {
  // current user
  const user = await currentUser();
  console.log("GET current user:", user);

  try {
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user?.id },
      include: { 
        payment: true,
       },
    });

    console.log("Current dbUser:", dbUser);

    return APIResponseHandler.HTTP_200_OK(req, "User found", dbUser);
  } catch (error) {
    console.error("Sync error:", error);
    return APIResponseHandler.HTTP_500_INTERNAL_SERVER_ERROR(
      req,
      "Failed to sync user",
      null
    );
  }
}