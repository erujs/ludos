import React, { Component } from 'react';
import { Button} from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            description: null
        }
    }

    deleteHandler = (id) => {
        console.log(id)
    }

    render() {
        return (
            <Button size="small" color="primary" onClick={this.deleteHandler(this.props.id)}>
                Delete
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddData: (data) => dispatch(actions.postData(data))
    }
}

export default connect(null, mapDispatchToProps)(Delete);

