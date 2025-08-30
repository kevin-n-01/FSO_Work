const Header = ({course}) => {
  console.log(course);
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <div>
      <Part name={part1.name} numExercises={part1.exercises} />
      <Part name={part2.name} numExercises={part2.exercises} />
      <Part name={part3.name} numExercises={part3.exercises} />
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

const Footer = ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <div>
      <p>Total number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content 
        parts={course.parts}
      />
      <Footer 
        parts={course.parts}
      />
    </div>
  )

}

export default App