"use client";

import React from "react";
import styles from "./page.module.css";
interface CustomTxtProps {
  children: React.ReactNode;
}

const CustomTxt = ({ children }: CustomTxtProps) => {
  return <div className={styles.customTxt}>{children}</div>;
};

export default CustomTxt;