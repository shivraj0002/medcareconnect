import React from "react";
import doc1 from "../assets/vanozyme.webp";
import doc2 from "../assets/vanzit_d3.webp"
import doc3 from "../assets/biafe-xt.webp";
import doc4 from "../assets/pimtop.webp";
import Image from "next/image";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const docData = [
  {
    name: "VanoZyme",
    img: doc1,
    specialization: "Alpha Amylase & Pepsin Syrup",
    about: "Alpha Amylase & Pepsin Syrup, SugerFree (200ml)...",
    key: 1
  },
  {
    name: "VanZit-D3",
    img: doc2,
    specialization: "Cholecalciferol Drops)",
    about: "Cholecalciferol (Vitamin D3) Drops Orange Flavour ...",
    key: 2
  },
  {
    name: "Biafe XT",
    img: doc3,
    specialization: "Ferrous Ascorbate, Folic Acid & Zinc Tablet",
    about: "Ferrous Ascorbate, Folic Acid & Zinc Tablets...",
    key: 3
  },
  {
    name: "PimTop D-SR",
    img: doc4,
    specialization: "PimTop D-SR Capsules",
    about: "Pantoprazole Gastro-resistant & Domperidone Prolonged-release Capsules I.P. ...",
    key: 4
  }
]

const OurDoctors = ({ name }) => {
  return (
    <div className="bg-yellow-50 pb-4">
      <div className="text-center py-4">
        <h3 className="text-3xl font-extrabold">{name ? name : "Our Products"}</h3>
        <p className="text-xl font-semibold py-2"></p>
      </div>
      <div className="flex flex-wrap gap-10 justify-start pl-4">
        {docData.map((e) => {
          return (
            <Card sx={{ maxWidth: 325 }} key={e.key}>
              <Image src={e.img} style={{ height: 175 }} />
              <CardContent sx={{ height: 125 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={'bold'}>
                  {e.about}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.specialization}
                </Typography>

              </CardContent>
              <CardActions >
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OurDoctors;
