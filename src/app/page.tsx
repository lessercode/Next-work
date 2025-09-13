import ActivityList from '@/components/dashboard/activity-list';
import Header from '@/components/layout/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { mockActivity } from '@/lib/mock-data';

export default function Home() {
  const activityData = mockActivity;

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Web Activity</CardTitle>
            <CardDescription>
              A summary of the time you've spent on different websites today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ActivityList activities={activityData} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
