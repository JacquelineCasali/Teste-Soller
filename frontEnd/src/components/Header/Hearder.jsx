import { Link } from "react-router-dom";
import "./Hearder.css";
import Button from "../Button/Button";
import styles from "../Button/Button.module.css";
import { RiHeadphoneLine } from "react-icons/ri";

export default function Navbar() {
  // menu

  return (
    <section className="header">
      <header>
        <div className="container">
          <div className="left">
            <h1 className="h1">Soller</h1>
            <ul className="nav-menu">
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                {" "}
                <Link to="#solutions">Solutions</Link>
              </li>

              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Configure</Link>
              </li>
            </ul>
          </div>
          <div className="btn-group">
            <div className="fone">
              <RiHeadphoneLine
                size={24}
                style={{
                  color: "#0369A1",
                  fontWeight: "bold",
                  marginTop: "5px",
                }}
              />

              <p className="buttonText">555 818 282</p>
            </div>
        <div>
          
        </div>
            <Button text="Request a Quote" theme={styles.roxo}  />
           
          </div>
        </div>
      </header>
      <div className="col">
        <div className="bannerleft">
          <div className="sectionTextcol">
            <h1 className="sectionTextH1">Get the Sun to Power Your Home</h1>
            <p className="sectionTextParagrafo">
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque.
            </p>
            <Button text="Request a Quote" theme={styles.roxo} />
          </div>
          <div className="sectionTextcol2">
            <p className="sectionTextParagrafo2">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.”
            </p>
            <div className="user-card">
              <div className="image">
                {<img src={"/image/courtney.jpg"} alt="" /> ? (
                  <img src={"/image/courtney.jpg"} alt="" />
                ) : (
                  ""
                )}
              </div>
              <div className="detalis">
                <span className="nome">Rwanda Melflor</span>

                <span className="categoria">zerowaste.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
