import React, { useEffect, useState } from "react";
import Input from "@mui/joy/Input";
import { DialogTitle, Drawer, ModalClose } from "@mui/joy";
import "./Css/Navbar.css";
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-3 bg-gray-800 flex items-center justify-center navba text-white gap-10">
      <div>
        <Input
          style={{ width: "250px" }}
          startDecorator={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          variant="outlined"
          color="neutral"
        />
      </div>
      {isSmallScreen && (
        <div
          variant="soft"
          color="none"
          className=" lg:hidden" // Hide on large screens
          lg={{ className: "hidden" }}
          type="button"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      )}
      <Drawer
        style={{ width: "100%", backgroundColor: "black" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalClose />
        <DialogTitle>
          <div className="text-center m-auto py-5">
            <div className="mb-4" onClick={() => setOpen(false)}>
              <div
                style={{ color: "black" }} // Set text color to black
              >
                Categories
              </div>
            </div>
            <div onClick={() => setOpen(false)}>
              <div>Website Builders</div>
            </div>
            <div className="mt-4" onClick={() => setOpen(false)}>
              <div>Today's deals</div>
            </div>
          </div>
        </DialogTitle>
      </Drawer>

      <div className="hidden lg:flex flex-col ">
        <div className="flex gap-14 ">
          <div className="text-gray-300 hover:cursor-pointer">Categories</div>
          <div className="text-gray-300 hover:cursor-pointer">
            Website Builders
          </div>
          <div className="text-gray-300 hover:cursor-pointer">
            Today's deals
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
