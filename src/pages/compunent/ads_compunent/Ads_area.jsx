import "./ads_area.css";
import { NativeAds } from "./compunent/nativeAds";

export const AdsArea = () => {
  return (
    <>
      {JSON.parse(import.meta.env.VITE_PRODUCTION) ? (
        <div className="template-ads-area">
          <h3>advertisement</h3>
          <NativeAds></NativeAds>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
