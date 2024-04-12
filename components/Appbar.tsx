"use client";

import { useRouter } from "next/navigation";

import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Log out
      </button>

      {JSON.stringify(session)}
    </div>
  );
};
