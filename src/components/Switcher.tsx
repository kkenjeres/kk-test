import { useState } from "react";
import { Config } from "./Config";
import { Result } from "./Result";
export const Switcher = () => {
  const tabs = ["config", "result"];
  const [isActive, setIsActive] = useState(tabs[0]);

  const changeTab = (tab: string) => {
    setIsActive(tab);
  };
  return (
    <>
      <div className="flex gap-x-5 mb-10">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`hover:text-primary hover:border-primary cursor-pointer border-b duration-150 ${
              isActive === tab
                ? "border-primary text-primary"
                : "border-transparent"
            }`}
            onClick={() => {
              changeTab(tab);
            }}
          >
            {tab}
          </span>
        ))}
      </div>
      {isActive === "config" ? <Config /> : <Result />}
    </>
  );
};
