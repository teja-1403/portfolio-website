"use client";

import { useEffect, useState } from "react";
import { BarChart3, Eye, Users, X } from "lucide-react";

interface AnalyticsData {
  visitors: number;
  pageViews: number;
}

export default function PortfolioStats() {
  const [isOpen, setIsOpen] = useState(false);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const openStats = async () => {
    setIsOpen(true);

    // Don't fetch again if we already have the data.
    if (analytics) {
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/analytics", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch analytics");
      }

      const data = await response.json();

      setAnalytics({
        visitors: data.visitors ?? 0,
        pageViews: data.pageViews ?? 0,
      });
    } catch (error) {
      console.error("Failed to load portfolio analytics:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const closeStats = () => {
    setIsOpen(false);
  };

  // Close the modal when Escape is pressed.
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeStats();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Portfolio Stats Button */}
      <button
        type="button"
        onClick={openStats}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-4 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800"
        aria-label="View portfolio statistics"
      >
        <BarChart3 className="h-4 w-4" />
        <span>Portfolio Stats</span>
      </button>

      {/* Analytics Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closeStats}
          role="presentation"
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-zinc-700 bg-zinc-900 p-6 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-stats-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeStats}
              className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              aria-label="Close portfolio statistics"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="mb-2 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-400" />

                <h2
                  id="portfolio-stats-title"
                  className="text-xl font-semibold"
                >
                  Portfolio Stats
                </h2>
              </div>

              <p className="text-sm text-zinc-400">
                Website traffic statistics powered by Vercel Analytics.
              </p>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex min-h-32 items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-6 w-6 animate-spin rounded-full border-2 border-zinc-600 border-t-white" />

                  <p className="text-sm text-zinc-400">Loading statistics...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="flex min-h-32 items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-red-400">
                    Unable to load statistics right now.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setAnalytics(null);
                      openStats();
                    }}
                    className="mt-3 text-sm text-purple-400 hover:text-purple-300"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}

            {/* Analytics Data */}
            {analytics && !loading && !error && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  {/* Visitors */}
                  <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 text-center">
                    <Users className="mx-auto mb-3 h-6 w-6 text-purple-400" />

                    <p className="text-3xl font-bold">
                      {analytics.visitors.toLocaleString()}
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">Visitors</p>
                  </div>

                  {/* Page Views */}
                  <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 text-center">
                    <Eye className="mx-auto mb-3 h-6 w-6 text-pink-400" />

                    <p className="text-3xl font-bold">
                      {analytics.pageViews.toLocaleString()}
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">Page Views</p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                  <p className="text-center text-xs leading-relaxed text-zinc-500">
                    These statistics are aggregated from Vercel Web Analytics.
                    No personally identifiable visitor information is shown.
                  </p>
                </div>
              </>
            )}

            {/* Modal Footer */}
            {!loading && (
              <p className="mt-5 text-center text-xs text-zinc-600">
                Updated from Vercel Analytics
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
