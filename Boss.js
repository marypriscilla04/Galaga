class Boss
{
    constructor(x,y)
    {
        this.image = loadImage("images/Boss.png");
        this.body = createSprite(x,y);
        this.body.addImage(this.image);
    }
}