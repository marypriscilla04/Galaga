class Enemy
{
    constructor(x,y)
    {
        this.image = loadImage("images/Enemy.png");
        this.body = createSprite(x,y);
    }

    display()
    {
        this.body.addImage(this.image);
        drawSprites();
    }
}