import { randomInt } from "crypto";
import { EntityModel } from "../../src/models/data-types";


export async function randomEntity<T extends EntityModel>(
    array: T[]
): Promise<T | undefined> {
    const totalQuantity = array.length;
    const randomIdToDelete = randomInt(1, totalQuantity);
    return array.find(item => item.id === randomIdToDelete);
}