import Layout from "@/components/Wrappers/Layout";
import Image from "next/image";

import searchLogo from "../assets/searchlogo.png";
import { useState } from "react";
import headerImg from "../assets/header.jpg";
import Link from "next/link";
import OurDoctors from "@/components/OurDoctors";
export default function Gallery(options) {



  return (
    <Layout>
      <OurDoctors name={"Our Product Gallery"} />
    </Layout>
  );
}
