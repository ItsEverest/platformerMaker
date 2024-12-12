export class GameObject {
    constructor(id, position, texture, type="block"){
        this.id = id;
        this.position = position;
        this.texture = texture;
        this.type = type;
    }
}