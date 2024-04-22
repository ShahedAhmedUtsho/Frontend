
"use client";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import {  NavLink } from "react-router-dom";

const Header = () => {
    const Links = <>
    
    <NavLink className='navlink' to='/'>Home</NavLink>
    <NavLink className='navlink' to='/mongodb'>MongoDB</NavLink>
    <NavLink className='navlink' to='/About'>About</NavLink>
    </>
  return (
    <Navbar fluid={true} className=" header  bg-transparent">
      <Navbar.Container className="flex items-center bg-transparent justify-between">
        <Navbar.Container className="flex bg-transparent items-center">
          <Navbar.Brand>
           <h2 className="text-xl text-gray-300">MongoDB</h2>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center text-gray-400 justify-between gap-8"
          >
            {Links}
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
             {Links}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" variant="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-600">Search</span>
          </Button>
          <Button size="sm">
            Contact
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
export default Header