import { useEffect, useRef } from "react";

export const NativeAds = () => {
  const target = useRef(null);
  useEffect(() => {
    if (target.current && !target.current.firstChild) {
      const script = document.createElement("script");
      // script.async = "async";
      script.setAttribute("async", "async");
      script.setAttribute("data-cfasync", false);
      script.src =
        "//pl22944050.profitablegatecpm.com/39158969dbde6d27fa3d4876361aeb23/invoke.js";

      const div = document.createElement("div");
      div.id = "container-39158969dbde6d27fa3d4876361aeb23";

      target.current.append(script);
      target.current.append(div);
      console.log("running");
    }
  }, []);

  return (
    <>
      <div ref={target}></div>
    </>
  );
};
