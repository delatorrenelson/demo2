class Animals{
    live:1;
    canEat(food){
        return "I'm eating.."+food;
    }
}

class Mammals extends Animals{
    canEat(fish:"fish");
}