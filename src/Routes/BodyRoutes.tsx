import React from "react";
import { Route, Routes } from "react-router-dom";
import { ZodiacGrid } from "../ZodiacGrid/ZodiacGrid";
import { SingleSignPage } from "../SingleSignPage/SingleSignPage";
import { orderedSigns } from "../types/sign/orderedSigns";
import { signPath } from "../types/sign/signPath";

export const BodyRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<ZodiacGrid />} />
      {orderedSigns.map((sign) => (
        <Route
          key={sign}
          path={signPath[sign]}
          element={<SingleSignPage sign={sign} />}
        />
      ))}
    </Routes>
  );
};
