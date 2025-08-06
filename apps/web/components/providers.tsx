"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import * as React from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

/**
 * Wraps child components with the ConvexProvider to enable Convex backend integration within the React component tree.
 *
 * @param children - The React nodes to be rendered within the ConvexProvider context
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
