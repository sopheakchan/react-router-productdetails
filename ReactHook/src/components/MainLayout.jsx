import React from 'react'
import  NavbarComponent from './NavbarComponent';
import { Outlet } from "react-router-dom"
import FooterComponent from "./FooterComponent";

export default function MainLayout() {
  return (
    <>
      <header>
      <NavbarComponent/>
      </header>
      <main>
        <Outlet>
            
        </Outlet>
      </main>
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </>
  )
}


