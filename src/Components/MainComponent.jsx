import React from "react";
import "./Css/MainComponent.css";
import MainCard from "./MainComponents/MainCard";
import DealsCard from "./MainComponents/DealsCard";
import Footer from "./Footer";
function MainComponent() {
  return (
    <div className="container   mt-3">
      <div>
        <p className="WebsiteBuilders mb-2">Best Website builders in the US</p>
        <div>
          <hr
            className=""
            style={{ border: "1px solid rgba(225, 228, 230, 1)" }}
          ></hr>
          <div>
            <div className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 Last">
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
                    d="M3.66534 3.99892C5.28581 2.46375 7.52625 1.51318 9.99984 1.51318C12.4734 1.51318 14.7138 2.46375 16.3343 3.99892C17.9547 5.53411 18.9582 7.65663 18.9582 10C18.9582 12.3434 17.9547 14.4659 16.3343 16.0011C14.7138 17.5362 12.4734 18.4869 9.99984 18.4869C7.52625 18.4869 5.28581 17.5362 3.66534 16.0011C2.04488 14.4659 1.0415 12.3434 1.0415 10C1.0415 7.65663 2.04488 5.53411 3.66534 3.99892ZM9.99984 2.69739C7.87109 2.69739 5.94486 3.51412 4.54921 4.83629C3.15359 6.15848 2.2915 7.98332 2.2915 10C2.2915 12.0168 3.1536 13.8416 4.54923 15.1637C5.94486 16.4859 7.87109 17.3027 9.99984 17.3027C12.1286 17.3027 14.0548 16.4859 15.4504 15.1637C16.8461 13.8416 17.7082 12.0168 17.7082 10C17.7082 7.98332 16.8461 6.15847 15.4504 4.83629C14.0548 3.51412 12.1286 2.69739 9.99984 2.69739Z"
                    fill="#626E79"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6084 7.21285C14.8525 7.44408 14.8525 7.81899 14.6084 8.05022L9.60845 12.787C9.36437 13.0183 8.96864 13.0183 8.72456 12.787L6.22456 10.4186C5.98048 10.1874 5.98048 9.81251 6.22456 9.58127C6.46864 9.35004 6.86437 9.35004 7.10845 9.58127L9.16651 11.531L13.7246 7.21285C13.9686 6.98162 14.3644 6.98162 14.6084 7.21285Z"
                    fill="#626E79"
                  />
                </svg>
                <p>Last Updated - </p>
                <p>February 22, 2020</p>
                <svg
                  className="ms-5"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.91878 3.66546C5.47444 2.04501 7.62526 1.04163 9.9999 1.04163C12.3745 1.04163 14.5253 2.04501 16.081 3.66546C17.6366 5.28593 18.5999 7.52638 18.5999 9.99996C18.5999 12.4735 17.6366 14.714 16.081 16.3345C14.5253 17.9549 12.3745 18.9583 9.9999 18.9583C7.62526 18.9583 5.47444 17.9549 3.91878 16.3345C2.36315 14.714 1.3999 12.4735 1.3999 9.99996C1.3999 7.52638 2.36315 5.28593 3.91878 3.66546ZM9.9999 2.29163C7.9563 2.29163 6.10713 3.15373 4.76731 4.54934C3.42751 5.94499 2.5999 7.87121 2.5999 9.99996C2.5999 12.1287 3.42752 14.055 4.76731 15.4505C6.10713 16.8462 7.9563 17.7083 9.9999 17.7083C12.0435 17.7083 13.8927 16.8462 15.2325 15.4505C16.5723 14.055 17.3999 12.1287 17.3999 9.99996C17.3999 7.87121 16.5723 5.94498 15.2325 4.54934C13.8927 3.15373 12.0435 2.29163 9.9999 2.29163Z"
                    fill="#626E79"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 4.58337C10.5523 4.58337 11 5.04975 11 5.62504C11 6.20033 10.5523 6.66671 10 6.66671C9.44776 6.66671 9 6.20033 9 5.62504C9 5.04975 9.44776 4.58337 10 4.58337Z"
                    fill="#626E79"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.7998 8.33325C8.7998 7.98807 9.06844 7.70825 9.3998 7.70825H10.1998C10.5312 7.70825 10.7998 7.98807 10.7998 8.33325V14.1666C10.7998 14.5118 10.5312 14.7916 10.1998 14.7916C9.86844 14.7916 9.5998 14.5118 9.5998 14.1666V8.95827H9.3998C9.06844 8.95827 8.7998 8.67844 8.7998 8.33325Z"
                    fill="#626E79"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.2002 14.1666C8.2002 13.8215 8.46884 13.5416 8.8002 13.5416H11.6002C11.9316 13.5416 12.2002 13.8215 12.2002 14.1666C12.2002 14.5118 11.9316 14.7916 11.6002 14.7916H8.8002C8.46884 14.7916 8.2002 14.5118 8.2002 14.1666Z"
                    fill="#626E79"
                  />
                </svg>

                <p>Advertising Disclosure</p>
              </div>
              <div className="flex items-center Last">
                <p>Top Relevant</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.96967 8.61091C6.26256 8.32973 6.73744 8.32973 7.03033 8.61091L12.5 13.8617L17.9697 8.61091C18.2626 8.32973 18.7374 8.32973 19.0303 8.61091C19.3232 8.89208 19.3232 9.34796 19.0303 9.62911L13.0303 15.3891C12.7374 15.6703 12.2626 15.6703 11.9697 15.3891L5.96967 9.62911C5.67678 9.34796 5.67678 8.89208 5.96967 8.61091Z"
                    fill="#626E79"
                  />
                </svg>
              </div>
            </div>
          </div>
          <hr style={{ border: "1px solid rgba(225, 228, 230, 1)" }}></hr>
        </div>
      </div>
      <div className="p-2 py-4">
        <div
          className="flex items-center gap-10 Last"
          style={{ color: "rgba(75, 86, 101, 1)" }}
        >
          <p>Tools</p>
          <p>AWS Builder</p>
          <p>Start Build</p>
          <p>Build Supplies</p>
          <p>Tooling</p>
          <p>BlueHosting</p>
        </div>
      </div>
      <div
        className="flex items-center gap-3 Last"
        style={{ color: "rgba(92, 104, 116, 1)" }}
      >
        <p className="mb-1">Home</p>

        <svg
          width="10"
          height="9"
          viewBox="0 0 10 9"
          className=""
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z"
            fill="#5C6874"
          />
        </svg>
        <p className="mb-1">Hosting for all</p>
        <svg
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z"
            fill="#5C6874"
          />
        </svg>
        <p className="mb-1">Hosting</p>
        <svg
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z"
            fill="#5C6874"
          />
        </svg>
        <p className="mb-1">Hosting6</p>
        <svg
          width="10"
          height="9"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z"
            fill="#5C6874"
          />
        </svg>
        <p className="mb-1">Hosting5</p>
      </div>
      <div>
        <MainCard />
      </div>
      <div className="mt-14">
        <p style={{fontSize:"32px", color:"rgba(44, 56, 74, 1)"}}>Related deals you might like for</p>
        <div>
          <DealsCard />
        </div>
      </div>
     
    </div>
  );
}

export default MainComponent;
