import React from "react";
import "../Css/MainComponent.css";
import Chip from "@mui/joy/Chip";
function MainCard() {
  return (
    <div className="mt-5">
      <div className="" style={{ marginBottom: "30px" }}>
        <div className="flex">
          <div
            className="flex items-center gap-1 px-2 p-1  text-white"
            style={{
              background: "rgba(255, 119, 36, 1)",
              borderRadius: "0px 8px 8px 0px",
            }}
          >
            {" "}
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.375 1.6665C4.375 1.32133 4.65482 1.0415 5 1.0415H15C15.3452 1.0415 15.625 1.32133 15.625 1.6665V7.35278C15.625 10.5234 13.1236 13.1248 10 13.1248C6.87644 13.1248 4.375 10.5234 4.375 7.35278V1.6665ZM5.625 2.2915V7.35278C5.625 9.86744 7.60071 11.8748 10 11.8748C12.3993 11.8748 14.375 9.86744 14.375 7.35278V2.2915H5.625Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.0415 4.58301C1.0415 4.23783 1.32133 3.95801 1.6665 3.95801H4.99984C5.34502 3.95801 5.62484 4.23783 5.62484 4.58301V8.74967C5.62484 9.09485 5.34502 9.37467 4.99984 9.37467C2.92768 9.37467 1.0415 7.64239 1.0415 4.58301ZM2.32395 5.20801C2.50507 6.88881 3.41739 7.77588 4.37484 8.03944V5.20801H2.32395Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.375 4.58301C14.375 4.23783 14.6548 3.95801 15 3.95801H18.3333C18.6785 3.95801 18.9583 4.23783 18.9583 4.58301C18.9583 7.64239 17.0722 9.37467 15 9.37467C14.6548 9.37467 14.375 9.09485 14.375 8.74967V4.58301ZM15.625 5.20801V8.03944C16.5824 7.77588 17.4948 6.88881 17.6759 5.20801H15.625Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 12.708C10.3452 12.708 10.625 12.9878 10.625 13.333V14.9997C10.625 15.3449 10.3452 15.6247 10 15.6247C9.65482 15.6247 9.375 15.3449 9.375 14.9997V13.333C9.375 12.9878 9.65482 12.708 10 12.708Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.25514 14.6726C7.36887 14.4877 7.57042 14.375 7.78752 14.375H12.101C12.3111 14.375 12.5071 14.4805 12.6228 14.6559L14.2717 17.1559C14.3983 17.3478 14.4093 17.5938 14.3003 17.7963C14.1913 17.9987 13.9799 18.125 13.75 18.125H6.25C6.0236 18.125 5.81491 18.0026 5.70445 17.805C5.59398 17.6073 5.59902 17.3654 5.71762 17.1726L7.25514 14.6726ZM8.13687 15.625L7.36812 16.875H12.5891L11.7646 15.625H8.13687Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>Best Choice</div>
          </div>
        </div>

        <div className="flex  gap-4 BestDiv">
          <div
            className="text-center  text-gray-500"
            style={{ width: "250px", padding: "50px" }}
          >
            <div
              className="p-1  px-3 "
              style={{
                border: "1px solid rgba(225, 228, 230, 1)",
                position: "absolute",
                borderRadius: "50%",
                color: "rgba(98, 110, 121, 1)",
                marginTop: "-34px",
                marginLeft: "-60px",
              }}
            >
              1
            </div>
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
            <p className="mt-5 me-2">Builder 1</p>
          </div>
          <div className="WixPro">
            <p style={{ color: "rgba(75, 86, 101, 1)" }}>
              <strong>WixPro 72-Inch Responsive Website Builder -</strong>{" "}
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <strong style={{ color: "rgba(75, 86, 101, 1)" }}>
              Main highlights
            </strong>
            <p style={{ color: "rgba(75, 86, 101, 1)" }} className="p-2">
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
            <p
              className="flex items-center gap-1"
              style={{ color: "rgba(27, 136, 244, 1)" }}
            >
              Show more{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="mt-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z"
                  fill="rgba(27, 136, 244, 1)"
                />
              </svg>
            </p>
          </div>
          <div className="" style={{ width: "250px" }}>
            <div
              className="flex items-center justify-center mb-5 text-center "
              style={{ fontSize: "14px", marginTop: "-15px" }}
            >
              <div
                className="px-5 pb-5"
                style={{
                  background: "#eef4fb",
                  borderRadius: "0px 0px 12px 12px",
                }}
              >
                <h4 style={{ fontSize: "32px" }}>9.8</h4>
                <p className="mb-2">Exceptional</p>
                <svg
                  width="66"
                  height="11"
                  viewBox="0 0 66 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_601_219)">
                    <path
                      d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z"
                      fill="#FFB80F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_601_219">
                      <rect width="66" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              className="p-2 text-white flex items-center justify-center"
              style={{
                background: "rgba(27, 136, 244, 1)",
                borderRadius: "12px",
                marginTop: "65px",
                height: "48px",
              }}
            >
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ marginBottom: "50px" }}>
        <div className="flex">
          <div
            className="flex items-center gap-1 px-2 p-1  text-white"
            style={{
              background: "rgba(255, 119, 36, 1)",
              borderRadius: "0px 8px 8px 0px",
            }}
          >
            {" "}
            <div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.88981 1.77204C4.00126 1.57794 4.208 1.45825 4.43182 1.45825H15.5683C15.792 1.45825 15.9987 1.57794 16.1102 1.77204L19.292 7.31371C19.4234 7.54239 19.397 7.82886 19.2261 8.02975L10.4762 18.3214C10.3574 18.4611 10.1833 18.5416 10 18.5416C9.81668 18.5416 9.64259 18.4611 9.52384 18.3214L0.773841 8.02975C0.603042 7.82886 0.576697 7.54239 0.707994 7.31371L3.88981 1.77204ZM4.79366 2.70825L2.01087 7.55494L10 16.9516L17.9891 7.55494L15.2064 2.70825H4.79366Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.22447 1.49382C4.55009 1.37931 4.90691 1.55044 5.02142 1.87607L9.99999 16.0329L14.9786 1.87607C15.0931 1.55044 15.4499 1.37931 15.7755 1.49382C16.1011 1.60833 16.2723 1.96514 16.1578 2.29077L10.5896 18.1241C10.5016 18.3744 10.2652 18.5417 9.99999 18.5417C9.73474 18.5417 9.49839 18.3744 9.41039 18.1241L3.84221 2.29077C3.72769 1.96514 3.89883 1.60833 4.22447 1.49382Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.625 7.625C0.625 7.27981 0.904822 7 1.25 7H18.75C19.0951 7 19.375 7.27981 19.375 7.625C19.375 7.97018 19.0951 8.25 18.75 8.25H1.25C0.904822 8.25 0.625 7.97018 0.625 7.625Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 1.45825C10.2122 1.45825 10.4099 1.5659 10.525 1.74413L14.1046 7.2858C14.2919 7.57575 14.2086 7.96263 13.9187 8.14991C13.6287 8.3372 13.2419 8.25398 13.0546 7.96403L10 3.23514L6.94548 7.96403C6.7582 8.25398 6.37132 8.3372 6.08137 8.14991C5.79142 7.96263 5.7082 7.57575 5.89548 7.2858L9.47503 1.74413C9.59016 1.5659 9.78785 1.45825 10 1.45825Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>Best Value</div>
          </div>
        </div>

        <div className="flex  gap-4 BestDiv">
          <div
            className="text-center  text-gray-500"
            style={{ width: "250px", padding: "50px" }}
          >
            <div
              className="p-1  px-3 "
              style={{
                border: "1px solid rgba(225, 228, 230, 1)",
                position: "absolute",
                borderRadius: "50%",
                color: "rgba(98, 110, 121, 1)",
                marginTop: "-34px",
                marginLeft: "-60px",
              }}
            >
              2
            </div>
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
            <p className="mt-5 me-2">Builder 2</p>
          </div>
          <div className="WixPro">
            <p style={{ color: "rgba(75, 86, 101, 1)" }}>
              <strong>SiteCraft 68-Inch Ultimate Web Design Studio-</strong>{" "}
              Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
              Dynamic Websites and E-commerce Platforms (Green/White)
            </p>
            <strong style={{ color: "rgba(75, 86, 101, 1)" }}>
              Main highlights
            </strong>
            <p style={{ color: "rgba(75, 86, 101, 1)" }} className="p-2">
              [What You Get]: Gain access to the SiteCraft design studio,
              featuring a robust selection of design elements, SEO optimization
              tools, and e-commerce integrations.
            </p>
            <p
              className="flex items-center gap-1"
              style={{ color: "rgba(27, 136, 244, 1)" }}
            >
              Show more{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="mt-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z"
                  fill="rgba(27, 136, 244, 1)"
                />
              </svg>
            </p>
          </div>
          <div className="" style={{ width: "250px" }}>
            <div
              className="flex items-center justify-center mb-5 text-center "
              style={{ fontSize: "14px", marginTop: "-15px" }}
            >
              <div
                className="px-5 pb-5"
                style={{
                  background: "#eef4fb",
                  borderRadius: "0px 0px 12px 12px",
                }}
              >
                <h4 style={{ fontSize: "32px" }}>9.5</h4>
                <p className="mb-2">Excellent</p>
                <svg
                  width="66"
                  height="11"
                  viewBox="0 0 66 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_601_219)">
                    <path
                      d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z"
                      fill="#FFB80F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_601_219">
                      <rect width="66" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              className="p-2 text-white flex items-center justify-center"
              style={{
                background: "rgba(27, 136, 244, 1)",
                borderRadius: "12px",
                marginTop: "65px",
                height: "48px",
              }}
            >
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ marginBottom: "50px" }}>
        <div className="flex  gap-4 BestDiv">
          <div
            className="text-center  text-gray-500"
            style={{ width: "250px", padding: "50px" }}
          >
            <div
              className="p-1  px-3 "
              style={{
                border: "1px solid rgba(225, 228, 230, 1)",
                position: "absolute",
                borderRadius: "50%",
                color: "rgba(98, 110, 121, 1)",
                marginTop: "-34px",
                marginLeft: "-60px",
              }}
            >
              3
            </div>
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
            <p className="mt-5 me-2">Builder 3</p>
          </div>
          <div className="WixPro">
            <p style={{ color: "rgba(75, 86, 101, 1)" }}>
              <strong>WixPro 72-Inch Responsive Website Builder -</strong>{" "}
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <strong style={{ color: "rgba(75, 86, 101, 1)" }}>
              Main highlights
            </strong>
            <p className="p-2" style={{ color: "rgba(75, 86, 101, 1)" }}>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
            <p
              className="flex items-center gap-1"
              style={{ color: "rgba(27, 136, 244, 1)" }}
            >
              Show more{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="mt-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z"
                  fill="rgba(27, 136, 244, 1)"
                />
              </svg>
            </p>
          </div>
          <div className="" style={{ width: "250px" }}>
            <div
              className="flex items-center justify-center mb-5 text-center "
              style={{ fontSize: "14px", marginTop: "-15px" }}
            >
              <div
                className="px-5 pb-5"
                style={{
                  background: "#eef4fb",
                  borderRadius: "0px 0px 12px 12px",
                }}
              >
                <h4 style={{ fontSize: "32px" }}>9.3</h4>
                <p className="mb-2">Exceptional</p>
                <svg
                  width="66"
                  height="11"
                  viewBox="0 0 66 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_601_219)">
                    <path
                      d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z"
                      fill="#FFB80F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_601_219">
                      <rect width="66" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              className="p-2 text-white flex items-center justify-center"
              style={{
                background: "rgba(27, 136, 244, 1)",
                borderRadius: "12px",
                marginTop: "65px",
                height: "48px",
              }}
            >
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex  gap-4 BestDiv">
          <div
            className="text-center  text-gray-500"
            style={{ width: "250px", padding: "50px" }}
          >
            <div
              className="p-1  px-3 "
              style={{
                border: "1px solid rgba(225, 228, 230, 1)",
                position: "absolute",
                borderRadius: "50%",
                color: "rgba(98, 110, 121, 1)",
                marginTop: "-34px",
                marginLeft: "-60px",
              }}
            >
              4
            </div>
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
            <p className="mt-5 me-2">CDK</p>
          </div>
          <div className="WixPro">
            <p style={{ color: "rgba(75, 86, 101, 1)" }}>
              <strong>CDK Resposive Builder:</strong> An extensive library of
              widgets and apps, and detailed step-by-step guides
            </p>
            <p className="my-2">
              <Chip>26% Off</Chip>
            </p>
            <strong style={{color: "rgba(75, 86, 101, 1)"}}>Main highlights</strong>

            <div className="p-2">
              <div
                className="p-3 px-5"
                style={{
                  background: "rgba(255, 244, 237, 1)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="flex gap-3 items-center mb-3"
                  style={{ color: "rgba(75, 86, 101, 1)" }}
                >
                  <Chip
                    className="p-1 "
                    style={{
                      background: "rgba(255, 255, 255, 1)",
                      color: "rgba(27, 136, 244, 1)",
                      borderRadius: "5px",
                    }}
                  >
                    9.9
                  </Chip>
                  building responsive{" "}
                </div>
                <div
                  className="flex gap-3 items-center mb-3"
                  style={{ color: "rgba(75, 86, 101, 1)" }}
                >
                  <Chip
                    className="p-1 "
                    style={{
                      background: "rgba(255, 255, 255, 1)",
                      color: "rgba(27, 136, 244, 1)",
                      borderRadius: "5px",
                    }}
                  >
                    8.9
                  </Chip>
                  Cool{" "}
                </div>
                <div
                  className="flex gap-3 items-center"
                  style={{ color: "rgba(75, 86, 101, 1)" }}
                >
                  <Chip
                    className="p-1 "
                    style={{
                      background: "rgba(255, 255, 255, 1)",
                      color: "rgba(27, 136, 244, 1)",
                      borderRadius: "5px",
                    }}
                  >
                    8.9
                  </Chip>
                  Docs{" "}
                </div>
              </div>
            </div>
            <div>
              <p className="mb-2 ">Why we love it</p>
              <div className="px-2">
                <p
                  className="flex items-center gap-2 mb-2"
                  style={{ color: "rgba(75, 86, 101, 1)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z"
                      fill="#EBF5FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z"
                      fill="#0855A1"
                    />
                  </svg>
                  Documentation
                </p>
                <p
                  className="flex items-center gap-2 mb-2"
                  style={{ color: "rgba(75, 86, 101, 1)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z"
                      fill="#EBF5FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z"
                      fill="#0855A1"
                    />
                  </svg>
                  Easy Use
                </p>
                <p
                  className="flex items-center gap-2 mb-2"
                  style={{ color: "rgba(75, 86, 101, 1)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z"
                      fill="#EBF5FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z"
                      fill="#0855A1"
                    />
                  </svg>
                  Out of box
                </p>
              </div>
            </div>
            <p
              className="flex items-center gap-1"
              style={{ color: "rgba(27, 136, 244, 1)" }}
            >
              Show more{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="mt-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z"
                  fill="rgba(27, 136, 244, 1)"
                />
              </svg>
            </p>
          </div>
          <div className="" style={{ width: "250px" }}>
            <div
              className="flex items-center justify-center mb-5 text-center "
              style={{ fontSize: "14px", marginTop: "-15px" }}
            >
              <div
                className="px-5 pb-5"
                style={{
                  background: "#eef4fb",
                  borderRadius: "0px 0px 12px 12px",
                }}
              >
                <h4 style={{ fontSize: "32px" }}>9.1</h4>
                <p className="mb-2">Very Good</p>
                <svg
                  width="66"
                  height="11"
                  viewBox="0 0 66 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_601_219)">
                    <path
                      d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z"
                      fill="#FFB80F"
                    />
                    <path
                      d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z"
                      fill="#FFB80F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_601_219">
                      <rect width="66" height="11" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              className="p-2 text-white flex items-center justify-center lastbutton"
              style={{
                background: "rgba(27, 136, 244, 1)",
                borderRadius: "12px",
                
                height: "48px",
              }}
            >
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
