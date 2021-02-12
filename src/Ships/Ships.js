import React, { useEffect, Component } from "react";

function Ships() {
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const shipData = await fetch("https://api.spacexdata.com/v4/ships");

    const items = await shipData.json();
    console.log(items);
  };

  return (
    <div>
      <h1 style={{ color: "#242b2e" }}>Ships</h1>
    </div>
  );
}

export default Ships;
