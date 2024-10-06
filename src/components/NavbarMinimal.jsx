"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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

function NavbarLink({ icon: Icon, active, onClick }) {
  return (
    <UnstyledButton
      onClick={onClick}
      className={classes.link}
      data-active={active || undefined}
    >
      <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
    </UnstyledButton>
  );
}

const mockdata = [
  { icon: remover, label: "Remover", url: "/" },
  { icon: SplitterIcon, label: "Splitter", url: "/splitter-ai" },
  { icon: Pitcher, label: "Pitcher", url: "/pitch" },
  { icon: Bpm, label: "Key BPM Finder", url: "/key-bpm-finder" },
  { icon: Cutter, label: "Cutter", url: "/cutter" },
  { icon: Direct, label: "Joiner", url: "/joiner" },
  { icon: Mike, label: "Recorder", url: "/voice-recorder" },
  { icon: Karaoke, label: "Karaoke", url: "/karaoke" },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <Link key={link.label} href={link.url} style={{ textDecoration: "none" }}>
      <div
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
          onClick={() => setActive(index)}
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
    </Link>
  ));

  useEffect(() => {
    for (let i = 0; i < mockdata.length; i++) {
      if (window.location.href.includes(mockdata[i].url)) {
        setActive(i);
      }
    }
  }, []);

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
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
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
            <Link href="/support">
              <NavbarLink icon={Support} label="support" />
            </Link>
            <div style={{ transform: "scale(0.55)" }}>
              <NavbarLink icon={Flag} label="Logout" />
            </div>
          </Stack>
        </div>
      </nav>
    </>
  );
}
