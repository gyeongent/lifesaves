import React from "react";
import { Link, useParams } from "react-router-dom";

import projectArray from "../data/projects.json";

function Projects(){
    
    const { projectName } = useParams();

    const projectList = projectArray.projectinfo.map((projectinfo, index) => {
        return (
            <Link to={'/projects/' + projectinfo.projectName } key={index} >
                <div>
                    <div>
                        { projectinfo.title }
                    </div>
                </div>
            </Link>
        );
    })

    const projectContent = projectArray.contents.filter(content => content.projectName === projectName);

    return(
        <div>
            { projectName } 프로젝트
            <div>
                { projectList }
            </div>
            <div>
                {projectContent.map(content => (
                    <div>
                        <div>
                            { content.projectName }
                        </div>
                        <div>
                            { content.img }
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Projects;