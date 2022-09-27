import React from 'react'
import FeedDetails from './FeedDetails';
import './Styling.css';

class Form extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            name: '',
            dept: '',
            rate: '',
            users:[],
            divHandler:true,
        }
    }

    handleChange = (event) => {
        const { name , value } = event.target;
        this.setState({[name] : value })
    }

    handleSubmit = (e) => {
        const updateUsers = this.state.users;
        updateUsers.push({
            name: this.state.name,
            dept: this.state.dept,
            rate: this.state.rate,
            
        })

        this.setState({
            users:updateUsers,
            name: '',
            dept: '', 
            rate: '',
            divHandler: !this.state.divHandler
        })

        e.preventDefault();
    }

    handleBack = () => {
        this.setState({
            divHandler: !this.state.divHandler
        })
    } 

  render() {
    return (
        <>
        {
            
            this.state.divHandler   ?
            <div>
                <h1 className="feedHeading">EMPLOYEE FEEDBACK FORM</h1>
                <form>
                    <div className="formElem">
                        <label htmlFor="name">Name : </label>
                        <input type="text" name='name' value={this.state.name} onChange={this.handleChange} required/>
                    </div>
                    <div className="formElem">
                        <label htmlFor="dept">Department : </label>
                        <input type="text" name='dept' value={this.state.dept} onChange={this.handleChange}/>
                    </div>
                    <div className="formElem">
                        <label htmlFor="rate">Rating : </label>
                        <input type="number" name='rate' value={this.state.rate} onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
             :
            <div className='secondPage'>
                <h1 className='feedHeading'>EMPLOYEE DETAILS LIST</h1>
                <div className="detailsContainer">
                    <FeedDetails users={this.state.users}/>
                </div> 
                <button onClick={this.handleBack}>Back</button>
            </div>
        }
      </>
    )
  }
}

export default Form
