import React, { Component } from 'react'
import { loadDataRequest } from './actions'
import { connect } from 'react-redux';

class Info extends Component {
    render() {
        return (
            <div>
                <p>Info: <span>{this.props.data}</span></p>
                {!this.props.isFetching &&
                    <button onClick={() => this.props.loadData()}>Disparar</button>
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
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadDataRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)