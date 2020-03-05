import styled from "styled-components";

export const Container = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 50px 0;
`;

export const Logotipo = styled.div`
   display: flex;
   align-items: center;
   width: 220px;
   height: 55px;
   background-color: #016;
   border: 1px solid #fff;
   border-radius: 7px;
`;

export const LogotipoImage = styled.img`
   width: 40px;
   height: 40px;
   margin-left: 6px;
   margin-right: 6px;
   border-radius: 7px;
`;

export const LogotipoText = styled.h4`
   color: #fff;
   font-size: 23px;
   font-weight: bold;
`;

export const Cart = styled.div`
   display: flex;
   align-items: center;
   text-decoration: none;
   transition: opacity 0.2s;

   &:hover {
      opacity: 0.7;
   }

   div {
      text-align: right;
      margin-right: 10px;

      strong {
         display: block;
         color: #fff;
      }

      span {
         font-size: 12px;
         color: #999;
      }
   }
`;
