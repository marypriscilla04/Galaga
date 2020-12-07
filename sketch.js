var player, playerImg;
var backgroundImg,rand_sprites;
var edges,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemyImg,enemy_array=[];
var playerBullet1Img,playerBullet2Img;
var enemyBulletImg,bossBulletImg;

function preload()
{
    playerImg = loadImage('spacecraft.png');
    backgroundImg = loadImage('background.jpg'); 
    playerBullet1Img = loadImage('Bullet1.png');
    playerBullet2Img = loadImage('Bullet2.png');
    enemyBulletImg = loadImage('Enemy Bullet.png');
    bossBulletImg= loadImage('Boss Bullet.png');
    enemyImg = loadImage('Enemy.png');
}

function setup()
{
    var canvas =  createCanvas(800,1200);
    var x = (windowWidth - width)/2;
    var y = (windowHeight - height);
    canvas.position(x,y);

    player = createSprite(400,1150);
    player.addImage(playerImg);
    player.scale = 0.18;    

    enemy1 = createSprite(canvas.width/2-250,450,30,30);
    enemy1.addImage(enemyImg);
    enemy1.scale = 0.1;
    enemy1.velocityY=2;
    //console.log(canvas.width/2);

    enemy2 = createSprite(canvas.width/2-200,450,30,30);
    enemy2.addImage(enemyImg);
    enemy2.scale = 0.1;
    enemy2.velocityY=2;

    enemy3 = createSprite(canvas.width/2-150,450,30,30);
    enemy3.addImage(enemyImg);
    enemy3.scale = 0.1;
    enemy3.velocityY=2;

    enemy4= createSprite(canvas.width/2-100,450,30,30);
    enemy4.addImage(enemyImg);
    enemy4.scale = 0.1;
    enemy4.velocityY=2;

    enemy5= createSprite(canvas.width/2-50,450,30,30);
    enemy5.addImage(enemyImg);
    enemy5.scale = 0.1;
    enemy5.velocityY=2;

    enemy6 = createSprite(canvas.width/2,450,30,30);
    enemy6.addImage(enemyImg);
    enemy6.scale = 0.1;
    enemy6.velocityY=2;

    enemy7 = createSprite(canvas.width/2+50,450,30,30);
    enemy7.addImage(enemyImg);
    enemy7.scale = 0.1;
    enemy7.velocityY=2;

    enemy8 = createSprite(canvas.width/2+100,450,30,30);
    enemy8.addImage(enemyImg);
    enemy8.scale = 0.1;
    enemy8.velocityY=2;

    enemy9= createSprite(canvas.width/2+150,450,30,30);
    enemy9.addImage(enemyImg);
    enemy9.scale = 0.1;
    enemy9.velocityY=2;

    enemy10= createSprite(canvas.width/2+200,450,30,30);
    enemy10.addImage(enemyImg);
    enemy10.scale = 0.1;
    enemy10.velocityY=2;

    enemy11= createSprite(canvas.width/2+250,450,30,30);
    enemy11.addImage(enemyImg);
    enemy11.scale = 0.1;
    enemy11.velocityY=2;

    enemy_array.push(enemy1);
    enemy_array.push(enemy2);
    enemy_array.push(enemy3);
    enemy_array.push(enemy4);
    enemy_array.push(enemy5);
    enemy_array.push(enemy6);
    enemy_array.push(enemy7);
    enemy_array.push(enemy8);
    enemy_array.push(enemy9);
    enemy_array.push(enemy10);
    enemy_array.push(enemy11);

    edges =  createEdgeSprites();
}

function draw()
{
    background(backgroundImg);

  //  console.log(canvas.width);
    
    player.velocityX = 0;
    player.velocityY = 0;

    if(keyDown(UP_ARROW))
    {
        player.velocityY = -5;
    }

    if(keyDown(DOWN_ARROW))
    {
        player.velocityY = 5;
    }

    if(keyDown(LEFT_ARROW))
    {
        player.velocityX = -5;
    }

    if(keyDown(RIGHT_ARROW))
    {
        player.velocityX = 5;
    }

    player.collide(edges);

    if(keyDown("space"))
    {
     firePB1();
    }

    if(keyDown("z"))
    {
     firePB2();
    }
   
    for(var i=0;i<enemy_array.length;i++)
    {
      if(enemy_array[i].y === 500)
        {
            enemy_array[i].velocityY=0;          
        }
    }
    
    spawnEnemy();
    
    drawSprites();
}

function spawnEnemy()
{
    if(frameCount % 50 === 0)
    {
       /* var enemy = new Enemy(400,50);
        enemy.display();
        enemy.lifetime = 60;*/
        rand_sprites = Math.round(random(1,11));
            switch(1)
            {
                case 1: if(player.x < canvas.width/4)
                        {
                            enemy1.rotation = -15;
                            enemy1.velocityX=2;
                            enemy1.velocityY=3
                        }
                        else
                        {
                            enemy1.rotation = -35;
                            enemy1.velocityX=2;
                            enemy1.velocityY=3
                        }
                        break;
                case 2: enemy2.rotation = -35;
                        enemy2.velocityX=2;
                        enemy2.velocityY=3;
                        break;
                case 3: enemy3.rotation = -35;
                        enemy3.velocityX=2;
                        enemy3.velocityY=3;
                        break;
                case 4: enemy4.rotation = -35;
                        enemy4.velocityX=2;
                        enemy4.velocityY=3;
                        break;
                case 5: enemy5.rotation = -35;
                        enemy5.velocityX=2;
                        enemy5.velocityY=3;
                        break;
                case 6: enemy6.rotation = -35;
                        enemy6.velocityX=2;
                        enemy6.velocityY=3;
                        break;
                case 7: enemy7.rotation = -35;
                        enemy7.velocityX=2;
                        enemy7.velocityY=3;
                        break;
                case 8: enemy8.rotation = -35;
                        enemy8.velocityX=2;
                        enemy8.velocityY=3;
                        break;
                case 9: enemy9.rotation = -35;
                        enemy9.velocityX=2;
                        enemy9.velocityY=3;
                        break;
                case 10: enemy10.rotation = -35;
                        enemy10.velocityX=2;
                        enemy10.velocityY=3;
                        break;
                case 11: enemy11.rotation = -35;
                        enemy11.velocityX=2;
                        enemy11.velocityY=3;
                        break;
            }
    }
}

function spawnBoss()
{
//spawn boss

}

function firePB1()
{
//fire bullet 1 on space pressed
var bullet1 = createSprite(200,300,20,20);
bullet1.x = player.x;
bullet1.y = player.y - 50;
bullet1.velocityY = -2;
bullet1.shapeColor = "yellow";
bullet1.addImage(playerBullet1Img);
bullet1.scale=0.05;
}

function firePB2()
{
//fire bullet 2 on Z pressed
var bullet2 = createSprite(200,300,20,20);
bullet2.x = player.x;
bullet2.y = player.y - 50;
bullet2.velocityY = -2;
bullet2.shapeColor = "green";
bullet2.addImage(playerBullet2Img);
bullet2.scale=2;
}

function enemyFiring()
{
//enemy firing

}

function bossFiring()
{
//boss firing

}