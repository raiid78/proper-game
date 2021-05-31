class WordBank{
    constructor(x, y, img){
        this.img = img;
        this.image = loadImage(img);
        this.x = x;
        this.y = y;
        this.block = createSprite(x, y, 25, 25);
    }
    display(){
        //rect(this.x, this.y, 50, 50);
        this.block.addImage(this.image);
        this.block.scale = 0.05;
        //image(this.image, this.x, this.y, 50, 50);
    }
}