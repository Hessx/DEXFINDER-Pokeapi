import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Ajusta para dispositivos menores
  maxWidth: 400, // Largura máxima
  bgcolor: "white",
  borderRadius: "12px",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
  p: 4,
  textAlign: "center",
};

const buttonStyle = {
  color: "#282c34",
  textTransform: "none",
  fontSize: "10px",
  fontWeight: "bold",
  borderRadius: "8px",
  fontFamily: "'Press Start 2P', serif",
  padding: "12px 12px",
  margin: "-10px auto",
  "&:hover": {
    backgroundColor: "#3b3f47",
    color: "#fff", // Cor branca correta
  },
  "&:active": {
    backgroundColor: "#1c1f24",
  },
};

const titleStyle = {
  fontFamily: "'Press Start 2P', serif",
  color: "#282c34",
  mb: 2,
  fontSize: "16px",
};

const contentStyle = {
  fontFamily: "'Press Start 2P', serif",
  fontSize: "12px",
  color: "#555",
  lineHeight: "1.5",
  mt: 2,
};

export default function BasicModal({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Botão para abrir o modal */}
      <Button onClick={() => setOpen(true)} variant="text" sx={buttonStyle}>
        Full Stats
      </Button>

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
            p: 4,
            textAlign: "center",
          }}
        >
          {/* Título */}
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontFamily: "'Press Start 2P', serif",
              color: "#282c34",
              mb: 2,
              fontSize: "16px",
            }}
          >
            {title}
          </Typography>
          {/* Conteúdo */}
          <Typography
            id="modal-modal-description"
            sx={{
              fontFamily: "'Press Start 2P', serif",
              fontSize: "12px",
              color: "#555",
              lineHeight: "1.5",
              mt: 2,
            }}
          >
            {content}
          </Typography>
          {/* Botão para fechar */}
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            sx={{
              color: "#282c34",
              backgroundColor: "white",
              textTransform: "none",
              fontFamily: "'Press Start 2P', serif",
              fontSize: "10px",
              fontWeight: "bold",
              padding: "12px 12px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              mt: 3,
              "&:hover": {
                backgroundColor: "#3b3f47",
                color: "#fff", // Cor branca correta
              },
              "&:active": {
                backgroundColor: "#1c1f24",
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
