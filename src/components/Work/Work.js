import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Work() {
  const [hoveredPolygon, setHoveredPolygon] = useState("");

  function handlePolygonHover(polygonId) {
    setHoveredPolygon(polygonId);
  }

  const { t } = useTranslation(["home"]);

  return (
    <div className="work-section mt-[6rem] py-20">
      <div className="mb-[3rem]">
        <h1 className="mb-3 text-center text-3xl font-bold">
          {t("home:howwillweworktogether")}
        </h1>
        <p className="mx-auto mt-5 w-1/2 items-center text-center text-2xl font-semibold">
          {t("home:iwillhelpyouidentifythebestoptionaccordingtoyourneeds.")}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="180"
          viewBox="700 50 1000 300"
          className="fill-current text-white"
        >
          {/* Hexagons */}
          <polygon
            id="polygon1"
            className={
              hoveredPolygon === "polygon1"
                ? "hovered-polygon polygon"
                : "polygon"
            }
            points="200,150 400,50 600,150 600,250 400,350 200,250"
            stroke="#A0AEC0"
            strokeWidth="3"
            fill="none"
            onMouseOver={() => handlePolygonHover("polygon1")}
            onMouseOut={() => handlePolygonHover("")}
          />
          <polygon
            id="polygon2"
            className={
              hoveredPolygon === "polygon2"
                ? "hovered-polygon polygon"
                : "polygon"
            }
            points="600,150 800,50 1000,150 1000,250 800,350 600,250"
            stroke="#A0AEC0"
            strokeWidth="3"
            fill="none"
            onMouseOver={() => handlePolygonHover("polygon2")}
            onMouseOut={() => handlePolygonHover("")}
          />
          <polygon
            id="polygon3"
            className={
              hoveredPolygon === "polygon3"
                ? "hovered-polygon polygon"
                : "polygon"
            }
            points="1000,150 1200,50 1400,150 1400,250 1200,350 1000,250"
            stroke="#A0AEC0"
            strokeWidth="3"
            fill="none"
            onMouseOver={() => handlePolygonHover("polygon3")}
            onMouseOut={() => handlePolygonHover("")}
          />
          <polygon
            id="polygon4"
            className={
              hoveredPolygon === "polygon4"
                ? "hovered-polygon polygon"
                : "polygon"
            }
            points="1400,150 1600,50 1800,150 1800,250 1600,350 1400,250"
            stroke="#A0AEC0"
            strokeWidth="3"
            fill="none"
            onMouseOver={() => handlePolygonHover("polygon4")}
            onMouseOut={() => handlePolygonHover("")}
          />
          <polygon
            id="polygon5"
            className={
              hoveredPolygon === "polygon5"
                ? "hovered-polygon polygon"
                : "polygon"
            }
            points="1800,150 2000,50 2200,150 2200,250 2000,350 1800,250"
            stroke="#A0AEC0"
            strokeWidth="3"
            fill="none"
            onMouseOver={() => handlePolygonHover("polygon5")}
            onMouseOut={() => handlePolygonHover("")}
          />

          {/* Text */}
          <foreignObject x="300" y="100" width="200" height="180">
            <div
              className={
                hoveredPolygon === "polygon1"
                  ? "content flex h-full items-center justify-center p-4 text-gray-500"
                  : "flex h-full items-center justify-center p-4 text-gray-500"
              }
            >
              <div className="text-center">
                <h2 className="mb-2 cursor-pointer text-lg font-bold hover:text-xl">
                  {t("home:calibration")}
                </h2>
                <p className="cursor-pointer text-lg">
                  {t("home:calibrationtext")}
                </p>
              </div>
            </div>
          </foreignObject>

          <foreignObject x="700" y="100" width="200" height="180">
            <div
              className={
                hoveredPolygon === "polygon2"
                  ? "content flex h-full items-center justify-center p-4 text-gray-500"
                  : "flex h-full items-center justify-center p-4 text-gray-500"
              }
            >
              <div className="text-center">
                <h2 className="mb-2 cursor-pointer text-lg font-bold hover:text-xl">
                  {t("home:collaboration")}
                </h2>
                <p className="cursor-pointer text-lg">
                  {t("home:collaborationtext")}
                </p>
              </div>
            </div>
          </foreignObject>

          <foreignObject x="1100" y="100" width="200" height="170">
            <div
              className={
                hoveredPolygon === "polygon3"
                  ? "content flex h-full items-center justify-center p-4 text-gray-500"
                  : "flex h-full items-center justify-center p-4 text-gray-500"
              }
            >
              <div className="text-center">
                <h2 className="mb-2 cursor-pointer text-lg font-bold hover:text-xl">
                  {t("home:theactualthing")}
                </h2>
                <p className="cursor-pointer text-lg">
                  {t("home:theactualthingtext")}
                </p>
              </div>
            </div>
          </foreignObject>

          <foreignObject x="1500" y="100" width="200" height="180">
            <div
              className={
                hoveredPolygon === "polygon4"
                  ? "content flex h-full items-center justify-center p-4 text-gray-500"
                  : "flex h-full items-center justify-center p-4 text-gray-500"
              }
            >
              <div className="text-center">
                <h2 className="mb-2 cursor-pointer text-lg font-bold hover:text-xl">
                  {t("home:analyze")}
                </h2>
                <p className="cursor-pointer text-lg">
                  {t("home:analyzetext")}
                </p>
              </div>
            </div>
          </foreignObject>

          <foreignObject x="1900" y="100" width="200" height="180">
            <div
              className={
                hoveredPolygon === "polygon5"
                  ? "content flex h-full items-center justify-center p-4 text-gray-500"
                  : "flex h-full items-center justify-center p-4 text-gray-500"
              }
            >
              <div className="text-center">
                <h2 className="mb-2 cursor-pointer text-lg font-bold hover:text-xl">
                  {t("home:mentoring")}
                </h2>
                <p className="cursor-pointer text-lg">
                  {t("home:mentoringtext")}
                </p>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}

export default Work;
