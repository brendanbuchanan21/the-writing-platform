import { useQuery } from '@tanstack/react-query';

type Notification = {
  id: string;
  title: string;
  timestamp: string;
  icon: string;
  imageId?: string;
};

async function fetchNotifications(): Promise<Notification[]> {
  const res = await fetch('/api/notifications');
  if (!res.ok) throw new Error('Failed to fetch notifications');
  return res.json();
}

export function useNotifications() {
  return useQuery({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    refetchInterval: 60000, // 60 seconds
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
}
