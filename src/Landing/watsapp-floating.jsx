import React from "react";

const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/917349280036?text=Hello%20I%20would%20like%20to%20know%20more"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "120px",
        right: "20px",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.1)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <img
        src="/images/whatsapp.png"
        alt="WhatsApp"
        style={{
          width: "50px",
          height: "50px",
        }}
      />
    </a>
  );
};

export default WhatsAppFloating;
