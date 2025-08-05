import { mutation, query } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const create = mutation({
  args: {},
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("users", { name: "Wayner" });

    return userId;
  },
});
