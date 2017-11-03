import React, { Component, PropTypes } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';
import axios from 'axios'


class Table2 extends Component {
    constructor() {
        super();
        this.state = {
            all_info: [],
            data: []
        }
    }
    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'

        }

    }
    componentDidMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'

        } else {
        axios.get(`api/company/analytics/table/${this.props.user.user_company}`).then(res => {
            console.log("DATAAAA:", res.data)
            this.setState({
                all_info: res.data
            })
        })
    }
}

    getCompletedTasks(user) {
        console.log("USER", user)
        var q = 0;
        this.props.user_tasks.map((e, i) => {
            if(e.task_user_1 === user && e.task_completed === true){
                q++
            }
        })
        return q
    }

    getAllTasks(user){
        console.log("USER", user)
        var x = 0;
        this.props.user_tasks.map((e, i) => {
            if(e.task_user_1 === user){
                x++
            }
        })
        return x
    }

    //{name: 'Page A', uv: 4000, pv: 2400, amt: 2400}
    getChartData() {
        var x = this.state.all_info
        var finalData = []
        var newData;
        var compUser = this.props.company_users


        this.props.company_users.map((user, i)=>{
            let firstNames = user.user_firstname
            let b = {name: firstNames,
                    count: 0}
            
            
            for (let i = 0; i < this.state.all_info.length; i++){
                if(this.state.all_info[i].task_user_1 === user.user_id){
                    b.count++
                }
            }
            finalData.push(b)
            })
                     
                   
            //     }
            // }
            console.log("FINALLL YOOOOOO",finalData)
       

        return finalData
        }

    

    render() {
            return (
            < div >
                {this.getChartData}
                <LineChart width={725} height={375} data={this.getChartData()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line strokeWidth={2} type="monotone"  name="Completed Tasks" dataKey="count" stroke="#da863d" />
                    <YAxis />
                    <XAxis dataKey="name" />
                    {<Tooltip />}
                    <Legend />
                </LineChart>
            </div >
        )

    }
}



function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Table2)