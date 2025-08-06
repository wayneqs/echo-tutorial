"use client";

import { api } from "@workspace/backend/_generated/api";
import { useQuery } from "convex/react";

/**
 * Displays a list of users fetched from the API in a formatted JSON view.
 *
 * Renders a centered layout with a label and the user data retrieved via a query hook.
 */
export default function Page() {
  const users = useQuery(api.users.getMany);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/widget</p>
      <div className="max-w-sm w-full mx-auto">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  );
}
