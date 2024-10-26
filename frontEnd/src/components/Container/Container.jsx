import "./Container.css";
import Button from "../Button/Button";
import styles from "../Button/Button.module.css";
export default function Container() {
  return (
    <section className="divcontainer">
      <div className="sectionTextc">
        <div>
          <div className="topBarText">
            <h6 className="caption">Get the Sun to power your home</h6>
            <h1 className="secundary">
              All the power that you need for your house is now available
            </h1>
          </div>

          <div className="screenI">
            <img className="screen" src={"/image/Macbook.png"} alt="" />
          </div>
        </div>

        <div className="eclipse">
          <Button
            text="Request a Quote"
            theme={styles.amarelo}
            styles={{ margin: "140px" }}
          />
          <p className="textRight">Egestas fringilla aliquam leo</p>
        </div>
      </div>
    </section>
  );
}
