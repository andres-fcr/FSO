import React from 'react'

const Module = ({ course }) => {

  const { parts } = course
  const total = parts.reduce((acc, { exercises }) => acc + exercises, 0)

  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {
          parts.map(part =>
            <li key={part.id}>
              {part.name}: {part.exercises}
            </li>
          )
        }
      </ul>
      <h2>Total of {total} exercises</h2>
    </div>
  )
}

const Course = ({ courses }) => {
  return (
    <>
      {
        courses.map((course, i) =>
          <Module key={i} course={course}/>
      )
      }
    </>
  )
}

export default Course