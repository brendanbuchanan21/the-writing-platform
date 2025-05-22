import { createFileRoute } from '@tanstack/react-router'
import { Adminpage } from '~/components/ui/notification-page'

export const Route = createFileRoute('/admin/notifications')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Adminpage />
}
