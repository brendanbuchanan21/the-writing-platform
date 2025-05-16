import { createFileRoute } from '@tanstack/react-router'
import { Adminpage } from '~/components/ui/admin-page'

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <Adminpage />
    </>
  )
}
