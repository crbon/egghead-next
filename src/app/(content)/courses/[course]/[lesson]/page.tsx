import {loadLesson} from '@/lib/lessons'
import {loadCourse} from '@/lib/courses'
import {LessonResource} from '@/types'
import {notFound} from 'next/navigation'
import {PlayerTwo} from '@/app/(content)/courses/[course]/[lesson]/Player'
import {Suspense} from 'react'
import PlayerSidebar from './PlayerSidebar'

export default async function LessonPage({
  searchParams,
  params,
}: {
  searchParams: URLSearchParams
  params: {
    lesson: string
    course: string
  }
}) {
  console.log('searchParams', searchParams)
  console.log('params', params)
  const lessonLoader = loadLesson(params.lesson)
  const courseLoader = loadCourse(params.course)

  return (
    <div>
      <Suspense>
        <div className="bg-black w-full lg:grid lg:grid-cols-12 lg:space-y-0 relative">
          <div className="relative before:float-left after:clear-both after:table col-span-9">
            <PlayerTwo
              lessonLoader={lessonLoader}
              courseLoader={courseLoader}
            />
          </div>
        </div>
      </Suspense>
      <LessonHeader lessonLoader={lessonLoader} />
    </div>
  )
}

const LessonHeader = async ({
  lessonLoader,
}: {
  lessonLoader: Promise<LessonResource>
}) => {
  const lesson = await lessonLoader

  if (!lesson) {
    return notFound()
  }

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
    </div>
  )
}
