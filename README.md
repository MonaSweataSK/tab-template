
🎯 Goal
Build a reusable tab navigation component in React that allows users to switch between different content panels by clicking on tab headers.

You need to implement two components:

<Tabs> — the parent container that manages which tab is active.


<Tab> — the child component that defines a single tab’s title and content.


🧱 Requirements
The component should support usage in this format:

<Tabs defaultActiveTab="Profile">

  <Tab title="Overview">Overview Content</Tab>

  <Tab title="Profile">Profile Content</Tab>

  <Tab title="Settings">Settings Content</Tab>

</Tabs>

Default Active Tab:


The tab specified by defaultActiveTab should be active when the component first renders.


Tab Switching:


When a user clicks on a tab header, that tab should become active, and its content should display.


Only one tab’s content should be visible at a time.


Reusability:


The <Tabs> component should handle state management and rendering of headers + content.


The <Tab> component should define title and content.


It should work for any number of <Tab> children.


Styling:


Use minimal styling to visually highlight the active tab (for example, underline, color, or bold text).


No external CSS frameworks are allowed — basic CSS or inline styles are sufficient.


💡 Expected Behavior
When rendered, the component should show tab headers like:

[ Overview ] [ Profile ] [ Settings ]

------------------------------------

Profile Content


Clicking on Overview changes the visible content to:

[ Overview ] [ Profile ] [ Settings ]

------------------------------------

Overview Content


💯 Bonus (Optional)
You can earn extra credit for:

Supporting a controlled mode using activeTab and onTabChange props.


Adding keyboard navigation (arrow keys to switch tabs).


Adding smooth transitions between tab contents.


Supporting icons or dynamic tabs (add/remove).


Writing basic unit tests for your component.