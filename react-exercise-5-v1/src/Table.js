import {useState} from "react"
function Table({ mentors }) {
  const [valid, setValid] = useState(true)
  return (
 <div>
    {valid && <button onClick={()=> setValid(false)}>Refresh</button>}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>House</th>
          <th>Email</th>
        </tr>
      </thead>
        <tbody>
          {valid ? (
            <tr>
              <td>Data not available</td>
              <td>Data not available</td>
              <td>Data not available</td>
            </tr>
          ) : (
              mentors.map((el, index) => (
                <tr style={{ 
                  background: index%2 === 0 ?  "lightCyan" : "white",
                }}
                  key={index}
                >
                  <td>{el.name}</td>
                  <td>{el.house}</td>
                  <td>{el.email}</td>
                  
                </tr>
              ))
          )
          }
    </tbody>
      </table>
      </div>
  );
}

export default Table;
