import React from "react";

const Footer = () => {
  const styles = {
    color: "#7b7b7b",
    fontStyle: "italic",
    backgroundColor: "#222",
    padding: "2em",
    textAlign: "center",
  };
  return (
    <p style={styles}>
      Site é apenas um agregador de links, nenhum arquivo está hospedado sob nosso domínio.
    </p>
  );
};

export default Footer;
