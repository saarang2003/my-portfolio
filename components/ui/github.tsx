/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useCallback, useEffect, useState } from "react";
import ActivityCalendar, { Activity } from "react-activity-calendar";

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
  colorPallete?: string[];
};

async function fetchContributionData(username: string): Promise<Activity[]> {
  // Try the first API endpoint (jogruber's API)
  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);

    console.log("Fetching data for username:", username);
  const url = `https://github-contributions-api.jogruber.de/v4/${username}`;
  console.log("Fetching URL:", url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const responseBody = await response.json();
    console.log("API Response:", responseBody);
    
    // The jogruber API returns data in 'contributions' array
    if (responseBody && responseBody.contributions && Array.isArray(responseBody.contributions)) {
      return responseBody.contributions.map((contribution: any) => ({
        date: contribution.date,
        count: contribution.count,
        level: Math.min(4, contribution.count === 0 ? 0 : Math.ceil(contribution.count / 3)) // Better level calculation
      }));
    }
    
    throw new Error("No contributions data found in response");
  } catch (error) {
    console.log("Primary API failed, trying fallback...", error);
    
    // Fallback: Try the vineet.pro API
    try {
      const response = await fetch(`https://github.vineet.pro/api/${username}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseBody = await response.json();
      console.log("Fallback API Response:", responseBody);
      
      if (responseBody && responseBody.data && Array.isArray(responseBody.data)) {
        return responseBody.data;
      }
      
      throw new Error("No data in fallback response");
    } catch (fallbackError) {
      console.log("Fallback API also failed:", fallbackError);
      
      // Return mock data as last resort
      return generateMockData();
    }
  }
}

// Generate mock data if APIs fail — realistic yearly contributions
function generateMockData(): Activity[] {
  const today = new Date();
  const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
  const activities: Activity[] = [];

  // Generate realistic contribution count per day
  function getRandomCount() {
    const rand = Math.random();
    if (rand < 0.15) return 0;                              // 15% no contributions
    if (rand < 0.50) return Math.floor(Math.random() * 2) + 1;  // 35% light (1-2)
    if (rand < 0.75) return Math.floor(Math.random() * 4) + 3;  // 25% moderate (3-6)
    if (rand < 0.95) return Math.floor(Math.random() * 8) + 7;  // 20% heavy (7-14)
    return Math.floor(Math.random() * 20) + 15;                   // 5% very heavy (15+)
  }

  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const count = getRandomCount();
    activities.push({
      date: d.toISOString().split('T')[0],
      count,
      level: count === 0 ? 0 : Math.min(4, Math.ceil(count / 4)) as 0 | 1 | 2 | 3 | 4,
    });
  }

  return activities;
}

export const GithubGraph = ({
  username,
  blockMargin,
  colorPallete,
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log(`Fetching contributions for username: ${username}`);
      const contributions = await fetchContributionData(username);
      console.log(`Fetched ${contributions.length} contribution records`);
      setContribution(contributions);
    } catch (error) {
      console.error("Error fetching contributions data:", error);
      setError("Failed to load contribution data");
      // Set mock data as fallback
      setContribution(generateMockData());
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const label = {
    totalCount: `{{count}} contributions in the last year`,
  };

  // Debug information
  useEffect(() => {
    if (!loading) {
      console.log("Final contribution data:", contribution.slice(0, 5)); // Log first 5 entries
      console.log("Total entries:", contribution.length);
      console.log("Loading:", loading);
      console.log("Error:", error);
    }
  }, [contribution, loading, error]);

  const darkModePalette = [
    "#121212", // level 0 - very dark (almost background color)
    "#264d26", // level 1 - dark green
    "#3d7a3d", // level 2 - medium green
    "#60b260", // level 3 - lighter green
    "#90ee90", // level 4 - lightest green
  ];

  return (
    <div>
      {error && (
        <div className="text-yellow-400 text-sm mb-2">
          ⚠️ Using demo data - GitHub API temporarily unavailable
        </div>
      )}
      <ActivityCalendar
        data={contribution}
        maxLevel={4}
        blockMargin={blockMargin ?? 2}
        loading={loading}
        labels={label}
        theme={{
          dark: darkModePalette,
        }}
        style={{
          color: '#ffffff',
          backgroundColor: '#121212',
        }}
      />
      {/* Debug info (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-gray-500 mt-2">
          Debug: {contribution.length} days loaded, Loading: {loading.toString()}
        </div>
      )}
    </div>
  );
};
