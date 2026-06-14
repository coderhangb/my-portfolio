import { useProjectStore } from "../stores/useProjectStore";

function StartMenu() {
  const { isStartMenuDisplayed, hideStartMenu } = useProjectStore();

  return (
    <div className={isStartMenuDisplayed ? "start-menu" : "start-menu hidden"}>
      <button className="start-menu-btn" onClick={() => hideStartMenu()}>
        Enter Portfolio!
      </button>
      <p className="start-menu-desc">- use arrow keys to move -</p>
    </div>
  );
}

export default StartMenu;
