// import React, { useState } from "react";
// import { Navbar, Nav, Container, Form } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const AppNavbar = () => {
//   const { t, i18n } = useTranslation();
//   const [expanded, setExpanded] = useState(false);

//   const navItems = [
//     { path: "/", label: t("home"), icon: "🏠" },
//     { path: "/seva-list", label: t("sevaList"), icon: "🪔" },
//     { path: "/history", label: t("history"), icon: "📜" },
//     { path: "/news-events", label: t("newsEvents"), icon: "📢" },
//     { path: "/volunteer", label: t("volunteer"), icon: "🙏" },
//     { path: "/donate", label: t("donate"), icon: "💰" },
//     { path: "/calendar", label: t("calendar"), icon: "📅" },
//     { path: "/contact", label: t("contact"), icon: "✉️" },
//   ];

//   const handleLanguageChange = (e) => {
//     i18n.changeLanguage(e.target.value);
//     setExpanded(false);
//   };

//   return (
//     <Navbar
//       expand="lg"
//       bg="warning"
//       variant="dark"
//       expanded={expanded}
//       onToggle={setExpanded}
//       collapseOnSelect
//       sticky="top"
//     >
//       <Container fluid>
//         <Navbar.Brand href="/" style={{ fontWeight: "300", fontSize: "1.3rem", color: "#fff" }}>
//           {t("Sri Anjaneya Swami Temple")}
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbar-nav" />

//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto d-flex flex-wrap">
//             {navItems.map(({ path, label, icon }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 onClick={() => setExpanded(false)}
//                 style={{
//                   color: "#fff",
//                   textDecoration: "none",
//                   width: "80px",
//                   margin: "0 6px 8px",
//                   textAlign: "center",
//                   borderRadius: "10px",
//                   padding: "6px 4px",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   whiteSpace: "normal",
//                   wordWrap: "break-word",
//                 }}
//                 activeStyle={{
//                   backgroundColor: "#fff",
//                   color: "#FF9933",
//                   fontWeight: "700",
//                   boxShadow: "0 0 8px rgba(255,153,51,0.6)",
//                 }}
//               >
//                 <span style={{ fontSize: "1.4rem", marginBottom: "4px" }}>{icon}</span>
//                 <span>{label}</span>
//               </NavLink>
//             ))}
//           </Nav>
// <Form.Select
//   aria-label="Select Language"
//   value={i18n.language}
//   onChange={handleLanguageChange}
//   style={{
//     maxWidth: "120px",
//     marginLeft: "10px",
//     backgroundColor: "#FF9933",    // Navbar orange background
//     color: "#fff",                 // White text for contrast
//     border: "none",
//     fontWeight: "600",
//     cursor: "pointer",
//     boxShadow: "none",
//   }}
// >
//   <option value="te" style={{ backgroundColor: "#FF9933", color: "#fff" }}>తెలుగు</option>
//   <option value="en" style={{ backgroundColor: "#FF9933", color: "#fff" }}>English</option>
// </Form.Select>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default AppNavbar;







import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppNavbar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [clickedPath, setClickedPath] = useState(null); // Track clicked path for highlight
  const hoverTimeoutRef = useRef(null);

  const location = useLocation();

  const navItems = [
    { path: "/", label: t("home"), icon: "🏠" },
    { path: "/seva-list", label: t("sevaList"), icon: "📿" },
    { path: "/history", label: t("history"), icon: "📜" },
    { path: "/news-events", label: t("newsEvents"), icon: "📰" },
    { path: "/volunteer", label: t("volunteer"), icon: "🙋" },
    { path: "/donate", label: t("donate"), icon: "💰" },
    { path: "/calendar", label: t("calendar"), icon: "📅" },
    { path: "/contact", label: t("contact"), icon: "📞" },
  ];

  // Clear clicked highlight after 3 seconds
  useEffect(() => {
    if (clickedPath !== null) {
      hoverTimeoutRef.current = setTimeout(() => {
        setClickedPath(null);
      }, 3000);
    }
    return () => clearTimeout(hoverTimeoutRef.current);
  }, [clickedPath]);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setExpanded(false);
  };

  // Styles
  const baseLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    width: "75px",
    margin: "0 8px",
    textAlign: "center",
    borderRadius: "10px",
    padding: "8px 0",
    fontWeight: "800",
    fontSize: "0.85rem",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    cursor: "pointer",
    transition:
      "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease, width 0.3s ease, padding 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  };

  const activeLinkStyle = {
    // backgroundColor: "#fff",
    // color: "#FF9933",
    // fontWeight: "900",
    // boxShadow: "0 0 8px rgba(255,153,51,0.6)",
    // width: "75px",
    // padding: "8px 0",
  };

  const clickedLinkStyle = {
    // backgroundColor: "#fff",
    // color: "#FF9933",
    // fontWeight: "900",
    // boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    // width: "85px",
    // padding: "8px 5px",
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#fa8806" }}
        variant="dark"
        expanded={expanded}
        onToggle={setExpanded}
        collapseOnSelect
        sticky="top"
        className="py-1"
      >
        <Container
          fluid
          className="d-flex align-items-center"
          style={{
            justifyContent: expanded ? "center" : "space-between",
            flexWrap: "wrap",
          }}
        >
          <Navbar.Brand
            href="/"
            style={{ fontWeight: "1900", fontSize: "1.3rem", color: "#fff" }}
          >
            {t("Sri Anjaneya Swami Temple")}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav
              className="me-auto d-flex flex-wrap py-2"
              style={{
                justifyContent: expanded ? "center" : "flex-end",
                width: "100%",
              }}
            >
              {navItems.map(({ path, label, icon }) => {
                const isActiveRoute =
                  location.pathname === path ||
                  (path === "/" && location.pathname === "/");
                const isClicked = clickedPath === path;

                // Compute style
                let combinedStyle = { ...baseLinkStyle };
                if (isActiveRoute)
                  combinedStyle = { ...combinedStyle, ...activeLinkStyle };
                else if (isClicked)
                  combinedStyle = { ...combinedStyle, ...clickedLinkStyle };

                return (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => {
                      setClickedPath(path);
                      setExpanded(false);
                    }}
                    style={combinedStyle}
                    className={({ isActive }) =>
                      isActive ? "active-nav-link" : ""
                    }
                  >
                   {(isActiveRoute || isClicked) && (
                      <span style={{ fontSize: "1.5rem", lineHeight: "1" }}>
                        {icon}
                      </span>
                    )}                    
                    <span className={i18n.language === "te" ? "telugu-label" : ""}>
                      {label}
                    </span>
                  </NavLink>
                );
              })}
            </Nav>

            <Form.Select
              aria-label="Select Language"
              value={i18n.language}
              onChange={handleLanguageChange}
              className="language-select"
              style={{
                maxWidth: "120px",
                marginLeft: "7px",
                backgroundColor: "#FF9933",
                color: "#fff",
                border: "none",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "none",
                marginTop: expanded ? "1rem" : "0",
                marginBottom: expanded ? "0.5rem" : "0",
              }}
            >
              <option value="te" style={{ backgroundColor: "#FF9933", color: "#fff" }}>
                తెలుగు
              </option>
              <option value="en" style={{ backgroundColor: "#FF9933", color: "#fff" }}>
                English
              </option>
            </Form.Select>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Inline styles for Telugu font size on desktop & mobile margin-left fix */}
      <style>
        {`
          /* Telugu labels smaller font on desktop */
          @media (min-width: 992px) {
            .telugu-label {
              font-size: 0.75rem !important;
            }
          }

          /* Center or right align Nav on mobile */
          @media (max-width: 991px) {
            .navbar-collapse {
              text-align: center;
            }

            /* Add margin-left 10px on mobile for language select */
            .language-select {
              margin-left: 10px !important;
            }
          }

          .active-nav-link {
            /* Optional styling for active nav link if needed */
          }

          a.nav-link:hover {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default AppNavbar;
