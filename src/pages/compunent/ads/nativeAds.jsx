import { useEffect, useRef } from "react";

export const NativeAds = () => {
  const target = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = "async";
    script.setAttribute("data-cfasync", false);
    target.current.append(script);

    const div = document.createElement("div");
    div.id = "container-39158969dbde6d27fa3d4876361aeb23";
    target.current.append(div);
  }, []);

  return (
    <>
      <div ref={target}></div>
    </>
  );
};
