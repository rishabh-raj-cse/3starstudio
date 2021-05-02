import "./container.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
function container() {
  return (
    <div className="container">
      <div className="container-text">
        <div className="hero-text">
          <span>
            <hr /> <p>Hello</p>
          </span>

          <h1>
            WELCOME TO <br />3 START STUDIO
          </h1>

          <p>
            Ullamco exercitation sunt id minim consectetur aliquip id velit elit
            consectetur ea aliqua incididunt occaecat. Nisi anim enim elit dolor
            laborum adipisicing elit incididunt magna commodo cillum dolore
            velit. Commodo enim non cupidatat do
          </p>

          <div className="buttons-area">
            <button>BOOK-US</button>
            <div id="icon-next">
            <a> Next <ArrowForwardIcon id="next"/> </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-text"></div>
    </div>
  );
}

export default container;
