import { NextResponse } from "next/server";
import { allNews } from "@/content/site";

export function GET() {
  return NextResponse.json(allNews);
}
