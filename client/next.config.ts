import type { NextConfig } from "next";

const isDev = process.argv.includes("dev");

export default async function config(): Promise<NextConfig> {
  if (!process.env.VELITE_STARTED) {
    process.env.VELITE_STARTED = "1";
    const { build } = await import("velite");
    await build({ watch: isDev, clean: !isDev });
  }

  return {
    /* config options here */
  };
}
