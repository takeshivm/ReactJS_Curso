import axios from 'axios';
import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date()
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data.map(user => user.username) });
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value)
    }

    onChangeDate = date => {
        this.setState({ date });
    }

  render() {
    return (
        <div className='coll-md-6 offset-md-3'>
            <div className="card card-body">
                <h3>Create a note</h3>

                {/** SELECT USER */}
                <div className="form-group">
                    <select className='form-control'
                        name="userSelected"
                        id=""
                        onChange={this.onInputChange}
                    >
                        {
                            this.state.users.map(user =>
                            <option key={user} value={user}>
                                {user}
                            </option>)
                        }
                    </select>
                </div>

                {/** UNPUT USER */}
                <div className="form-group">
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Title'
                        name='Title'
                        required
                        onChange={this.onInputChange}
                    />
                </div>

                {/** UNPUT USER */}
                <div className="form-group">
                    <textarea
                        name='Content'
                        className='form-control'
                        placeholder='Content'
                        required
                        onChange={this.onInputChange}
                    >
                        
                    </textarea>
                </div>

                {/** DATE */}
                <div className="form-group">
                    <DatePicker
                        className='form-control'
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                    />
                </div>

                <form onSubmit={this.onSubmit}>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
  }
}
