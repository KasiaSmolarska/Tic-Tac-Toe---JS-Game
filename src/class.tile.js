const boardContainer = document.querySelector('.board__container');


class Tile {
    constructor(x,y){
        this.li = document.createElement('li');
        this.li.dataset.col = x;
        this.li.dataset.row = y;
        this.li.classList.add('tile');
        boardContainer.appendChild(this.li);
    }
    getValue(){
        return this.value;
    }
    onClick(callback){
        this.li.addEventListener('click', () =>
            callback(this)
        )
    }
    setValue(value){
        if(this.value === undefined){
            this.value = value;
            const x = `<svg viewBox="0 0 52 52">  <path class="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />  <path class="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" /> </svg>`;
            const o = `<svg viewBox="0 0 24 24"> <path fill="#000000" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /> </svg>`;
            if (value === 'x') {
                this.li.classList.add('tile--x');
                this.li.innerHTML = x;
            } else if( value === 'y'){
                this.li.classList.add('tile--o');
                this.li.innerHTML = o;
            } else{
                console.warn('zła wartość, podałaś: ', value);
            }
        }
    }
}
