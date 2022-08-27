import React from 'react'

class Controlledforms extends React.Component {
    constructor(){
      super();
      this.state={
       firstName :'',
       lastName :'',
       email : '',
       gender :'',
       courses :'React',
       errors: {
        firstName :'',
       lastName :'',
       email : '',
       gender :'',
       },
       
      };
    }
    
    handleSubmit = (e) =>{
      e.preventDefault();
      var errKeys = Object.keys(this.state).filter((key) => {
        if (this.state[key] === '' && key != 'errors') {
          return key;
        }
      });
      if (errKeys.length >= 1) {
        console.error('Please fill all fields');
      } else {
        console.log(this.state);
      }
    };
  
    handleChange = (e) => {
      var errors = { ...this.state.errors };
  
      if (e.target.value === '') {
        errors[e.target.name] = `${e.target.name} is Required`;
      } else {
        errors[e.target.name] = '';
      }
  
      // First way to update object of object
      this.setState({ errors, [e.target.name]: e.target.value });
  
      // Second way to update object of object
      // this.setState({
      //   errors: { [e.target.name]: 'Required', lastName: 'Required' },
      //   gender: 'female',
      // });
  
      console.log(this.state);
    };
  render() {
    return (
        <>
        <h3>User form</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>First Name: </label>
            <input type="text" 
              name="firstName" 
              value={this.state.firstName}
              onChange={(e) => 
                this.handleChange(e)
             }
            />
           <br />
            <span style={{ color: 'red' }}> {this.state.errors.firstName} </span>
            </div><br/>
            <br/>
            <div>
            <label>Last Name:</label>
            <input type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={(e) => 
                this.handleChange(e)
              }
            />
            <br />
            <span style={{ color: 'red' }}> {this.state.errors.lastName} </span>
            </div>
            <br/>

             <div>
            <label>Email:</label>
            <input type="email" 
              name="email" 
              value={this.state.email}
              onChange={(e) => 
                this.handleChange(e)
      
              } 
            />
            <br />
            <span style={{ color: 'red' }}> {this.state.errors.email} </span>
            </div>
            <br/>
             <div>
            <label>Gender:</label>
            <input type="radio" 
              name="gender"
              value="male"
              onChange={(e) => 
                this.handleChange(e)
              }
              />Male
            
            <input type="radio"
              name="gender"
              value="female"
              onChange={(e) => 
                this.handleChange(e)
              }
              />Female
            <br/>
            <br/>
            </div>
            <div>
            <label>Courses:</label>
            <select name="courses"
              value={this.state.courses}
              onChange={(e) => 
                this.handleChange(e)
              }
              >
            <option value="react"> React </option>
              <option value="node"> Node </option>
              <option value="mysql"> MySQL </option>
              <option value="mongo"> Mongo </option>
            </select>
            <br/></div>
            <br/>
            
            <button type="submit"  >Submit</button>
            &nbsp; &nbsp; 
            <button type="rest" >Rest</button>


        </form>
        </>
    )
  }
}
export default Controlledforms;