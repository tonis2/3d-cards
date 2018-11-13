# parallax-cards

Thanks for [Adrians example](https://codepen.io/dazulu/pen/VVZrQv),
used it to create this custom-element for parallax cards 

----

### How to use yourself

Add this to your HTML

```js
<script type="module" src="https://gitcdn.xyz/repo/tonis2/parallax-cards/master/cards.js"></script>
```

And then use it like this.



```HTML

    <paralax-cards>
        <card-element title="Princess Mononoke" background="./assets/3dr_spirited.jpg" img="./assets/3dr_chihiro.png"></card-element>
        <card-element title="Spirited Away" background="./assets/3dr_monobg.jpg" img="./assets/3dr_mono.png"></card-element>
        <card-element title="Howling castle" background="./assets/3dr_howlbg.jpg" img="./assets/3dr_howlcastle.png"></card-element>
    </paralax-cards>

```


`card-element` accepts attributes `name`, `background`, `img`.

View it [live](https://tonis2.github.io/parallax-cards/)
