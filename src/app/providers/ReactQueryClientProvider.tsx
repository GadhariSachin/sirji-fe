"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface ReactQueryClientProviderPropsInterface {
  children: React.ReactNode;
}

function ReactQueryClientProvider({
  children,
}: ReactQueryClientProviderPropsInterface) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryClientProvider;
