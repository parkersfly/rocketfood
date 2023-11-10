import { Container, Search } from "./styles";

import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

import { USER_ROLE } from "../../utils/role";

import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Header({ count }) {
  const { user } = useAuth();
  const [search, setSearch] = useState("");

  const { signOut } = useAuth();
  const { fetchPlates, plates } = useSearch();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  async function letMeSeeThePlate(plateId){
    await api.get(`/details/${plateId}`)
  }

  useEffect(() => {
    fetchPlates(search);
    
  }, [search]);

  return (
    <Container>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <>
          <div className="mobileHeaderAdmin">
            <Link to="/menu">
              <List size={32} />
            </Link>

            <div className="flex items-center justify-center">
              <Logo />
              <p className="roboto robotoSmallestRegular">admin</p>
            </div>
          </div>

          <div className="webHeaderAdmin items-center justify-center">
            <div className="logo">
              <Logo />
              <span className="roboto robotoSmallestRegular">admin</span>
            </div>
            <Search className="flex items-center justify-center">
              <label htmlFor="">
                <MagnifyingGlass size={20} />
              </label>
              <input
                type="text"
                className="roboto robotoSmallRegular"
                placeholder="Busque por pratos ou ingredientes"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Search>
            <Link
              to="/new"
              className="poppins poppins100Medium flex items-center justify-center"
            >
              Novo prato
            </Link>
            <button onClick={signOut}>
              <SignOut size={32} />
            </button>
          </div>
        </>
      )}
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          <div className="mobileHeaderUser">
            <Link to="/menu">
              <List size={32} />
            </Link>

            <Logo />

            <button className="request">
              <Receipt size={32} />
              <div>
                <p className="poppins100Medium">0</p>
              </div>
            </button>
          </div>

          <div className="webHeaderUser items-center justify-center">
            <Logo />
            <Search>
              <div className="flex items-center justify-center">
                <label htmlFor="">
                  <MagnifyingGlass size={20} />
                </label>
                <input
                  type="text"
                  className="roboto robotoSmallRegular"
                  placeholder="Busque por pratos ou ingredientes"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <ul>
                {
                  search.length > 0 &&
                  plates.map((plate, index) => (
                    <li key={index}>
                      <a href={`/details/?${plate.id}`} className="flex items-center">
                        <img src="https://plus.unsplash.com/premium_photo-1664472693779-c129e03c1a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1hY2FyciVDMyVBM298ZW58MHx8MHx8fDA%3D" 
                        alt="" />
                        <span>{plate.title}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </Search>
            <Link to="/" className="flex items-center justify-center p-0">
              <Button icon={Receipt} text={`pedidos (${0})`} />
            </Link>
            <button onClick={handleSignOut}>
              <SignOut size={32} />
            </button>
          </div>
        </>
      )}
    </Container>
  );
}
