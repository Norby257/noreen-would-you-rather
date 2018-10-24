import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
class QuestionsDashboard extends Component {
    render() {
        
        return (
            <div>
                <h3 className ='center'> Your Questions </h3>
                <ul className='dashboard-list'>
                {this.props.QuestionIds.map((id)=> (
                    <li key={id}>
                        <Question id ={id} />
                    </li>

                ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({questions}) {
   return {
       QuestionIds: Object.keys(questions)
       .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
   }
}

export default connect(mapStateToProps) (QuestionsDashboard);