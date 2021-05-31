class Block{
    constructor(x, y, img){
        this.img = img;
        this.image = loadImage(img);
        this.x = x;
        this.y = y;
        this.block = createSprite(x, y, 50, 50);
        this.block.addImage(this.image);
        this.block.scale = 0.05;
        this.block.visible = false;
    }
    display(){
        //rect(this.x, this.y, 50, 50);
        this.block.visible = true;
        //image(this.image, this.x, this.y, 50, 50);
    }
}