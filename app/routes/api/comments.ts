import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import { comments, notifications } from '~/db/schema'
import { database } from '~/db'
import { eq } from 'drizzle-orm'

export const APIRoute = createAPIFileRoute('/api/comments')({
  POST: async ({ request }) => {
    try {
      const { chapterId, userId, content } = await request.json()

      // Basic validation
      if (!chapterId || !userId || !content) {
        return json({ error: 'Missing fields' }, { status: 400 })
      }

      // Insert new comment
      const [newComment] = await database
        .insert(comments)
        .values({
          chapterId,
          userId,
          content,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .returning() // returns the inserted row(s)

      // Create a notification for this comment (notify the user who owns the chapter or yourself)
      // Adjust the userId in notification accordingly (e.g., notify chapter owner or the user themselves)
      await database.insert(notifications).values({
        userId: userId, // or whoever should be notified
        commentId: newComment.id,
        isRead: false,
        icon: 'comment',
        createdAt: new Date(),
      })

      return json({ comment: newComment }, { status: 201 })
    } catch (error) {
      console.error('Error creating comment:', error)
      return json({ error: 'Internal server error' }, { status: 500 })
    }
  },
})
