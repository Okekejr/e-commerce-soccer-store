import React from "react";
import SplashScreen from "./SplashScreen";

export default function Directory() {
  const legends = [
    {
      id: 1,
      title: "Boots",
      imageUrl:
        "https://images.unsplash.com/photo-1612387049565-d8022fe99fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      title: "Replicas",
      imageUrl:
        "https://images.unsplash.com/photo-1616124619460-ff4ed8f4683c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
    },
    {
      id: 3,
      title: "Goalkeepers",
      imageUrl:
        "https://www.lovellsoccer.co.uk/features/splash-pages/soccer/homepage/goalkeepers.jpg?v=6",
    },
    {
      id: 4,
      title: "Footballs",
      imageUrl:
        "https://images.unsplash.com/photo-1627834248396-e0892e56f83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      title: "Football essentials",
      imageUrl:
        "https://www.lovellsoccer.co.uk/features/splash-pages/soccer/homepage/shinpads.jpg?3",
    },
  ];
  return (
    <div>
      <SplashScreen legends={legends} />
    </div>
  );
}
