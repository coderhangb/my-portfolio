import { useProjectStore } from "../stores/useProjectStore";

const projectMap = {
  Plane021: {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus tempora, voluptatem vitae labore qui doloremque et quod eaque similique tenetur distinctio ipsum quibusdam totam odit, quis minus nostrum fuga?",
    link: "#!",
  },
  Plane020: {
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus tempora, voluptatem vitae labore qui doloremque et quod eaque similique tenetur distinctio ipsum quibusdam totam odit, quis minus nostrum fuga?",
    link: "#!",
  },
  Plane018: {
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus tempora, voluptatem vitae labore qui doloremque et quod eaque similique tenetur distinctio ipsum quibusdam totam odit, quis minus nostrum fuga?",
    link: "#!",
  },
};

function Modal() {
  const { selectedProject, closeProject } = useProjectStore();

  const project = projectMap[selectedProject];

  if (!project) return null;

  return (
    <div className="modal">
      <div className="modal-wrap">
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>

          <button className="modal-exit-btn" onClick={closeProject}>
            exit
          </button>
        </div>

        <div className="modal-content">
          <div className="modal-content-wrap">
            <p className="modal-project-desc">{project.desc}</p>

            <a href={project.link} className="modal-visit-btn">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
