export const boxSx = {
  "&::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "#000",
    opacity: "0",
    zIndex: "1",
  },
  "&:hover .test": {
    display: "block",
  },
  "&:hover::before": {
    opacity: "0.7",
  },
} as const;

export const deleteButtonSx = {
  display: "none",
  position: "absolute",
  width: "80%",
  transform: "translateX(-50%)",
  bottom: "5%",
  left: "50%",
  zIndex: 1000,
} as const;

export const avatarSx = {
  cursor: "pointer",
  width: "100%",
  height: "100%",
  aspectRatio: "4/3",
  objectFit: "cover",
} as const;
