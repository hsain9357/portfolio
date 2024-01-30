import React from "react";
import {
  ToggleLightAndDarkModeContainer,
  ToggleInput,
  ToggleLabel,
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogoLink,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
} from "./NavbarStyledComponent";

import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";

const Navbar = ({ handleChange, isChecked }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavLogoLink
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: `${theme.logoColor}`,
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </NavLogoLink>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
      <ToggleLightAndDarkModeContainer>
        <ToggleInput
          type="checkbox"
          id="check"
          onChange={handleChange}
          checked={isChecked}
          title="dark and light mode"
        />
        <ToggleLabel htmlFor="check"
    ></ToggleLabel>
      </ToggleLightAndDarkModeContainer>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
      <ToggleLightAndDarkModeContainer>
        <ToggleInput
          type="checkbox"
          id="check"
          onChange={handleChange}
          checked={isChecked}
          title="dark and light mode"
        />
        <ToggleLabel htmlFor="check"
    ></ToggleLabel>
      </ToggleLightAndDarkModeContainer>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
