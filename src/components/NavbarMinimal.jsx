"use client";

import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import classes from "./NavbarMinimal.module.css";
import {
  remover,
  SplitterIcon,
  Pitcher,
  Bpm,
  Cutter,
  Direct,
  Mike,
  Karaoke,
  Flag,
  Support,
} from "./icons";

function NavbarLink({ icon: Icon, label, active, onClick }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: remover, label: "Remover" },
  { icon: SplitterIcon, label: "Splitter" },
  { icon: Pitcher, label: "Pitcher" },
  { icon: Bpm, label: "Key BPM Finder" },
  { icon: Cutter, label: "Cutter" },
  { icon: Direct, label: "Joiner" },
  { icon: Mike, label: "Recorder" },
  { icon: Karaoke, label: "Karaoke" },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <div
      key={link.label}
      style={{
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavbarLink
        icon={link.icon}
        label={link.label}
        active={index === active}
        onClick={() => setActive(index)}
      />
      <p
        style={{
          color: index === active ? "#fff" : "#474751",
          fontSize: "0.85rem",
          filter: index === active ? "brightness(200%)" : "none",
          textAlign: "center",
        }}
      >
        {link.label}
      </p>
    </div>
  ));

  return (
    <>
      <nav className={classes.navbar}>
        <Center>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
            style={{ transform: "scale(-1, 1)" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        </Center>

        <div
          className={classes.navbarMain}
          style={{
            maxHeight: "75%",
            overflowY: "auto",
          }}
        >
          <Stack justify="center" gap={0}>
            {links}
          </Stack>
        </div>

        <div className={classes.navbarLast}>
          <Stack justify="center" gap={0}>
            <NavbarLink icon={Support} label="support" />
            <div style={{ transform: "scale(0.55)" }}>
              <NavbarLink icon={Flag} label="Logout" />
            </div>
          </Stack>
        </div>
      </nav>
    </>
  );
}
