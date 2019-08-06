import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import  { fetchProjects } from '../../actions';

class ProjectList extends React.Component {
    componentDidMount() {
        this.props.fetchProjects();
    }
    
    renderProjects() {
        return this.props.projects.reverse().map(project => {
            let projectId = `/projects/${project._id}`;
            return(
                <Link key={project._id} to={projectId} className="text-dark">
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="m-auto col-md-4">
                            <i className="ml-5 fas fa-project-diagram fa-3x"></i>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.repo} className="card-text">{project.repo}</a>
                                <p className="card-text"><small className="text-muted">Created on {new Date(project.dateCreated).toLocaleDateString()}</small></p>                           
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            );
        });
    }

    render() {
        return(
            <div>{this.renderProjects()}</div>
        );
    }
}

function mapStateToProps({ projects }) {
    return { projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectList);