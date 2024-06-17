import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import GsapTo from '@/pages/example/gsap/to.tsx'
import GsapFrom from '@/pages/example/gsap/from.tsx'
import GsapFromTo from '@/pages/example/gsap/from-to.tsx'
import GsapTimeline from '@/pages/example/gsap/timeline.tsx'
import GsapStagger from '@/pages/example/gsap/stagger.tsx'
import GsapScrollTrigger from '@/pages/example/gsap/scroll-trigger.tsx'
import GsapText from '@/pages/example/gsap/text.tsx'

const router = createBrowserRouter([
  {
    path: '/example',
    element: <Outlet />,
    children: [
      {
        path: 'gsap',
        element: <Outlet />,
        children: [
          {
            path: 'to',
            element: <GsapTo />,
          },
          {
            path: 'from',
            element: <GsapFrom />,
          },
          {
            path: 'from-to',
            element: <GsapFromTo />,
          },
          {
            path: 'timeline',
            element: <GsapTimeline />,
          },
          {
            path: 'stagger',
            element: <GsapStagger />,
          },
          {
            path: 'scroll-trigger',
            element: <GsapScrollTrigger />,
          },
          {
            path: 'text',
            element: <GsapText />,
          },
        ],
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
