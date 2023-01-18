const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  const firstName = name.split(" ")
  return (
    <div>
      <p className="fullName">
        Name: {name}
       </p>
      <p className="firstName">
        First name: {firstName[0]}
      </p>
      <p className="status">
        Status: {
          isStudent ? "Student" : "Not student"
       }
      </p>

    </div>
   

  )
}

export default App;
export { Student };
