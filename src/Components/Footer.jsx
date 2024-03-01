import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="mt-auto text-white p-4"
        style={{ backgroundColor: "rgba(33, 39, 49, 1)" }}
      >
        <div className=" container">
          <div className="py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p>CATEGORIES</p>
              <p
                className="mb-4 mt-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                Web Builder
              </p>
              <p
                className="mb-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                {" "}
                Hosting
              </p>
              <p
                className="mb-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                {" "}
                Data Center
              </p>
              <p
                className="mb-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                {" "}
                Robotic-Automation
              </p>
            </div>
            <div>
              <p>CONTACT</p>
              <p
                className="mb-4 mt-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                Contact
              </p>
              <p
                className="mb-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                {" "}
                Privacy Policy
              </p>
              <p
                className="mb-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                {" "}
                Terms Of Service
              </p>
              <p
                className="mb-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                {" "}
                Categories
              </p>
              <p
                className="mb-4 "
                style={{ fontSize: "13px", color: "rgba(182, 189, 196, 1)" }}
              >
                {" "}
                About
              </p>
            </div>
            <div
              className="flex items-center gap-3"
              style={{ fontSize: "13px", color: "rgba(209, 214, 218, 1)" }}
            >
              United States{" "}
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_601_377)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.96967 0.98383C1.26256 0.690937 1.73744 0.690937 2.03033 0.98383L7.5 6.4535L12.9697 0.98383C13.2626 0.690937 13.7374 0.690937 14.0303 0.98383C14.3232 1.27672 14.3232 1.7516 14.0303 2.04449L8.03033 8.04449C7.73744 8.33738 7.26256 8.33738 6.96967 8.04449L0.96967 2.04449C0.676777 1.7516 0.676777 1.27672 0.96967 0.98383Z"
                    fill="#E1E4E6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_601_377">
                    <rect width="15" height="9" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
