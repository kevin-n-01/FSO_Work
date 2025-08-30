const Header = ({course}) => {
  console.log(course);
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <div>
      <Part name={part1} numExercises={exercises1} />
      <Part name={part2} numExercises={exercises2} />
      <Part name={part3} numExercises={exercises3} />
    </div>
  )
}

const Part = (coursePart) => {
  return (
    <div>
      <p>Course: {coursePart.name} # of Exercises: {coursePart.numExercises}</p>
    </div>
  )
}

const Footer = ({exercises1, exercises2, exercises3}) => {
  return (
    <div>
      <p>Total number of exercises: {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Footer 
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )

}
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

export default App