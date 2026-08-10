import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;

  if (!token || !projectId || !teamId) {
    return NextResponse.json(
      { error: "Analytics configuration is missing." },
      { status: 500 },
    );
  }

  try {
    const url = new URL(
      "https://api.vercel.com/v1/query/web-analytics/visits/count",
    );

    url.searchParams.set("teamId", teamId);
    url.searchParams.set("projectId", projectId);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Vercel Analytics API error:", errorText);

      return NextResponse.json(
        { error: "Failed to fetch analytics." },
        { status: response.status },
      );
    }

    const result = await response.json();

    return NextResponse.json({
      visitors: result.data?.visitors ?? 0,
      pageViews: result.data?.pageviews ?? 0,
    });
  } catch (error) {
    console.error("Analytics API error:", error);

    return NextResponse.json(
      { error: "Failed to fetch analytics." },
      { status: 500 },
    );
  }
}
