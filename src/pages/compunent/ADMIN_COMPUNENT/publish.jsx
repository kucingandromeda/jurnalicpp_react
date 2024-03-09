import "./publish.css";

import { PublishMain } from "./publishMain";
import { PublishSYS } from "./publishSYS";

export const Publish = () => {
  return (
    <>
      <div className="publish-section">
        <PublishMain></PublishMain>
      </div>
      <div className="publish_fn">
        <PublishSYS></PublishSYS>
      </div>
    </>
  );
};
