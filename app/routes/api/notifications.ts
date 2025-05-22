
import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import { notifications } from '~/db/schema'
import { eq } from 'drizzle-orm'
import { database } from '~/db'

export const APIRoute = createAPIFileRoute('/api/notifications')({
    GET: async () => {
        const unreadNotifications = await database
          .select()
          .from(notifications)
          .where(eq(notifications.isRead, false))
          .orderBy(notifications.createdAt) // optional: sort by latest first
    
        return json(unreadNotifications)
      },
})