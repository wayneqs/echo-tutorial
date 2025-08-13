"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.create);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Authenticated>
          <p>apps/web</p>
          <Button onClick={() => addUser()}>Add</Button>

          <p className="text-green-500">You are authenticated!</p>
          <div className="max-w-sm w-full mx-auto">
            {JSON.stringify(users, null, 2)}
          </div>
          <div>
            <UserButton />
          </div>
        </Authenticated>
        <Unauthenticated>
          <p className="text-red-500">You are not authenticated!</p>
          <SignInButton />
        </Unauthenticated>
      </div>
    </>
  );
}
