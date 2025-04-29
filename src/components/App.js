import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* other components */}
    </div>
  );
}

export default App;
