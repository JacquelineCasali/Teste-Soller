import CardDetalhe from "./CardDetalhe";
import "./Ler.css";
import propTypes from "prop-types";

export default function LerCard({ test, onSair }) {
  return (
    <>
      <div className="background">
        <div className="modals">
          <div className="detalhe-image">
            <div className="x" onClick={onSair}>
              x
            </div>
            <div className="text-modal">
              <CardDetalhe data={test} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
LerCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
