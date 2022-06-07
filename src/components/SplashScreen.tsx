import React from "react";

interface Itypes {
  legends: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
}

const SplashScreen: React.FC<Itypes> = ({ legends }) => {
  const renderingCategories = (): JSX.Element[] => {
    return legends.map((items, i) => {
      return (
        <div key={i} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${items.imageUrl})` }}
          >
            <h2 className="category-body-container">{items.title}</h2>
          </div>
        </div>
      );
    });
  };

  return <div className="categories-container">{renderingCategories()}</div>;
};

export default SplashScreen;
