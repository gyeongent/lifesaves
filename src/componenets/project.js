import React from "react";
import { Link, useParams } from "react-router-dom";

import "../css/project.css";

import projectArray from "../data/projects.json";

function Projects(){
    
    const { projectName } = useParams();

    const projectList = projectArray.projectinfo.map((projectinfo, index) => {
        return (
            <Link to={'/projects/' + projectinfo.projectName } key={index} >
                <div className="project_preview">
                    <div className="project_thumb">
                        <img src={projectinfo.img} alt={projectinfo.title}/>
                    </div>
                    <div className="project_desc">
                        { projectinfo.title }
                    </div>
                </div>
            </Link>
        );
    })

    const projectContent = projectArray.contents.filter(content => content.projectName === projectName);

    return(
        <div>
            <div className="top">
                <div className="home_title">
                    프로젝트
                </div>
            </div>
            <div className="section_first">
                { projectList }
            </div>
            <div>
                {projectContent.map(content => (
                    <div>
                        <div className="top">
                            <div className="home_title">
                                { content.title }
                            </div>
                        </div>
                        {/* <div className="project_detail_img">
                            <img src={ content.img } alt={content.title}/>
                        </div> */}
                        <div className="project_detail">
                            { content.desc }
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Projects;