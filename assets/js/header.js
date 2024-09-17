export class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 10px 75px;
                    background: transparent;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: .35s;
                    z-index: 100;
                }
                
                .header.rolagem {
                    background: linear-gradient(20deg, #85b742, #94e04c);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                }

                .logo {
                    font-size: 32px;
                    color: #fff;
                    text-decoration: none;
                    font-weight: 700;
                }
                
                .navbar {
                    display: flex;
                }

                .header a {
                    margin-left: 55px;
                }

                .navbar a {
                    position: relative;
                    font-size: 18px;
                    color: #fff;
                    font-weight: 500;
                    text-decoration: none;
                    margin-left: 45px;
                    margin-right: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .navbar a::before {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #23582ff5;
                    transition: .5s;
                }
                
                .navbar a:hover::before {
                    width: 100%;
                }
                
                /*Dropdown das Energias*/
                .dropdown {
                    position: relative;
                    margin-right: 20px;   
                    display: flex;
                    justify-content: center;
                    align-items: center;                 
                }
                
                .dropdown-content {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 40px;
                    background-color: rgba(220, 220, 220, 1);
                    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.566);
                    z-index: 1;
                }
                
                .dropdown-content a {
                    color: black;
                    padding: 12px 30px;
                    margin: 10px;
                    text-decoration: none;
                    display: block;
                }
                
                .dropdown-content a:hover {
                    background-color: #79db686a;
                }
                
                .dropdown:hover .dropdown-content {
                    display: block;
                }

            </style>
            <header class="header">
                <a href="home.html" class="logo"><img width="35%" src="../assets/img/logo.png" alt="Logo"></a>
                <nav class="navbar">
                    <a href="home.html">Home</a>
                    <div class="dropdown">
                        <a href="#">Energias Limpas</a>
                        <div class="dropdown-content">
                            <a href="energia-solar.html">Energia Solar</a>
                            <a href="energia-eolica.html">Energia Eólica</a>
                            <a href="energia-hidrica.html">Energia Hídrica</a>
                            <a href="energia-biomassa.html">Energia da Biomassa</a>
                            <a href="energia-geotermica.html">Energia Geotérmica</a>
                            <a href="energia-ondas-mares.html">Energia das Ondas e Marés</a>
                        </div>
                    </div>                    
                    <a href="trasportes-sustentaveis.html">Transportes Sustentáveis</a>
                    <a href="energias-sujas.html">Energias Sujas: malefícios</a>
                    <a href="contato.html">Contato</a>
                    <a href="sobre.html">Sobre</a>
                </nav>
            </header>  
        `;
  }
}

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("rolagem", this.window.scrollY > 60);
});