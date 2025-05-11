import { useCallback, useEffect, useState } from "react";
import ActivityCalendar, { Activity } from "react-activity-calendar";

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
  colorPallete?: string[];
};

async function fetchContributionData(username: string): Promise<Activity[]> {
  let response = await fetch(`https://github.vineet.pro/api/${username}`);
  let responseBody = await response.json();

  if (!response.ok) {
    throw Error("Erroring fetching contribution data");
  }
  return responseBody.data;
}

export const GithubGraph = ({
  username,
  blockMargin,
  colorPallete,
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contribution);
    } catch (error) {
      throw Error("Error fetching contributions data");
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

  return (
    <>
      <ActivityCalendar
        data={contribution}
        maxLevel={4}
        blockMargin={blockMargin ?? 2}
        loading={loading}
        labels={label}
        theme={{
          dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        }}
      />
    </>
  );
};
