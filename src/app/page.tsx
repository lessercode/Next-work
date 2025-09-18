import ActivityList from '@/components/dashboard/activity-list';
import CategoryChart from '@/components/dashboard/category-chart';
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
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
          <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
              <CardTitle>Category Summary</CardTitle>
              <CardDescription>
                Time spent distribution across categories.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CategoryChart activities={activityData} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
