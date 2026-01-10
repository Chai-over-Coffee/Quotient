import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    // Users table to store user profiles
    users: defineTable({
        name: v.string(),
        tokenIdentifier: v.string(), // Clerk user ID for auth
        email: v.string(),
        imageUrl: v.optional(v.string()),

        // Onboarding
        hasCompletedOnboarding: v.boolean(),

        location: v.optional(
            v.object({
                city: v.string(),
                state: v.optional(v.string()),
                country: v.string(),
            })
        ),
        interests: v.optional(v.array(v.string())), // Minimum 3 interests(categories)

        // Organizer tracking (User Subscription)
        freeEventsCreated: v.number(), // Track free event limit (1 free)

        // Timestamps
        createdAt: v.number(),
        updatedAt: v.number(),
    }).index("by_token", ["tokenIdentifier"]),
})