import React, { useState, useRef, useEffect } from "react";
import "./filter.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import FilterModal from "./FilterModal";

export default function Filter({ children, onApply, label, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(undefined);
  const buttonRef = useRef(undefined);
  const modalRef = useRef(undefined);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick =
        dropdownRef.current && dropdownRef.current.contains(event.target);
      const isButtonClick =
        buttonRef.current && buttonRef.current.contains(event.target);
      const isModalClick =
        modalRef.current && modalRef.current.contains(event.target);

      if (isDropdownClick || isButtonClick || isModalClick) {
        /* If the ref is not defined or the user clicked on the menu, we don’t do anything. */
        return;
      }

      /* Otherwise we close the menu. */
      setIsOpen(false);
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    ); /* handle desktops */
    document.addEventListener(
      "touchstart",
      handleClickOutside
    ); /* handle touch devices */

    /* Event cleanup */
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      ); /* handle desktops */
      document.removeEventListener(
        "touchstart",
        handleClickOutside
      ); /* handle touch devices */
    };
  }, [dropdownRef, buttonRef, modalRef]);

  const handleApply = (event) => {
    setIsOpen(false);
    onApply(event);
  };

  return (
    <div className="filter">
      <div
        style={{
          userSelect: "none",
          height: "90%",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <span style={{ fontSize: "15px" }}>{children}</span>
          <span style={{ fontSize: "18px", fontWeight: "600" }}>Any</span>
        </div>
        <div>
          <KeyboardArrowDownIcon />
        </div>
      </div>

      {isOpen && (
        <div ref={dropdownRef} className="filter__dropdown">
          <div
            className="options__container"
            style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          >
            {options.map((option) => {
              return (
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id={option}
                    name={option}
                    value={option}
                    onChange={() => {}}
                  />
                  <label className="checkbox-label" for={option}>
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="filter__dropdown__actions"></div>
          <div className="clear-button" onClick={() => {}}>
            Clear Selection
          </div>
        </div>
      )}
    </div>
  );
}
