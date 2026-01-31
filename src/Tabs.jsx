import { useState } from "react";

export default function Tabs({ defaultActiveTab, children}) {
    const [ activeTab, setActiveTab ] = useState(defaultActiveTab);
  
    return (
        <div className="container">
            <div className="tabs-container">
                {children.map((child) => {
                    return <button className={child.props.title === activeTab ? 'active-tab' : 'tab'} onClick={()=>setActiveTab(child.props.title)}>{child.props.title}</button>
                })}
            </div>
            <div className="tabs-content">
                {children.map((c) => {
                    return (
                        <div key={c.props.title}>
                        {c.props.title === activeTab && <div>
                        {c.props.children}
                        </div>}
                    </div>
                    )
                })}
            </div>
        </div>

    )
}