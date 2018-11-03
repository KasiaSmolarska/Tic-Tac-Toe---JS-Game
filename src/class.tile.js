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
            if (value === 'x') {
                this.li.classList.add('tile--x');
            } else if( value === 'y'){
                this.li.classList.add('tile--y');
            } else{
                console.warn('zła wartość, podałaś: ', value);
            }
        }
    }
}
