import Soo from "https://unpkg.com/soo.js@1.0.9/build/soo.esm.js";


class Card extends Soo {
    css() {
        return `.card {
                    overflow:hidden;
                    width:100%;
                    height:100%;
                    border-radius: 15px;
                    box-shadow: 5px 5px 20px -5px rgba(0,0,0,0.6);
                    perspective: 1200px;
                    position: relative;
                    transform-style: preserve-3d;
                    transform: translatez(35px);
                    transition: transform 200ms ease-out;
                    background: url(${this.getAttribute("background")}) center / cover no-repeat;
                    background-position: calc(var(--mouseX) * 0.35px) calc(var(--mouseY) * -0.35px);
                }
                .card img {
                    transform: translateX(calc(var(--mouseX) * -1px)) translateY(calc(var(--mouseY) * 1px));
                }

                .title {
                    align-items: center;
                    bottom: 0;
                    display: flex;
                    flex-direction: column; 
                    height: 70px;
                    justify-content: center;
                    position: absolute;
                    width: 100%;
                    color:white;
                    font-size:20px;
                    z-index: 2;
                    text-shadow: calc(var(--mouseX) * -0.2px) calc(var(--mouseY) * -0.2px) 0.5px rgba(0,0,0,0.6);x);
                }

                @media screen and (max-width: 1024px) { 
                  .card {
                    height:200px;
                  }
                }
               `
    }
    render() {
        return HTML`<section class="card">
                        <img src="${this.getAttribute("img") || ""}"></img>
                        <h4 class="title">${this.getAttribute("title") || "title"}</h4>
                    </section>`
    }
}

class Cards extends Soo {
    installed() {
        const range = 40;
        const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

        document.addEventListener('mousemove', ({ x, y }) => {
            window.requestAnimationFrame(() => {
                const yValue = calcValue(y, window.innerHeight);
                const xValue = calcValue(x, window.innerWidth);

                this.style.setProperty('--mouseX', `${xValue}`);
                this.style.setProperty('--mouseY', `${yValue}`);
            })
        });
        window.addEventListener("deviceorientation", (event) => {
            window.requestAnimationFrame(() => {
                const yValue = calcValue(event.beta * 5, window.innerHeight);
                const xValue = calcValue(event.gamma * 5, window.innerWidth);
    
                this.style.setProperty('--mouseX', `${xValue}`);
                this.style.setProperty('--mouseY', `${yValue}`);
            })
        });
    }


    css() {
        return `
                :root {
                    --mouseX: 0px;
                    --mouseY: 0px;
                }
                :host {
                    background: #fff;
                    border-radius: 15px;
                    box-shadow: 0px 10px 20px 20px rgba(0,0,0,0.17);
                    display: grid;
                    padding: 30px 35px;
                    perspective: 1800px;
                    text-align: left;
                    transform-origin: 50% 50%;
                    transform-style: preserve-3d;
                    transform: rotateX(calc(var(--mouseY) * 1deg)) rotateY(calc(var(--mouseX) * 1deg));
                    min-width: 595px;
                    min-height: auto;
                    width:95%;
                    justify-self:center;
                }
                .cards {
                    display:grid;
                    width:100%;
                    height:100%;
                    grid-template-columns: repeat(3, 15vw);
                    grid-auto-rows:max-content;
                    grid-column-gap:30px;
                    grid-row-gap:30px;
                }
                
                img {
                   width:100px;
                }

                @media screen and (max-width: 1024px) {
                    :host {
                        min-width:80vw;
                        padding:0 10px;
                        justify-content:center;
                        margin:50px 0;
                    }
                    .cards {
                        grid-template-columns: repeat(auto-fill, minmax(60vw, 0.9fr));
                        min-width:100%;
                        height:100%;
                    }
                  }
              
                `
    }

    render() {
        return HTML`<div class="cards">
                        <slot></slot>          
                    </div>`
    }
}

customElements.define("paralax-cards", Cards);
customElements.define("card-element", Card);
