import type { WebsiteActivity } from '@/lib/types';
import { formatTime } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CategoryIcon } from '../category-icon';
import { Badge } from '../ui/badge';

interface ActivityListProps {
  activities: WebsiteActivity[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Website</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Time Spent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={activity.faviconUrl}
                      alt={`${activity.domain} favicon`}
                    />
                    <AvatarFallback>
                      {activity.domain.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{activity.domain}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className="flex w-fit items-center gap-2"
                >
                  <CategoryIcon category={activity.category} className="h-4 w-4" />
                  <span>{activity.category}</span>
                </Badge>
              </TableCell>
              <TableCell className="text-right font-mono">
                {formatTime(activity.timeSpent)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
