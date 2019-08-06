import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUser } from '../actions/index';
import ProjectList from './projects/ProjectList';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return(
            <div>
                <ProjectList />
                <Link className="btn float-right mt-5" to="/project/new">
                    <div id="add-project">                  
                        <span id="tooltip">Add a new project!</span>
                        <i className="fas fa-plus fa-2x"></i>                       
                    </div>
                </Link>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser})(Dashboard);