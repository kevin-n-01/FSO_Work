const Header = ({course}) => {
    console.log(course);
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
}
  
const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} name={part.name} numExercises={part.exercises} />)}
      </div>
    )
}
  
const Part = (coursePart) => {
    return (
      <div>
        <p>Course: {coursePart.name} {coursePart.numExercises}</p>
      </div>
    )
}
  
const Footer = ({parts}) => {
    return (
      <div>
        <strong>total of {parts.reduce((acc , curr) => acc + curr.exercises, 0)} exercises</strong>
      </div>
    )
}
  
const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Footer parts={course.parts} />
      </div>
    )
}

export default Course