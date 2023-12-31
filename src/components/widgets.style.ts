"use client";

import { styled } from "styled-components";

export const Screen = styled.div`
  background: #18181b;
  width: 375px;
  position: relative;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 16px 16px 0 0;
  .title {
    font-size: 23px;
    color: white;
  }
  .title .arrow-left{
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 10px;
  }
  .selection {
    gap: 10px;
    display: flex;
    flex-direction: row;
  }
  textarea::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }

  textarea::-webkit-scrollbar-track {
    background: none; /* color of the tracking area */
  }

  textarea::-webkit-scrollbar-thumb {
    position: absolute;
    z-index: 9;
    border-radius: 50px;
    background-color: #52525B; /* color of the scroll thumb */
    border-radius: none; /* roundness of the scroll thumb */
    border: none; /* creates padding around scroll thumb */
  }
  .selection textarea {
    resize: none;
    color: white;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;

    outline: none;
    border-radius: 4px;
    background: #18181b;
    border: 1px solid #52525B;
  }
  .selection button {
    cursor: pointer;
    height: 40px;
    background: #996dff;
    color: white;
    border: none;
  }
  .card {
    cursor: pointer;
    color: white;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 103px;
    height: 112px;
    background: #27272a;
    transition: 0.5s;
  }
  .card:hover {
    transform: translateY(-10px);
  }
  p,
  a {
    color: gray;
  }
  .end{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: white;
  }
  .end h1{
    font-size: 23px;
  }
  .end button{
    cursor: pointer;
    padding: 10px;
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    background: #27272A;
    width: 70%;
    transition:  1s;
    scale: 0.9;
  }
  .end button:hover{
    scale: 1;
  }


  @media (max-width: 400px) {
    width: 100%;
    height: 50vh;
    .selection {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    textarea{
      width: 80%;
    }
    button{
      width: 80%;
    }
  } 
`;
