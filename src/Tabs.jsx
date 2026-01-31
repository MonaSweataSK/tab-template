import { useState } from "react";

export default function Tabs({
  defaultActiveTab,
  children,
  parentActiveTab,
  setParentActiveTab
}) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const currentState = parentActiveTab ?? activeTab;

  const handleOnClick = (title) => {
    if (parentActiveTab) {
      setParentActiveTab(title);
      return;
    }
    setActiveTab(title);
  };

  const handleKeyDown = (e, idx) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

    const titles = children.map(child => child.props.title);
    const currentIndex = idx;
    let nextIndex;
    if (e.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % titles.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + titles.length) % titles.length;
    }
    const nextTitle = titles[nextIndex];
    handleOnClick(nextTitle);
    // Move focus to the next tab button
    const tabButtons = e.currentTarget.parentNode.querySelectorAll('button');
    if (tabButtons[nextIndex]) {
      tabButtons[nextIndex].focus();
    }
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="tabs-container">
        {children.map((child, idx) => (
          <button
            key={child.props.title}
            autoFocus={child.props.title === currentState}
            onKeyDown={e => handleKeyDown(e, idx)}
            className={
              child.props.title === currentState
                ? "active-tab"
                : "tab"
            }
            onClick={() => handleOnClick(child.props.title)}
            tabIndex={child.props.title === currentState ? 0 : -1}
            aria-selected={child.props.title === currentState}
            role="tab"
          >
            {child.props.title}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {children.map((c) => (
          c.props.title === currentState && (
            <div key={c.props.title}>{c.props.children}</div>
          )
        ))}
      </div>
    </div>
  );
}
