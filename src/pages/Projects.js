import { useDispatch, useSelector } from "react-redux";
import ProjectsList from "../components/project/ProjectsList";
import ProjectSearch from "../components/project/ProjectSearch";
import { searchProjects } from "../actions/projectAction";

const Projects = ({ onEditProject }) => {
  const projects = useSelector((state) => state.projectState.projects);
  const dispatch = useDispatch();

  const onChangeSearch = (typedValue) => {
    dispatch(searchProjects(typedValue));
  };

  const onEditProjectHandler = (project) => {
    onEditProject(project);
  };

  return (
    <div>
      <ProjectSearch onChangeSearch={onChangeSearch} />
      <ProjectsList projects={projects} onEditProject={onEditProjectHandler} />
    </div>
  );
};

export default Projects;
