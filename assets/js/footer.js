export class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                footer {
                    text-align: center;
                    margin-bottom: 20px;
                    color: rgba(255, 255, 255, 0);
                }
                footer a {
                    color: inherit;
                }
                #footer-top {
                    height: 30px;
                    width: 30px;
                    vertical-align: middle;
                    margin-left: 10px;
                    text-decoration: none;
                }
                footer p {
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 18px;
                    text-indent: 0;
                }
                mark 
                {
                    background-color: #39cf06c3;
                    color: #fff;
                }
            </style>
            <footer>
                <abbr title="Topo">
                    <a href="#">
                        <img src="../assets/img/seta-para-cima.png" alt="Voltar ao topo" id="footer-top">
                    </a>
                </abbr>
                <mark><p>Copyright &copy; 2024</p><mark>
            </footer>
        `;
    }
}