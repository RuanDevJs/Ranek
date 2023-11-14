import React, { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";

import Image from "next/image";

import * as Styled from "@/src/styles/pages/home";
import { MagnifyingGlass, ShoppingCart, User } from "phosphor-react";
import { GetServerSideProps, GetStaticProps } from "next";

interface IData {
  id: string;
  fotos: {
    titulo: string;
    src: string;
  }[];
  nome: string;
  preco: number;
  descricao: string;
  vendido: "true" | "false";
  usuario_id: string;
}

interface Props {
  data: IData[];
}

export default function Home({ data }: Props) {
  const [currentProduct, setCurrentProduct] = useState("");
  const productsRef = useRef<HTMLDivElement>(null);

  function handleClick(currentIndex: number) {
    if (productsRef.current === null) return;

    const productsPoster = document.querySelectorAll(".current-poster");

    productsPoster.forEach((productElement) => {
      productElement.classList.remove("active");
      productElement.classList.remove(
        `animate-${productElement.dataset.animation}`
      );
    });

    productsPoster[currentIndex].classList.add("active");
    productsPoster[currentIndex].classList.add(
      `animate-${productsPoster[currentIndex].dataset.animation}`
    );
    console.debug("productsPoster", productsPoster);
  }

  return (
    <Styled.Container>
      <Styled.Left>
        <Styled.Header>
          <div className="title">
            <Styled.Title>Ranek</Styled.Title>
          </div>
          <Styled.Navigation>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Styled.Navigation>
        </Styled.Header>
        <Styled.Intro className="intro">
          <div className="intro-heading">
            <span>Melhores preços do Brasil</span>
            <h1>
              Ranek, melhor site de vendas <br /> de Produtos Tecnológicos
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              omnis doloremque dicta dolores! Ab, eius?
            </p>
          </div>
          <div className="intro-explorer">
            <button className="explorer">Explorar</button>
            <button className="learn-more">Saber mais</button>
          </div>
          <Styled.Products className="products" ref={productsRef}>
            {data.map((product, index) => {
              return (
                <Styled.Product
                  key={`$product-key=${product.id}`}
                  className="product"
                  onClick={() => handleClick(index)}
                >
                  <div className="product-img">
                    <Image
                      src={product.fotos[0].src}
                      alt={product.nome}
                      width={160}
                      height={160}
                      draggable={false}
                    />
                  </div>
                  <div className="info">
                    <h2 className="info-title">{product.nome}</h2>
                    <a href="#">
                      {Intl.NumberFormat("pt-br", {
                        currency: "BRL",
                        style: "currency",
                      }).format(product.preco)}
                    </a>
                  </div>
                </Styled.Product>
              );
            })}
          </Styled.Products>
        </Styled.Intro>
      </Styled.Left>
      <Styled.Right>
        <Styled.Menu>
          <ul>
            <li>
              <a href="#">
                <MagnifyingGlass size={18} color="#222" />
              </a>
            </li>
            <li>
              <a href="#">
                <ShoppingCart size={18} color="#222" />
              </a>
            </li>
            <li>
              <a href="#">
                <User size={18} color="#222" />
              </a>
            </li>
          </ul>
        </Styled.Menu>
        <Styled.Poster className="poster">
          <div className="product-poster">
            {data.map((product, index) => {
              return (
                <Image
                  className="current-poster"
                  key={product.id}
                  src={product.fotos[0].src}
                  width={460}
                  height={460}
                  alt={product.fotos[0].titulo}
                  title={product.fotos[0].titulo}
                  draggable="false"
                  data-animation={index % 2 === 0 ? "left" : "up"}
                  style={{ backgroundImage: `url('${product.fotos[0].src}')` }}
                />
              );
            })}
            <div className="product-modal">
              <button className="buy-now">Comprar agora</button>
            </div>
          </div>
        </Styled.Poster>
      </Styled.Right>
    </Styled.Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = (await (
    await fetch("https://ranekapi.origamid.dev/json/api/produto?_limit=6")
  ).json()) as IData[];

  return {
    props: {
      data,
    },
  };
};
