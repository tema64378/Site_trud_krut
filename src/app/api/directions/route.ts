import { NextResponse } from "next/server";
import { directions } from "@/content/site";

export function GET() {
  return NextResponse.json(directions);
}
