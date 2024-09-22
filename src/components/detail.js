// detail.js
import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { mascotaId } = useParams();

  // Recupera las mascotas de localStorage
  const mascotas = JSON.parse(localStorage.getItem("mascotas") || "[]");
  
  // Busca la mascota correspondiente
  const mascota = mascotas.find((m) => m.id === parseInt(mascotaId));

  if (!mascota) {
    return <div>No se encontró la mascota</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "auto", height: "auto", textAlign: "center" }} className="mb-3">
      <Card.Title>
            <h2>{mascota.nombre}</h2>
          </Card.Title>

        <Card.Img style={{ height: "22rem", objectFit: "cover" }} variant="top" src={mascota.foto} alt={mascota.descripcion} />
        <Card.Body>
          
          <Card.Text>{mascota.raza}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
