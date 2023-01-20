
import Male from "../Images/male.jpg"
import Female from "../Images/female.png"

const Employees = ({employees, selectTeam, handleEmployeeCardClick, handleTeamSelection}) => {
    
  return (
    <main className="container">
        <div className="row justify-content-center">
            <div className="col-6">
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={selectTeam} onChange={handleTeamSelection}>
                    <option value="Team_A">Team_A</option>
                    <option value="Team_B">Team_B</option>
                    <option value="Team_C">Team_C</option>
                    <option value="Team_D">Team_D</option>
                </select>

            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-8">
                <div className="card-collections">
                    { employees.map(employee => {
                        return (
                            <div key={employee.id} className={employee.teamTitle === selectTeam ? "card my-3 shadow bg-body-tertiary rounded exceptional" : "card my-3 shadow bg-body-tertiary rounded"} id={employee.id} onClick={handleEmployeeCardClick}>
                                { employee.gender === "Male" ? <img src={Male} className="card-img-top" alt="..." /> 
                                 : 
                                  <img src={Female} className="card-img-top" alt="..." />
                                }
                                <div className="card-body">
                                    <p className="card-text">Full Name: {employee.fullName}</p>
                                    <p className="card-text">Designation: {employee.designation}</p>
                                </div>
                            </div>
                        )
                    
                    })
                    }
                </div>
            </div>
        </div>
    </main>
  )
}

export default Employees
