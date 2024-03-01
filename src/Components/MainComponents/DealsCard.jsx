import Chip from "@mui/joy/Chip";
import React from "react";

function DealsCard() {
  return (
    <div className="mb-5 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-3">
      <div className="text-center mb-10">
        <div
          className="flex items-center justify-center "
          style={{ marginBottom: "50px" }}
        >
          <svg
            width="141"
            height="103"
            viewBox="0 0 141 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="141" height="103" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_601_408"
                  transform="matrix(0.00386506 0 0 0.00529101 -0.0159856 0)"
                />
              </pattern>
              <image
                id="image0_601_408"
                width="267"
                height="189"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <div className="flex gap-2 mb-1">
          <Chip style={{ borderRadius: "8px", color: "rgba(7, 71, 134, 1)" }}>
            26% Off
          </Chip>
          <Chip style={{ borderRadius: "8px", color: "rgba(7, 71, 134, 1)" }}>
            Limited time
          </Chip>
        </div>
        <div className="mb-2">
          <p style={{ color: "rgba(98, 110, 121, 1)", fontWeight: "bold" }}>
            Webbuilder 1
          </p>
        </div>
        <p
          className="text-start mb-2"
          style={{ color: "rgba(98, 110, 121, 1)" }}
        >
          Computer Modern clasic with wix support
        </p>
        <div className="flex items-center gap-3">
          <p style={{ fontSize: "20px", color: "rgba(92, 104, 116, 1)" }}>
            $39.96
          </p>
          <p
            className="mt-1"
            style={{ fontSize: "14px", color: "rgba(159, 169, 179, 1)" }}
          >
            $49.96
          </p>
          <p
            className="mt-1"
            style={{ fontSize: "14px", color: "rgba(239, 76, 93, 1)" }}
          >
            (20% Off)
          </p>
        </div>
        <div
          className="p-2 mt-4 text-white flex items-center justify-center"
          style={{
            background: "rgba(27, 136, 244, 1)",
            borderRadius: "12px",
            height: "48px",
          }}
        >
          <p>View Deal</p>
        </div>
      </div>
      <div className="text-center mb-10">
        <div
          className="flex items-center justify-center "
          style={{ marginBottom: "50px" }}
        >
          <svg
            width="141"
            height="103"
            viewBox="0 0 141 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="141" height="103" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_601_408"
                  transform="matrix(0.00386506 0 0 0.00529101 -0.0159856 0)"
                />
              </pattern>
              <image
                id="image0_601_408"
                width="267"
                height="189"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <div className="flex gap-2 mb-1">
          <Chip style={{ borderRadius: "8px", color: "rgba(7, 71, 134, 1)" }}>
            26% Off
          </Chip>
          <Chip style={{ borderRadius: "8px", color: "rgba(7, 71, 134, 1)" }}>
            Limited time
          </Chip>
        </div>
        <div className="mb-2">
          <p style={{ color: "rgba(98, 110, 121, 1)", fontWeight: "bold" }}>
            Webbuilder 1
          </p>
        </div>
        <p
          className="text-start mb-2"
          style={{ color: "rgba(98, 110, 121, 1)" }}
        >
          Computer Modern clasic with wix support
        </p>
        <div className="flex items-center gap-3">
          <p style={{ fontSize: "20px", color: "rgba(92, 104, 116, 1)" }}>
            $39.96
          </p>
          <p
            className="mt-1"
            style={{ fontSize: "14px", color: "rgba(159, 169, 179, 1)" }}
          >
            $49.96
          </p>
          <p
            className="mt-1"
            style={{ fontSize: "14px", color: "rgba(239, 76, 93, 1)" }}
          >
            (20% Off)
          </p>
        </div>
        <div
          className="p-2 mt-4 text-white flex items-center justify-center"
          style={{
            background: "rgba(27, 136, 244, 1)",
            borderRadius: "12px",
            height: "48px",
          }}
        >
          <p>View Deal</p>
        </div>
      </div>
      <div className="text-center mb-10">
        <div
          className="flex items-center justify-center "
          style={{ marginBottom: "50px" }}
        >
          <svg
            width="141"
            height="103"
            viewBox="0 0 141 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="141" height="103" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_601_408"
                  transform="matrix(0.00386506 0 0 0.00529101 -0.0159856 0)"
                />
              </pattern>
              <image
                id="image0_601_408"
                width="267"
                height="189"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <div className="flex gap-2 mb-1">
          <Chip style={{ borderRadius: "8px", color: "rgba(7, 71, 134, 1)" }}>
            26% Off
          </Chip>
          <Chip style={{ borderRadius: "8px", color: "rgba(7, 71, 134, 1)" }}>
            Limited time
          </Chip>
        </div>
        <div className="mb-2">
          <p style={{ color: "rgba(98, 110, 121, 1)", fontWeight: "bold" }}>
            Webbuilder 1
          </p>
        </div>
        <p
          className="text-start mb-2"
          style={{ color: "rgba(98, 110, 121, 1)" }}
        >
          Computer Modern clasic with wix support
        </p>
        <div className="flex items-center gap-3">
          <p style={{ fontSize: "20px", color: "rgba(92, 104, 116, 1)" }}>
            $39.96
          </p>
          <p
            className="mt-1"
            style={{ fontSize: "14px", color: "rgba(159, 169, 179, 1)" }}
          >
            $49.96
          </p>
          <p
            className="mt-1"
            style={{ fontSize: "14px", color: "rgba(239, 76, 93, 1)" }}
          >
            (20% Off)
          </p>
        </div>
        <div
          className="p-2 mt-4 text-white flex items-center justify-center"
          style={{
            background: "rgba(27, 136, 244, 1)",
            borderRadius: "12px",
            height: "48px",
          }}
        >
          <p>View Deal</p>
        </div>
      </div>
    </div>
  );
}

export default DealsCard;
