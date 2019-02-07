import React, { Component } from 'react'
import { loadUARequest } from './actions'
import { connect } from 'react-redux';

class UserAgent extends Component {
    render() {
        return (
            <div>
                <p>UserAgent: <span>{this.props.data}</span></p>
                {!this.props.isFetching &&
                    <button onClick={() => this.props.loadData()}>Load Agent</button>
                }
                {this.props.isFetching &&
                    <span>Loading...</span>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadUARequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)