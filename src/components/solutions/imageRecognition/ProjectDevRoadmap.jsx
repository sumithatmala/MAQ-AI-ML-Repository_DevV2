import "./CSS/ProjectDevRoadmap.css";

const ProjectDevRoadmap = (props) => {
    const { leftData, rightData } = props;
    return (
        <section className="ProjectSection">
            <div className="ProjectDevContainer">
                <h2>Request Specific Project Roadmap</h2>
                <div className="ProjectDevDesc">
                    <p>Visual content is a growing trend in information delivery, making image identification, recognition, and analysis solutions essential components of many business processes. Customized for our client's needs, these solutions automate processes and decrease labor expenses.</p>
                    <p>MAQ Software engages with businesses that have varied initial inquiries. Instead of a one-size-fits-all approach, we prioritize close collaboration with each client to develop a tailored solution. Together, we outline development phases based on the available datasets.</p>
                </div>
                <div className="ProjectDevRoadmap">
                    <div className="Roadmap-left">
                        <div className="RoadmapTitle">{leftData.title}</div>
                        <ul className="RoadmapPointList-left">
                            {leftData.points.map((point) => {
                                return (
                                    <li className="RoadmapPoint-item">
                                        <div className="RoadmapPoint_title">{point.heading}</div>
                                        <div className="RoadmapPoint_desc">{point.desc.map((pt)=>(<div>{pt}</div>))}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="Roadmap-right">
                        <div className="RoadmapTitle">{rightData.title}</div>
                        <ul className="RoadmapPointList-right">
                            {rightData.points.map((point) => {
                                return (
                                    <li className="RoadmapPoint-item">
                                        <div className="RoadmapPoint_title">{point.heading}</div>
                                        <div className="RoadmapPoint_desc">{point.desc.map((pt)=>(<div>{pt}</div>))}</div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDevRoadmap;