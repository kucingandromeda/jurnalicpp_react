import logo from "./logo/jurnalicpptiny.png";
import discord from "./logo/discord.png";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="" />
          <div className="logo-desc">
            <p className="redekto">REDEKTO</p>
            <p>
              kucing_andromeda <br />
              kucing_andromeda's team
            </p>
            <p>
              developer contact
              <br /> instagram:@kucing_andromeda1
            </p>
          </div>
        </div>
        <div className="media">
          <div className="media-logo">
            <div className="discord">
              <img src={discord} alt="" />
            </div>
          </div>
          <div className="footer-desc">
            <p>
              Project yang meningkatkan penggunaan teknologi ke arah yang
              positif
            </p>
            <p>MAN INSAN CENDEKIA PADANG PARIAMAN</p>
            <p>
              Sintuak, Kec. Sintuk Toboh Gadang, Kabupaten Padang Pariaman,
              Sumatera Barat
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
